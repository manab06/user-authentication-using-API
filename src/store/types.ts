

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

