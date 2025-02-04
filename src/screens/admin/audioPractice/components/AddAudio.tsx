import React, { useEffect } from "react";
import AddModal from "../../../../components/modals/add-modal";
import AudioForm from "./AudioForm";
import { useAddAudioPracticeMutation } from "../../../../services/audioPractice";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
// Define the types for the props passed to AddUser
interface AddAudioProps {
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>; // State setter for the modal visibility
  showAddModal: boolean; // Modal visibility flag
}

const AddAudio: React.FC<AddAudioProps> = ({
  setShowAddModal,
  showAddModal,
}) => {
  const navigate = useNavigate();
  const [addAudioPractice, { isLoading, isSuccess, isError, data }] = useAddAudioPracticeMutation();

  useEffect(() => {
    if (isSuccess) {
      if (data && data.status === "success") {
        message.success(data.message);
        navigate("/audio-practice");
      } else { message.error(data?.message); }
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      message.error(data?.message || "Something went wrong");
    }
  }, [isError]);
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
