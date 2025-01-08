import React from "react";
import EditModal from "../../../../components/modals/edit-modal";
import ResourcesForm from "./ResourcesForm";

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
  return (
    <EditModal
      title="Edit Resources"
      setEditModal={setShowEditModal}
      editModal={showEditModal}
    >
      <ResourcesForm />
    </EditModal>
  );
};

export default EditResources;
