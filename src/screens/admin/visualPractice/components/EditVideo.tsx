import React, { useEffect } from "react";
import EditModal from "../../../../components/modals/edit-modal";
import VideoForm from "./VideoForm";
import { useAddVisualPracticeMutation } from "../../../../services/visualPractice";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

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
  const navigate = useNavigate();
  const [addVisualPractice, { isLoading, isSuccess, isError, data }] = useAddVisualPracticeMutation();
  
  useEffect(() => {
    if (isSuccess) {
      if (data) {
        message.success(data.message);
        navigate("/visual-practice");
      }
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      message.error("Something went wrong");
    }
  }, [isError]);

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
