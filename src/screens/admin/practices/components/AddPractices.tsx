import React, { useEffect } from "react";
import AddModal from "../../../../components/modals/add-modal";
import PracticesForm from "./PracticesForm";
import { useAddPracticesMutation } from "../../../../services/practices";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
// 
// Define the types for the props passed to AddUser
interface AddPracticesProps {
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>; // State setter for the modal visibility
  showAddModal: boolean; // Modal visibility flag
}

const AddPractices: React.FC<AddPracticesProps> = ({
  setShowAddModal,
  showAddModal,
}) => {
  const navigate = useNavigate();
  const [addPractices, { isLoading, isSuccess, isError, data }] = useAddPracticesMutation();

  useEffect(() => {
    if (isSuccess) {
      if (data && data.status === "success") {
        message.success(data.message);
        navigate("/practices");
      }
      else { message.error(data?.message) }
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      message.error(data?.message || "Something went wrong");
    }
  }, [isError]);

  return (
    <AddModal
      title="Add Practice"
      setOpen={setShowAddModal}
      open={showAddModal}
      postData={addPractices}
      loading={isLoading}
    >
      <PracticesForm />
    </AddModal>
  );
};

export default AddPractices;
