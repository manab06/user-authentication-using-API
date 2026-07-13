import { useState } from "react";
import { Button } from "../../../components/UI/button/Button";
import { DeleteAccountDetails } from "../components/DeleteAccountDetails";
import { useAuthStore } from "../store/store";

export function DashBoardPageComponent() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { name, email, avatar } = useAuthStore();

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        My Details
      </h2>

      <div className="bg-white shadow rounded-xl p-6 flex gap-6">
        <img
          src={avatar || "https://via.placeholder.com/100"}
          alt={name ?? ""}
          className="w-24 h-24 rounded-full"
        />

        <div>
          <h3 className="text-xl font-semibold">
            {name}
          </h3>

          <p>{email}</p>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <Button>
          Update Account
        </Button>

        <Button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 hover:bg-red-700"
        >
          Delete Account
        </Button>
      </div>

      <DeleteAccountDetails
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}