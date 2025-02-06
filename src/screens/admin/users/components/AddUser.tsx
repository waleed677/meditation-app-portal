import React, { useEffect } from "react";
import AddModal from "../../../../components/modals/add-modal";
import UserForm from "./UserForm";
import { useAddUsersMutation } from "../../../../services/users";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

// Define the types for the props passed to AddUser
interface AddUserProps {
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>; // State setter for the modal visibility
  showAddModal: boolean; // Modal visibility flag
}

const AddUser: React.FC<AddUserProps> = ({ setShowAddModal, showAddModal }) => {
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
    <AddModal
      postData={addUsers}
      loading={isLoading}
      title="Add User"
      setOpen={setShowAddModal}
      open={showAddModal}
    >
      <UserForm />
    </AddModal>
  );
};

export default AddUser;
