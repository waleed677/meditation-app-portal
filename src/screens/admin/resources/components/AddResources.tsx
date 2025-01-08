import React from "react";
import AddModal from "../../../../components/modals/add-modal";
import ResourcesForm from "./ResourcesForm";

// Define the types for the props passed to AddUser
interface AddResourcesProps {
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>; // State setter for the modal visibility
  showAddModal: boolean; // Modal visibility flag
}

const AddResources: React.FC<AddResourcesProps> = ({
  setShowAddModal,
  showAddModal,
}) => {
  return (
    <AddModal
      title="Add Resources"
      setOpen={setShowAddModal}
      open={showAddModal}
    >
      <ResourcesForm />
    </AddModal>
  );
};

export default AddResources;
