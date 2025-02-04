import React, { useEffect } from "react";
import AddModal from "../../../../components/modals/add-modal";
import ResourcesForm from "./ResourcesForm";
import { useAddResourcesMutation } from "../../../../services/resources";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

// Define the types for the props passed to AddUser
interface AddResourcesProps {
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>; // State setter for the modal visibility
  showAddModal: boolean; // Modal visibility flag
}

const AddResources: React.FC<AddResourcesProps> = ({
  setShowAddModal,
  showAddModal,
}) => {
  const navigate = useNavigate();
  const [addResources, { isLoading, isSuccess, isError, data }] = useAddResourcesMutation();

  useEffect(() => {
    if (isSuccess) {
      if (data && data.status === "success") {
        message.success(data.message);
        navigate("/resources");
      } else {
        message.error(data?.message);
      }
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      message.error(data?.message || "Something went wrong");
    }
  }, [isError]);

  return (
    <AddModal
      title="Add Resources"
      setOpen={setShowAddModal}
      open={showAddModal}
      postData={addResources}
      loading={isLoading}
    >
      <ResourcesForm />
    </AddModal>
  );
};

export default AddResources;
