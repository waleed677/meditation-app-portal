import React from "react";
import AddModal from "../../../../components/modals/add-modal";
import UserForm from "./UserForm";
import { useAddUsersMutation } from "../../../../services/users";

// Define the types for the props passed to AddUser
interface AddUserProps {
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>; // State setter for the modal visibility
  showAddModal: boolean; // Modal visibility flag
}

const AddUser: React.FC<AddUserProps> = ({ setShowAddModal, showAddModal }) => {
    const [addUsers, { isLoading }] = useAddUsersMutation();

  return (
    <AddModal
      postData={addUsers}
      loading={isLoading}
      title="Add User" 
      setOpen={setShowAddModal} 
      open={showAddModal}
    >
      <UserForm />
    </AddModal>
  );
};

export default AddUser;
