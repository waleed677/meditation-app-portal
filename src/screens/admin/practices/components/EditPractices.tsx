import React, { useEffect } from "react";
import EditModal from "../../../../components/modals/edit-modal";
import PracticesForm from "./PracticesForm";
import { useAddPracticesMutation } from "../../../../services/practices";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

// Define the shape of the modal state
interface EditModalState {
  open: boolean;
  data: any | null; // 'any' can be more specific based on your data structure
}

// Define the type for the EditPractices component props
interface EditPracticesProps {
  setShowEditModal: React.Dispatch<React.SetStateAction<EditModalState>>;
  showEditModal: EditModalState;
}
// 
const EditPractices: React.FC<EditPracticesProps> = ({
  setShowEditModal,
  showEditModal,
}) => {
  const navigate = useNavigate();
  const [addPractices, { isLoading, isSuccess, isError, data }] = useAddPracticesMutation();
  
  useEffect(() => {
    if (isSuccess) {
      if (data) {
        message.success(data.message);
        navigate("/practices");
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
      loading={isLoading}
      postData={addPractices}
      customValues={{ id: showEditModal.data?.id, action: "update" }}
      title="Edit Practice"
      setEditModal={setShowEditModal}
      editModal={showEditModal}
    >
      <PracticesForm         
        setShowEditModal={setShowEditModal}
        showEditModal={showEditModal} />
    </EditModal>
  );
};

export default EditPractices;
