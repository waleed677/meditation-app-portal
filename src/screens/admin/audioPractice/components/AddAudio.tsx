import React from "react";
import AddModal from "../../../../components/modals/add-modal";
import AudioForm from "./AudioForm";

// Define the types for the props passed to AddUser
interface AddAudioProps {
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>; // State setter for the modal visibility
  showAddModal: boolean; // Modal visibility flag
}

const AddAudio: React.FC<AddAudioProps> = ({
  setShowAddModal,
  showAddModal,
}) => {
  return (
    <AddModal title="Add Audio" setOpen={setShowAddModal} open={showAddModal}>
      <AudioForm />
    </AddModal>
  );
};

export default AddAudio;
