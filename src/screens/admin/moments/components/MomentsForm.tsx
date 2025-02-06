import { Form, Input, Upload } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

interface MomentFormProps {
  showEditModal?: {
    data: {
      file_url?: string;
      [key: string]: any;
    };
  };
  setShowEditModal?: React.Dispatch<React.SetStateAction<any>>;
}

const MomentsForm: React.FC<MomentFormProps> = ({
  showEditModal,
  setShowEditModal,
}) => {
  const handleDeleteFile = () => {
    const updatedData = { ...showEditModal?.data };
    delete updatedData.image_url;
    if (setShowEditModal) {
      setShowEditModal({
        ...showEditModal,
        data: updatedData,
      });
    }
  };

  return (
    <>
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="image"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
        rules={[
          {
            required: !showEditModal?.data?.image_url,
            message: "Please upload a image.",
          },
        ]}
      >
        {!showEditModal?.data?.image_url && (
          <Upload
            listType="picture"
            accept="image/*"
            beforeUpload={() => false}
            multiple={false}
            maxCount={1}
          >
            <div className="border-2 border-dashed h-[60px] w-[200px] rounded-lg border-primary-500 flex items-center justify-center cursor-pointer">
              <p className="text-primary-500 font-medium text-xs">
                UPLOAD IMAGE
              </p>
            </div>
          </Upload>
        )}
      </Form.Item>

      {showEditModal?.data?.image_url && (
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
            <p>{showEditModal?.data?.image_url}</p>
          </div>
          <DeleteOutlined
            onClick={() => {
              handleDeleteFile();
            }}
            className="text-[#00000073]"
          />
        </div>
      )}
    </>
  );
};

export default MomentsForm;
