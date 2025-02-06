import { Form, Input, message, Upload } from "antd";
import EditModal from "../../../../components/modals/edit-modal";
import TextInput from "../../../../components/form-inputs/textInput";
import { useAddUsersMutation } from "../../../../services/users";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";

// Define the EditProfileState interface
interface EditProfileState {
  open: boolean;
  data: {
    id?: string;
    logo?: string;
    username?: string;
    email?: string;
    description?: string;
  } | null;
}

interface EditProfileProps {
  setShowEditModal: React.Dispatch<React.SetStateAction<EditProfileState>>;
  showEditModal: EditProfileState;
  setUserData: (data: any) => void;
}

const UpdateProfile: React.FC<EditProfileProps> = ({
  setShowEditModal,
  showEditModal,
  setUserData,
}) => {
  const navigate = useNavigate();
  const [updateUser, { isLoading, isSuccess, isError, data }] =
    useAddUsersMutation();

  useEffect(() => {
    if (isSuccess && data) {
      setUserData(data);
      localStorage.setItem("userInfo", JSON.stringify(data.user));
      message.success(data.message);
      navigate("/setting");
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError) {
      message.error(data?.error || "Something went wrong");
    }
  }, [isError, data]);

  const handleDeleteFile = () => {
    const updatedData = { ...showEditModal?.data };
    delete updatedData.logo;
    setShowEditModal({
      ...showEditModal,
      data: updatedData,
    });
  };

  return (
    <EditModal
      title="Update Profile"
      setEditModal={setShowEditModal}
      editModal={showEditModal}
      customValues={{ id: showEditModal.data?.id, action: "profileupdate" }}
      postData={updateUser}
      loading={isLoading}
    >
      <TextInput name="username" label="Full Name" required={true} />

      <TextInput name="email" label="Email" required={true} readOnly={true} />
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="profile_logo"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
        rules={[
          {
            required: !showEditModal?.data?.logo,
            message: "Please upload a logo.",
          },
        ]}
      >
        {!showEditModal?.data?.logo && (
          <Upload
            listType="picture"
            accept="image/*"
            beforeUpload={() => false}
            maxCount={1}
            multiple={false}
          >
            <div className="border-2 border-dashed h-[60px] w-[200px] rounded-lg border-primary-500 flex items-center justify-center cursor-pointer">
              <p className="text-primary-500 font-medium text-xs">
                UPLOAD LOGO
              </p>
            </div>
          </Upload>
        )}
      </Form.Item>

      {showEditModal?.data?.logo && (
        <div className="border rounded-lg px-5 py-3 flex items-center justify-between -mt-7 ">
          <div className="flex items-center gap-3">
            <span role="img" aria-label="file" className="anticon anticon-file">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="file"
                width="30"
                height="30"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M534 352V136H232v752h560V394H576a42 42 0 01-42-42z"
                  fill="#e6f4ff"
                ></path>
                <path
                  d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z"
                  fill="#1677ff"
                ></path>
              </svg>
            </span>
            <p>{showEditModal?.data?.logo}</p>
          </div>
          <DeleteOutlined
            onClick={handleDeleteFile}
            className="text-[#00000073]"
          />
        </div>
      )}
    </EditModal>
  );
};

export default UpdateProfile;
