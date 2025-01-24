import React from "react";
import AddModal from "../../../../components/modals/add-modal";
import MomentsForm from "./MomentsForm";
import { useAddMomentMutation } from "../../../../services/moments";
// Define the types for the props passed to AddUser
interface AddMomentsProps {
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>; // State setter for the modal visibility
  showAddModal: boolean; // Modal visibility flag
}

const AddMoments: React.FC<AddMomentsProps> = ({
  setShowAddModal,
  showAddModal,
}) => {
  const [addMoment, { isLoading }] = useAddMomentMutation();
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
