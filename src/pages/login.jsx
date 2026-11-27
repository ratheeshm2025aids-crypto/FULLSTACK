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
    <div className="text-blue-500">Hi</div>
    <form onSubmit={handleSubmit}>
      <input type="text" required placeholder="Enter your name" name="username" onChange={handleChange}/>
      <input type="password" required placeholder="Enter your password" name="password"  onChange={handleChange}/>
      <button type="submit">Submit</button>   
    </form>
    </>
  );
}
export default Login;