import { Form, Upload } from "antd";
import TextInput from "../../../../components/form-inputs/textInput";
const AudioForm = () => {
  return (
    <>
      <TextInput name="title" label="Title" placeholder="Enter your title" />
      <Form.Item
        name="audio"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
        rules={[
          {
            required: true,
            message: "Please upload a audio.",
          },
        ]}
      >
        <Upload listType="picture" accept="audio/*" beforeUpload={() => false}>
          <div className="border-2 border-dashed h-[60px] w-[200px] rounded-lg border-primary-500 flex items-center justify-center cursor-pointer">
            <p className="text-primary-500 font-medium text-xs">UPLOAD AUDIO</p>
          </div>
        </Upload>
      </Form.Item>
    </>
  );
};

export default AudioForm;
