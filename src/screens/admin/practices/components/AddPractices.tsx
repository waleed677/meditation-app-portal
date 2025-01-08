import React from "react";
import AddModal from "../../../../components/modals/add-modal";
import PracticesForm from "./PracticesForm";

// Define the types for the props passed to AddUser
interface AddPracticesProps {
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>; // State setter for the modal visibility
  showAddModal: boolean; // Modal visibility flag
}

const AddPractices: React.FC<AddPracticesProps> = ({
  setShowAddModal,
  showAddModal,
}) => {
  return (
    <AddModal
      title="Add Practice"
      setOpen={setShowAddModal}
      open={showAddModal}
    >
      <PracticesForm />
    </AddModal>
  );
};

export default AddPractices;
