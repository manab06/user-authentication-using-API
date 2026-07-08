import React from 'react'
type Props = {
    register: any;
};

export function Password({ register }: Props) {
    return (
        <div>
            <h6>Please Enter your password</h6>

            <input type='password'{...register("password")} placeholder="Enter Password"
                className="flex h-10 bg-white-500 
                w-full rounded-md border border-gray-300 
                bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 
                focus:outline-hidden focus:ring-2 focus:ring-sky-500 
                focus:border-sky-500 disabled:cursor-not-allowed 
                disabled:opacity-50" >

            </input>

        </div>
    )
}