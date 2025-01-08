import React from "react";
import EditModal from "../../../../components/modals/edit-modal";
import PracticesForm from "./PracticesForm";

// Define the shape of the modal state
interface EditModalState {
  open: boolean;
  data: any | null; // 'any' can be more specific based on your data structure
}

// Define the type for the EditPractices component props
interface EditPracticesProps {
  setShowEditModal: React.Dispatch<React.SetStateAction<EditModalState>>;
  showEditModal: EditModalState;
}

const EditPractices: React.FC<EditPracticesProps> = ({
  setShowEditModal,
  showEditModal,
}) => {
  return (
    <EditModal
      title="Edit Practice"
      setEditModal={setShowEditModal}
      editModal={showEditModal}
    >
      <PracticesForm />
    </EditModal>
  );
};

export default EditPractices;
