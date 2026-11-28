import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
    const location = useLocation();
    const[userdata, setUserdata] = useState("");
    const[count,setCount]=useState(0);
    const[check,setCheck]=useState(5);
    //function displaydata(){
       // setUserdata(location.state);
        //console.log(userdata)
        useEffect(()=>{
            setUserdata(location.state);
            console.log(check)
             },[check])
        

    return ( 
        <>
            <button onClick={()=>setCheck(check)}>button</button>
        </>
     );
}

export default Dashboard;