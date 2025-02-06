import React, { useEffect } from "react";
import EditModal from "../../../../components/modals/edit-modal";
import UserForm from "./UserForm";
import { useAddUsersMutation } from "../../../../services/users";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

// Define the shape of the modal state
interface EditModalState {
  open: boolean;
  data: any | null; // 'any' can be more specific based on your data structure
}

// Define the type for the EditUser component props
interface EditUserProps {
  setShowEditModal: React.Dispatch<React.SetStateAction<EditModalState>>;
  showEditModal: EditModalState;
}

const EditUser: React.FC<EditUserProps> = ({
  setShowEditModal,
  showEditModal,
}) => {
  const navigate = useNavigate();
  const [addUsers, { isLoading, isSuccess, isError, data }] =
    useAddUsersMutation();
  useEffect(() => {
    if (isSuccess) {
      if (data && data.status === "success") {
        message.success(data.message);
        navigate("/user");
      } else {
        message.error(data?.message);
      }
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      message.error(data?.message || "Something went wrong");
    }
  }, [isError, data]);

  return (
    <EditModal
      postData={addUsers}
      loading={isLoading}
      customValues={{ id: showEditModal.data?.id, action: "update" }}
      title="Edit User"
      setEditModal={setShowEditModal}
      editModal={showEditModal}
      typeFormData="withoutFiles"
    >
      <UserForm type="edit" />
    </EditModal>
  );
};

export default EditUser;
