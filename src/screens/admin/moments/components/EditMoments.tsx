import React from "react";
import EditModal from "../../../../components/modals/edit-modal";
import MomentsForm from "./MomentsForm";

// Define the shape of the modal state
interface EditModalState {
  open: boolean;
  data: any | null; // 'any' can be more specific based on your data structure
}

// Define the type for the EditMoments component props
interface EditMomentsProps {
  setShowEditModal: React.Dispatch<React.SetStateAction<EditModalState>>;
  showEditModal: EditModalState;
}

const EditMoments: React.FC<EditMomentsProps> = ({
  setShowEditModal,
  showEditModal,
}) => {
  return (
    <EditModal
      title="Edit Moments"
      setEditModal={setShowEditModal}
      editModal={showEditModal}
    >
      <MomentsForm />
    </EditModal>
  );
};

export default EditMoments;
