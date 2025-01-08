import React from "react";
import EditModal from "../../../../components/modals/edit-modal";
import AudioForm from "./AudioForm";

// Define the shape of the modal state
interface EditModalState {
  open: boolean;
  data: any | null; // 'any' can be more specific based on your data structure
}

// Define the type for the EditAudio component props
interface EditAudioProps {
  setShowEditModal: React.Dispatch<React.SetStateAction<EditModalState>>;
  showEditModal: EditModalState;
}

const EditAudio: React.FC<EditAudioProps> = ({
  setShowEditModal,
  showEditModal,
}) => {
  return (
    <EditModal
      title="Edit Audio"
      setEditModal={setShowEditModal}
      editModal={showEditModal}
    >
      <AudioForm />
    </EditModal>
  );
};

export default EditAudio;
