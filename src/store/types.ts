

export interface LoginRequest {
    email: string;
    name: string;
    password: string;
    avatar:string|any;
    
}

export interface LoginResponse {
  access_token:string;
  refresh_token:string;
}

export interface CreateUserResponse {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
  creationAt: string; // ISO date string
  updatedAt: string;  // ISO date string
}

export interface DeleteUserResponse {
  id:number;
  name:string;
  email:string;
  password:string;
  role:string;
  avatar:string;
}

export interface DeleteAccountModal {
  id:number|string;
  isOpen: boolean;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  onClose: () => void;
  onConfirm: () => void;
}


export interface contactFormDataType {
  
    id:number;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string;
    creationAt: string;
    updatedAt: string;
}


export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface GetProductDeatilsType {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
}
//dont send unnessecary data to api for update user profile, only send the data which is required to update the user profile, so I comment this
export interface UpdateUserProfileData {
  // id:number;
  name:string;
  email:string;
  // password:null|string;
  // role:null|string;
  avatar:string;
}

