import z from "zod"
export const registerschema=z.object
({
    name:z.string().min(3,"Name must contain 3 letter"),
    email:z.string().email("Enter a valid email"),
    password:z.string().min(8,"Password should me mininum of 8 characters "),
    age:z.coerce.number().min(18,"Age should be min of 18")
})