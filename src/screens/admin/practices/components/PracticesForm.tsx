import { Form, Upload } from "antd";
import TextInput from "../../../../components/form-inputs/textInput";
const PracticesForm = () => {
  return (
    <>
      <TextInput name="name" label="Name" placeholder="Enter your name" />
      <Form.Item
        name="logo"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
        rules={[
          {
            required: true,
            message: "Please upload a logo.",
          },
        ]}
      >
        <Upload listType="picture" accept="image/*" beforeUpload={() => false}>
          <div className="border-2 border-dashed h-[60px] w-[200px] rounded-lg border-primary-500 flex items-center justify-center cursor-pointer">
            <p className="text-primary-500 font-medium text-xs">UPLOAD Logo</p>
          </div>
        </Upload>
      </Form.Item>
    </>
  );
};

export default PracticesForm;
