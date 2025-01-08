import React from "react";
import EditModal from "../../../../components/modals/edit-modal";
import UserForm from "./UserForm";

// Define the shape of the modal state
interface EditModalState {
  open: boolean;
  data: any | null; // 'any' can be more specific based on your data structure
}

// Define the type for the EditUser component props
interface EditUserProps {
  setShowEditModal: React.Dispatch<React.SetStateAction<EditModalState>>;
  showEditModal: EditModalState;
}

const EditUser: React.FC<EditUserProps> = ({
  setShowEditModal,
  showEditModal,
}) => {
  return (
    <EditModal
      title="Edit User"
      setEditModal={setShowEditModal}
      editModal={showEditModal}
    >
      <UserForm />
    </EditModal>
  );
};

export default EditUser;
