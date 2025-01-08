import { Form, Input } from "antd";
import EditModal from "../../../../components/modals/edit-modal";
import TextInput from "../../../../components/form-inputs/textInput";
interface EditProfileState {
  open: boolean;
  data: any | null;
}

interface EditProfileProps {
  setShowEditModal: React.Dispatch<React.SetStateAction<EditProfileState>>;
  showEditModal: EditProfileState;
}
const UpdateProfile: React.FC<EditProfileProps> = ({
  setShowEditModal,
  showEditModal,
}) => {
  return (
    <EditModal
      title="Update Profile"
      setEditModal={setShowEditModal}
      editModal={showEditModal}
    >
      <Form initialValues={showEditModal?.data} layout="vertical">
        <TextInput name="first_name" label="First Name" required={true} />
        <TextInput name="last_name" label="Last Name" required={true} />
        <TextInput name="email" label="Last Name" required={true} />
        <TextInput name="phone" label="Last Name" required={true} />
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </EditModal>
  );
};

export default UpdateProfile;
