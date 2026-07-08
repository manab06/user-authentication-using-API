
import {z} from "zod"



export const authData = z.object({

    name: z.string().min(1,'Name is requred').regex(/^[A-Za-z\s]+$/, "Invalid name format"),
    email: z.string().min(1,"Email must Requred"),
    password:z.string().min(5,'Password is requred').regex(/^[A-Za-z0-9]+$/, "Password can only contain letters and numbers"),
    avatar:z.string(),
})

export type AuthData = z.infer< typeof authData> ;