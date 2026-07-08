
// import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// interface AuthState {
//     name: string;
//     email: string;
// }

// const initialState:AuthState ={
//     name:"",
//     email:"",
// };

// const authSlice = createSlice({
//     name:"auth",
//     initialState,

//     reducers: {
//         setName: (state, action:PayloadAction<string>) => {
//             state.name = action.payload;
//         },

//         setEmail: (state,action: PayloadAction<string>)=> {
//             state.email= action.payload;
//         },

//         resetForm: (state)=>{
//             state.name = "";
//             state.email = "";
//         },
//     },
// });

// export const {
//     setName,
//     setEmail,
//     resetForm,
// } = authSlice.actions;

// export default authSlice.reducer;