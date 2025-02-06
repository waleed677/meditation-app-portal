import { Form, Input, message } from "antd";
import EditModal from "../../../../components/modals/edit-modal";
import TextInput from "../../../../components/form-inputs/textInput";
import {
  useAddSettingsMutation,
  useAddUsersMutation,
} from "../../../../services/users";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Define the EditProfileState interface
interface EditProfileState {
  open: boolean;
  data: {
    author_name?: string;
    about_author?: string;
    about_app?: string;
  } | null;
}

interface EditProfileProps {
  setShowAppEditModal: React.Dispatch<React.SetStateAction<EditProfileState>>;
  showAppEditModal: EditProfileState;
  setSettingData: (data: any) => void;
}

const UpdateAppInfo: React.FC<EditProfileProps> = ({
  setShowAppEditModal,
  showAppEditModal,
  setSettingData,
}) => {
  const navigate = useNavigate();
  const [addSettings, { isLoading, isSuccess, isError, data }] =
    useAddSettingsMutation();

  useEffect(() => {
    if (isSuccess && data) {
      setSettingData(data);
      message.success(data.message);
      navigate("/setting");
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError) {
      message.error(data?.error || "Something went wrong");
    }
  }, [isError, data]);

  return (
    <EditModal
      title="Update App Info"
      setEditModal={setShowAppEditModal}
      editModal={showAppEditModal}
      postData={addSettings}
      loading={isLoading}
    >
      <TextInput name="author_name" label="Author Name" required={true} />

      <Form.Item
        name="about_author"
        label="About Author"
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="about_app"
        label="About App"
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>
    </EditModal>
  );
};

export default UpdateAppInfo;
