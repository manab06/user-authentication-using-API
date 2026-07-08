
import {z} from "zod"

export const authDataForLogIn = z.object({

    
   email: z.string().min(1,"Email must Requred"),

   password:z.string().min(5,'Password is requred').regex(/^[A-Za-z0-9]+$/, "Password can only contain letters and numbers"),
   
})

export type AuthDataForLogin = z.infer< typeof authDataForLogIn > ;