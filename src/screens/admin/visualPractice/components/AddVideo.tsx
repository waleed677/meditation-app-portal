import React, { useEffect } from "react";
import AddModal from "../../../../components/modals/add-modal";
import VideoForm from "./VideoForm";
import { useAddVisualPracticeMutation } from "../../../../services/visualPractice";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

// Define the types for the props passed to AddUser
interface AddVideoProps {
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>; // State setter for the modal visibility
  showAddModal: boolean; // Modal visibility flag
}

const AddVideo: React.FC<AddVideoProps> = ({
  setShowAddModal,
  showAddModal,
}) => {
  const navigate = useNavigate();
  const [addVisualPractice, { isLoading, isSuccess, isError, data }] = useAddVisualPracticeMutation();

  useEffect(() => {
    if (isSuccess) {
      if (data && data.status === "success") {
        message.success(data.message);
        navigate("/visual-practice");
      } else { message.error(data?.message); }
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      message.error(data?.message || "Something went wrong");
    }
  }, [isError, data]);
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
