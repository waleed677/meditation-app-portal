import { Button, Form, Upload } from "antd";
import Typography from "../../../../components/Typography/typography";
import TextInput from "../../../../components/form-inputs/textInput";
import ReactQuill from "react-quill";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const EditArticle = () => {
  const location = useLocation();
  console.log("=====location", location);
  const navigate = useNavigate();
  const [detail, setDetail] = useState(""); // Store the editor content

  const toolbarOptions = [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ align: [] }],
    ["link", "image", "video"],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ direction: "rtl" }],
    ["clean"],
    ["code-block"],
    ["table"],
  ];

  // Handle form submission
  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };

  // Handle change in editor content
  const handleEditorChange = (value: string) => {
    setDetail(value); // Set the new value of the editor content
  };

  return (
    <div>
      <Typography type="title3">Edit Article</Typography>
      <Form
        initialValues={location?.state}
        className="mt-5"
        layout="vertical"
        onFinish={onFinish}
      >
        <TextInput name="title" label="Name" placeholder="Enter your name" />
        <Form.Item
          name="thumbnail"
          label="Upload Thumbnail"
          valuePropName="fileList"
          getValueFromEvent={(e) => e.fileList}
          rules={[
            {
              required: true,
              message: "Please upload a thumbnail.",
            },
          ]}
        >
          <Upload
            listType="picture"
            accept="image/*"
            beforeUpload={() => false}
          >
            <div className="border-2 border-dashed h-[60px] w-[200px] rounded-lg border-primary-500 flex items-center justify-center cursor-pointer">
              <p className="text-primary-500 font-medium text-xs">
                UPLOAD THUMBNAIL
              </p>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item
          name="description"
          label="Detail"
          className="h-full"
          rules={[
            {
              required: true,
              message: "Please enter article details.",
              validator: (_, value) => {
                if (!value || value === "" || value === "<p><br></p>") {
                  return Promise.reject("Please enter article details.");
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <ReactQuill
            value={detail}
            onChange={handleEditorChange}
            modules={{ toolbar: toolbarOptions }}
            theme="snow"
          />
        </Form.Item>

        <div className="flex items-center gap-3 justify-end">
          <Button onClick={() => navigate(-1)}>Cancel</Button>
          <Button htmlType="submit" type="primary">
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditArticle;
