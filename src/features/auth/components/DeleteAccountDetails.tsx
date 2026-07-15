
import { DeleteAccountModal, DeleteUserResponse } from '../../../store/types';
import {useState,useEffect} from 'react'
import { deleteProfile } from '../API/deleteProfile';
import {Modal} from '../../../components/UI/Modal/Modal.tsx';
import { any } from 'zod';
import { useDelete } from '../hooks/useDelete.ts';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../config/routs.ts';
import { useRedirectToHomepage } from '../hooks/useRedirectToHomepage.ts';
import { toast } from 'react-toastify';

interface DeleteAccountDetailsProps {
     isOpen: boolean;
     onClose: () => void;
     onDeleted?: () => void; 
}

export function DeleteAccountDetails({isOpen, onDeleted, onClose }:DeleteAccountDetailsProps ) {
    const navigate = useNavigate();
    const {onSubmitDelete} = useDelete();

    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState("");
    

    // const  onConfirm = async ()=>{
    //     setIsDeleting(true);
    //     setError("");
    //     try{

    //         await onSubmitDelete();
    //         onDeleted?.();
    //         onClose();
    //         toast.success("Account deleted successfully!");
    //     }catch(error){
    //         setError("Failded to delete account. Please try again");
    //         toast.error("Failed to delete account. Please try again.");
    //     }finally {
    //         setIsDeleting(false);
    //     }
        

    // };

    // // useEffect(()=>{
    // //     const timer = setTimeout(()=>{
    // //         navigate(ROUTES.PUBLIC.LOGIN);

    // //     },3000);
        

    // //     return ()=> clearTimeout(timer);

    // // },[navigate]);

    // useRedirectToHomepage()
    
const onConfirm = async () => {
  setIsDeleting(true);
  setError("");

  try {
    await onSubmitDelete();

    toast.success("Account deleted successfully!");

    onDeleted?.();
    onClose();

    navigate(ROUTES.PUBLIC.LOGIN);

  } catch (error) {
    setError("Failed to delete account.");
    toast.error("Failed to delete account.");
  } finally {
    setIsDeleting(false);
  }
};


    return (
         <>
      <Modal
        id="delete-account"
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={onConfirm}
        title="Delete Account"
        message={
          <>
            <div className="flex flex-col items-center text-center">
              {/* Warning Icon */}
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v4m0 4h.01M10.29 3.86l-7.5 13A1 1 0 003.66 18h16.68a1 1 0 00.87-1.5l-7.5-13a1 1 0 00-1.74 0z"
                  />
                </svg>
              </div>

              <p className="text-gray-700 text-base leading-7">
                Are you sure you want to delete your account?
              </p>

              <p className="mt-3 text-sm text-red-600 font-medium">
                This action is permanent and cannot be undone.
              </p>
            </div>
          </>
        }
        confirmText={isDeleting ? "Deleting..." : "Yes, Delete"}
        cancelText="Cancel"
      />

      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-center">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}
    </>
       
    )
}


