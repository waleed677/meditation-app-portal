import React from "react";
import EditModal from "../../../../components/modals/edit-modal";
import { useAddAudioPracticeMutation } from "../../../../services/audioPractice";
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
  const [addAudioPractice, { isLoading }] = useAddAudioPracticeMutation();

  return (
    <EditModal
      title="Edit Audio"
      setEditModal={setShowEditModal}
      editModal={showEditModal}
      postData={addAudioPractice}
      loading={isLoading}
      customValues={{ id: showEditModal.data?.id, action: "update" }}
    >
      <AudioForm
        setShowEditModal={setShowEditModal}
        showEditModal={showEditModal}
      />
    </EditModal>
  );
};

export default EditAudio;
