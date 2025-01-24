import React from "react";
import AddModal from "../../../../components/modals/add-modal";
import AudioForm from "./AudioForm";
import { useAddAudioPracticeMutation } from "../../../../services/audioPractice";
// Define the types for the props passed to AddUser
interface AddAudioProps {
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>; // State setter for the modal visibility
  showAddModal: boolean; // Modal visibility flag
}

const AddAudio: React.FC<AddAudioProps> = ({
  setShowAddModal,
  showAddModal,
}) => {
  const [addAudioPractice, { isLoading }] = useAddAudioPracticeMutation();
  return (
    <AddModal
      postData={addAudioPractice}
      loading={isLoading}
      title="Add Audio"
      setOpen={setShowAddModal}
      open={showAddModal}
    >
      <AudioForm />
    </AddModal>
  );
};

export default AddAudio;
