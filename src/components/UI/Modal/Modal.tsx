import { DeleteAccountModal } from "../../../store/types"
import { Button } from "../button/Button"


export function Modal({id,isOpen,title,message,confirmText,cancelText,onConfirm,onClose}:DeleteAccountModal ){
                if(!isOpen) return null;
    return (
        <div>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                  <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">
                    {/* Header */}
                    <h2 className="text-xl font-semibold text-gray-900">
                      Delete Account
                    </h2>
            
                    {/* Body */}
                    <p className="mt-3 text-gray-600">
                      Are you sure you want to delete your account?
                      <br />
                      <span className="font-medium text-red-600">
                        This action cannot be undone.
                      </span>
                    </p>
            
                    {/* Footer */}
                    <div className="mt-6 flex justify-end gap-3">
                      <Button type="button" onClick={onClose}>
                        Cancel
                      </Button>
            
                      <Button type="button" onClick={onConfirm}>
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
            
        </div>
    )
}


