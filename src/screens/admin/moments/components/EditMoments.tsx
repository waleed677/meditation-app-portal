import React, { useEffect } from "react";
import EditModal from "../../../../components/modals/edit-modal";
import MomentsForm from "./MomentsForm";
import { useAddMomentMutation } from "../../../../services/moments";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

interface EditModalState {
  open: boolean;
  data: any | null;
}

interface EditMomentsProps {
  setShowEditModal: React.Dispatch<React.SetStateAction<EditModalState>>;
  showEditModal: EditModalState;
}
// 
const EditMoments: React.FC<EditMomentsProps> = ({
  setShowEditModal,
  showEditModal,
}) => {
  const navigate = useNavigate();
  const [addMoment, { isLoading, isSuccess, isError, data }] = useAddMomentMutation();

  useEffect(() => {
    if (isSuccess) {
      if (data && data.status === "success") {
        message.success(data.message);
        navigate("/moments");
      }
      else {
        message.error(data?.message);
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
