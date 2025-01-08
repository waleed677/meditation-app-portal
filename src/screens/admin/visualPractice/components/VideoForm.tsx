import { Form, Upload } from "antd";
import TextInput from "../../../../components/form-inputs/textInput";
const VideoForm = () => {
  return (
    <>
      <TextInput name="title" label="Title" placeholder="Enter your title" />
      <Form.Item
        name="productVideo"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
        rules={[
          {
            required: true,
            message: "Please upload a video.",
          },
        ]}
      >
        <Upload listType="picture" accept="video/*" beforeUpload={() => false}>
          <div className="border-2 border-dashed h-[60px] w-[200px] rounded-lg border-primary-500 flex items-center justify-center cursor-pointer">
            <p className="text-primary-500 font-medium text-xs">UPLOAD VIDEO</p>
          </div>
        </Upload>
      </Form.Item>
    </>
  );
};

export default VideoForm;
