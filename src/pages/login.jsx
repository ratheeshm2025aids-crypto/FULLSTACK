import { useState } from "react";
import { useNavigate,useLocation} from "react-router-dom";
function Login() { 
  const location= useLocation();
  const [loginData,setLogindata]=useState({
     username:"",
     password:""
  })
  function handleChange(e) {
  setLogindata({
    ...loginData,
    [e.target.name]: e.target.value
  });
  }
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const registerData = location.state;
    if(loginData.username===registerData.email && loginData.password===registerData.password){
      console.log("If condition success");
      navigate("/dashboard");
    }else{
      console.log("Invalid Username or Password")
    }
    console.log("Register data",registerData);
    console.log("Login Data",loginData);
    
  }
  return(
    <>
    <div className="min-h-screen flex justify-center items-center bg-gray-100 ">
    <form onSubmit={handleSubmit} className="bg-white p-6 w-96 rounded-lg shadow-md ">
       <h2 className="text-2xl font-bold text-center mb-5">
                Login
            </h2>
            <label className="block text-sm font-medium mb-1"> UserName </label>
      <input type="text" required placeholder="Enter your email" name="username" onChange={handleChange}
      className="w-full p-2 mb-4  border rounded"/>
      <label className="block text-sm font-medium mb-1"> Password</label>
      <input type="password" required placeholder="Enter your password" name="password"  onChange={handleChange}
      className="w-full p-2 mb-4 border rounded"/>
      <button type="submit" className="w-full bg-green-400 border rounded hover:bg-green-600 p-2">Submit</button>   
    </form>
    </div>
    </>
  );
}
export default Login;