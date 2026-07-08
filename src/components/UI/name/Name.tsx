import React from 'react'
type Props = {
    register:any;
}

export function Name({register}:Props) {
    // console.log("register is-"+register);
    return (
        <div>

            <input type='text' {...register("name")} placeholder="Enter your Name"
                className="flex h-10 w-full bg-[rgb(245,247,250)] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-sky-500 disabled:cursor-not-allowed disabled:opacity-50" ></input>

        </div>
    )
}


