import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import {registerschema} from "../components/FormSchema/registerschema";
import {zodResolver} from "@hookform/resolvers/zod";
function Register(){
    const navigate = useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver: zodResolver(registerschema)
    })
    function onSubmit1(data){
        console.log(data)
        alert("registered successfully")
        navigate("/",{
            state:data
        })
    }
return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <form onSubmit={handleSubmit(onSubmit1)}
            className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold text-center mb-5">
                Register
            </h2>
             <label className="block text-sm font-medium mb-1"> Name </label>
            <input type="text" required placeholder="Enter your name"{...register("name")}
                className="w-full p-2 mb-4 border rounded"
            />
            <p className="text-red-500 text-sm mb-2">{errors.name?.message}</p>
             <label className="block text-sm font-medium mb-1"> Email </label>
            <input type="email"  required  placeholder="Enter your email" {...register("email")}
                className="w-full p-2 mb-4 border rounded"
            />
            <p className="text-red-500 text-sm mb-2">{errors.email?.message}</p>
             <label className="block text-sm font-medium mb-1"> Password </label>
            <input type="password" required placeholder="Enter your password"   {...register("password")}
                className="w-full p-2 mb-4 border rounded"
            />
            <p className="text-red-500 text-sm mb-2">{errors.password?.message}</p>
             <label className="block text-sm font-medium mb-1"> Age </label>
            <input type="number" required placeholder="Enter your age"
                {...register("age")}
                className="w-full p-2 mb-4 border rounded"
            />
            <p className="text-red-500 text-sm mb-3">{errors.age?.message}</p>

            <button
                type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
                Submit
            </button>

        </form>
    </div>
);


}
export default Register;