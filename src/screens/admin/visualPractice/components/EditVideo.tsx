import React from "react";
import EditModal from "../../../../components/modals/edit-modal";
import VideoForm from "./VideoForm";
import { useAddVisualPracticeMutation } from "../../../../services/visualPractice";

// Define the shape of the modal state
interface EditModalState {
  open: boolean;
  data: any | null; // 'any' can be more specific based on your data structure
}

// Define the type for the EditVideo component props
interface EditVideoProps {
  setShowEditModal: React.Dispatch<React.SetStateAction<EditModalState>>;
  showEditModal: EditModalState;
}

const EditVideo: React.FC<EditVideoProps> = ({
  setShowEditModal,
  showEditModal,
}) => {
  const [addVisualPractice, { isLoading }] = useAddVisualPracticeMutation();

  return (
    <EditModal
      postData={addVisualPractice}
      loading={isLoading}
      title="Edit Video"
      setEditModal={setShowEditModal}
      editModal={showEditModal}
      customValues={{ id: showEditModal.data?.id, action: "update" }}
    >
      <VideoForm
        setShowEditModal={setShowEditModal}
        showEditModal={showEditModal}
      />
    </EditModal>
  );
};

export default EditVideo;
