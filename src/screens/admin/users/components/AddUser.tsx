import React from "react";
import AddModal from "../../../../components/modals/add-modal";
import UserForm from "./UserForm";

// Define the types for the props passed to AddUser
interface AddUserProps {
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>; // State setter for the modal visibility
  showAddModal: boolean; // Modal visibility flag
}

const AddUser: React.FC<AddUserProps> = ({ setShowAddModal, showAddModal }) => {
  return (
    <AddModal title="Add User" setOpen={setShowAddModal} open={showAddModal}>
      <UserForm />
    </AddModal>
  );
};

export default AddUser;
