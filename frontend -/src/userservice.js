import axios from "axios";

//for signup
export async function saveUser(formData){
    try {
        const response=await axios.post("http://127.0.0.1:4000/User",formData);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

//for login
export async function login(credentials){
    const response=await axios.post("http://127.0.0.1:4000/User/login",credentials);
    return response.data;
}


//for fetch data

    // Assuming your getUserData function looks like this
export async function getUserData(email) {
    try {
      // Adjust the API endpoint to accept the email parameter
      const response = await axios.get(`http://127.0.0.1:4000/User/${email}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error; // Propagate the error to handle it where this function is called
    }
  }
  