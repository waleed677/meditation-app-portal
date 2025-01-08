import React from "react";
import AddModal from "../../../../components/modals/add-modal";
import MomentsForm from "./MomentsForm";

// Define the types for the props passed to AddUser
interface AddMomentsProps {
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>; // State setter for the modal visibility
  showAddModal: boolean; // Modal visibility flag
}

const AddMoments: React.FC<AddMomentsProps> = ({
  setShowAddModal,
  showAddModal,
}) => {
  return (
    <AddModal title="Add Moments" setOpen={setShowAddModal} open={showAddModal}>
      <MomentsForm />
    </AddModal>
  );
};

export default AddMoments;
