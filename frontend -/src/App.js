import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import Register from "./components/Register";
import Navigation from "./components/Navigation";


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/dashboard/:email" element={<Dashboard/>}></Route>
      </Routes>
      
    </BrowserRouter>    
  );
}

export default App;
