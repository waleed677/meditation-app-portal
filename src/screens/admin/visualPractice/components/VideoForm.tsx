import { Form, Input, Select, Upload } from "antd";
import TextInput from "../../../../components/form-inputs/textInput";
import { DeleteOutlined } from "@ant-design/icons";
import { useGetPracticesQuery } from "../../../../services/practices";
import { useState } from "react";

interface VideoFormProps {
  showEditModal?: {
    data: {
      file_url?: string;
      [key: string]: any;
    };
  };
  setShowEditModal?: React.Dispatch<React.SetStateAction<any>>;
}

const VideoForm: React.FC<VideoFormProps> = ({
  showEditModal,
  setShowEditModal,
}) => {
  const [practicesId, setPracticesId] = useState<string | null>(null); // State to store selected resource_id

  const { data: getPracticesData } = useGetPracticesQuery({});

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setPracticesId(value);
  };

  const practices = getPracticesData?.practices || [];
  const handleDeleteFile = (objKey: string) => {
    const updatedData = { ...showEditModal?.data };
    delete updatedData?.[objKey];
    if (setShowEditModal) {
      setShowEditModal({
        ...showEditModal,
        data: updatedData,
      });
    }
  };

  return (
    <>
      <TextInput name="title" label="Title" placeholder="Enter your title" />
      <TextInput
        name="duration"
        label="Duration"
        placeholder="Enter duration"
      />

      <Form.Item
        name="practices_id"
        label="Practices"
        rules={[{ required: true }]}
      >
        <Select
          onChange={handleChange}
          value={practicesId}
          placeholder="Select a practice"
        >
          {practices.map((resource: { id: number; name: string }) => (
            <Select.Option key={resource.id} value={resource.id}>
              {resource.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true }]}
      >
        <Input.TextArea placeholder="Enter Description" />
      </Form.Item>
      <Form.Item name="order_number" label="Order Number">
        <Input type="number" placeholder="Enter Order Number" />
      </Form.Item>
      <Form.Item
        name="video"
        label="Upload"
        className="mb-0"
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
        rules={[
          {
            required: !showEditModal?.data?.file_url ? true : false,
            message: "Please upload a video.",
          },
        ]}
      >
        {!showEditModal?.data?.file_url && (
          <Upload
            listType="picture"
            accept="video/*"
            beforeUpload={() => false}
            maxCount={1}
            multiple={false}
          >
            <div className="border-2 border-dashed h-[60px] w-[200px] rounded-lg border-primary-500 flex items-center justify-center cursor-pointer">
              <p className="text-primary-500 font-medium text-xs">
                UPLOAD VIDEO
              </p>
            </div>
          </Upload>
        )}
      </Form.Item>
      <div>
        {showEditModal?.data?.file_url && (
          <div className="border rounded-lg px-5 py-3 flex items-center justify-between -mt-7 ">
            <div className="flex items-center gap-3">
              <span
                role="img"
                aria-label="file"
                className="anticon anticon-file"
              >
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
              <p>{showEditModal?.data?.file_url}</p>
            </div>
            <DeleteOutlined
              onClick={() => {
                handleDeleteFile("file_url");
              }}
              className="text-[#00000073]"
            />
          </div>
        )}
      </div>
      <Form.Item
        name="thumbnail"
        label="Upload Thumbnail"
        className="mb-0"
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
        rules={[
          {
            required: !showEditModal?.data?.thumbnail_url ? true : false,
            message: "Please upload a Thumbnail.",
          },
        ]}
      >
        {!showEditModal?.data?.thumbnail_url && (
          <Upload
            listType="picture"
            accept="image/*"
            beforeUpload={() => false}
            maxCount={1}
            multiple={false}
          >
            <div className="border-2 border-dashed h-[60px] w-[200px] rounded-lg border-primary-500 flex items-center justify-center cursor-pointer">
              <p className="text-primary-500 font-medium text-xs">
                UPLOAD Thumbnail
              </p>
            </div>
          </Upload>
        )}
      </Form.Item>
      <div>
        {showEditModal?.data?.thumbnail_url && (
          <div className="border rounded-lg px-5 py-3 flex items-center justify-between -mt-7 ">
            <div className="flex items-center gap-3">
              <span
                role="img"
                aria-label="file"
                className="anticon anticon-file"
              >
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
              <p>{showEditModal?.data?.thumbnail_url}</p>
            </div>
            <DeleteOutlined
              onClick={() => {
                handleDeleteFile("thumbnail_url");
              }}
              className="text-[#00000073]"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default VideoForm;
