import { Form, Input, Upload } from "antd";
const MomentsForm = () => {
  return (
    <>
      <Form.Item
        name="image"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
        rules={[
          {
            required: true,
            message: "Please upload a image.",
          },
        ]}
      >
        <Upload listType="picture" accept="image/*" beforeUpload={() => false}>
          <div className="border-2 border-dashed h-[60px] w-[200px] rounded-lg border-primary-500 flex items-center justify-center cursor-pointer">
            <p className="text-primary-500 font-medium text-xs">UPLOAD IMAGE</p>
          </div>
        </Upload>
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>
    </>
  );
};

export default MomentsForm;
