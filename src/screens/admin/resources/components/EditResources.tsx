import React, { useEffect } from "react";
import EditModal from "../../../../components/modals/edit-modal";
import ResourcesForm from "./ResourcesForm";
import { useAddResourcesMutation } from "../../../../services/resources";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

// Define the shape of the modal state
interface EditModalState {
  open: boolean;
  data: any | null; // 'any' can be more specific based on your data structure
}

// Define the type for the EditResources component props
interface EditResourcesProps {
  setShowEditModal: React.Dispatch<React.SetStateAction<EditModalState>>;
  showEditModal: EditModalState;
}

const EditResources: React.FC<EditResourcesProps> = ({
  setShowEditModal,
  showEditModal,
}) => {
  const navigate = useNavigate();
  const [addResources, { isLoading, isSuccess, isError, data }] = useAddResourcesMutation();

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        message.success(data.message);
        navigate("/resources");
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
      postData={addResources}
      customValues={{ id: showEditModal.data?.id, action: "update" }}
      title="Edit Resources"
      setEditModal={setShowEditModal}
      editModal={showEditModal}
    >
      <ResourcesForm
        setShowEditModal={setShowEditModal}
        showEditModal={showEditModal}
       />
    </EditModal>
  );
};

export default EditResources;
