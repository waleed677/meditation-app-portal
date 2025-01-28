import React, { useEffect } from "react";
import AddModal from "../../../../components/modals/add-modal";
import MomentsForm from "./MomentsForm";
import { useAddMomentMutation } from "../../../../services/moments";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
// Define the types for the props passed to AddUser
interface AddMomentsProps {
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>; // State setter for the modal visibility
  showAddModal: boolean; // Modal visibility flag
}

const AddMoments: React.FC<AddMomentsProps> = ({
  setShowAddModal,
  showAddModal,
}) => {
  const navigate = useNavigate();
  const [addMoment, { isLoading, isSuccess, isError, data }] = useAddMomentMutation();

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        message.success(data.message);
        navigate("/moments");
      }
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      message.error("Something went wrong");
    }
  }, [isError]);
  return (
    <AddModal
      postData={addMoment}
      loading={isLoading}
      title="Add Moments"
      setOpen={setShowAddModal}
      open={showAddModal}
    >
      <MomentsForm />
    </AddModal>
  );
};

export default AddMoments;
