import React from "react";
import EditModal from "../../../../components/modals/edit-modal";
import MomentsForm from "./MomentsForm";
import { useAddMomentMutation } from "../../../../services/moments";

interface EditModalState {
  open: boolean;
  data: any | null;
}

interface EditMomentsProps {
  setShowEditModal: React.Dispatch<React.SetStateAction<EditModalState>>;
  showEditModal: EditModalState;
}

const EditMoments: React.FC<EditMomentsProps> = ({
  setShowEditModal,
  showEditModal,
}) => {
  const [addMoment, { isLoading }] = useAddMomentMutation();

  return (
    <EditModal
      loading={isLoading}
      postData={addMoment}
      customValues={{ id: showEditModal.data?.id, action: "update" }}
      title="Edit Moments"
      setEditModal={setShowEditModal}
      editModal={showEditModal}
    >
      <MomentsForm
        setShowEditModal={setShowEditModal}
        showEditModal={showEditModal}
      />
    </EditModal>
  );
};

export default EditMoments;
