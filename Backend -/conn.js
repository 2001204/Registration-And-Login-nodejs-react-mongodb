import express from 'express';
import mongoose from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import { User } from './UserModel.js';
import bcrypt from 'bcryptjs';
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());
const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/registration&login');
        console.log("Database connection created !")
    } catch (error) {
        console.log(error);
    }
}

//api for insert user data (sign up )
app.post("/User", async (request, response) => {
    try {
        const reqData = request.body;
        reqData['password'] = bcrypt.hashSync(reqData.password, 10);
        reqData['confirmpassword'] = bcrypt.hashSync(reqData.confirmpassword, 10);
        const userDetails = new User(reqData);
        await userDetails.save();
        response.send({ message: "User Inserted" });
    } catch (error) {
        console.error(error);
        response.status(500).send({ message: "Something Went wrong" });
    }
});


app.get("/User/:email", async (request, response) => {
    try {
        const user = await User.findOne({ email: request.params.email });
        if (user == null) {
            response.status(StatusCodes.NOT_FOUND).send({ message: USER_NOT_FOUND });
        }
        else {
            response.send({ user: user });
        }
    } catch (error) {
        response.send({ message: "User Not Found" });
        console.log("User not findout");
        //response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});

// login API(it check given crediential from database compare and do login)
app.post("/User/login", async(request, response) => {
    try {
        const user= await User.findOne({ email: request.body.email });
        if (user) {
            if (bcrypt.compareSync(request.body.password, user.password))
             {
                response.status(StatusCodes.OK).send({ message: "Login successful"});

                // response.status(StatusCodes.OK).send({ message: "Login successful" });
            }
       else {
            response.status(StatusCodes.BAD_REQUEST).send({ message: "Invalid email or password !" });
        }
    } else {
        response.status(StatusCodes.BAD_REQUEST).send({ message: "Invalid email or password........" });
    }
} catch (error) {
    console.error(error);
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: "Something went wrong" });
}
});


app.listen(4000, () => {
    console.log("Server has started on 4000...!");
    connectDb();
});