import React from "react";
import AddModal from "../../../../components/modals/add-modal";
import VideoForm from "./VideoForm";
import { useAddVisualPracticeMutation } from "../../../../services/visualPractice";

// Define the types for the props passed to AddUser
interface AddVideoProps {
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>; // State setter for the modal visibility
  showAddModal: boolean; // Modal visibility flag
}

const AddVideo: React.FC<AddVideoProps> = ({
  setShowAddModal,
  showAddModal,
}) => {
  const [addVisualPractice, { isLoading }] = useAddVisualPracticeMutation();
  return (
    <AddModal
      postData={addVisualPractice}
      loading={isLoading}
      title="Add Video"
      setOpen={setShowAddModal}
      open={showAddModal}
    >
      <VideoForm />
    </AddModal>
  );
};

export default AddVideo;
