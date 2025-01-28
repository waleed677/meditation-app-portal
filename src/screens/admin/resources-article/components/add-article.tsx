import { Button, Form, message, Upload, Select } from "antd";
import Typography from "../../../../components/Typography/typography";
import TextInput from "../../../../components/form-inputs/textInput";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAddResourcesArticlesMutation } from "../../../../services/resourcesArticles";
import { useGetResourcesQuery } from "../../../../services/resources";

const AddArticle = () => {
  const navigate = useNavigate();
  const [resourceId, setResourceId] = useState<string | null>(null); // State to store selected resource_id
  const [addResourcesArticles, { isSuccess, isError, data }] =
    useAddResourcesArticlesMutation();
  const { data: getResourcesData } = useGetResourcesQuery({});

  console.log("getResourcesData", getResourcesData?.resources);

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

  const onFinish = async (values: any) => {
    console.log("values.content", values.content);
    const form = new FormData();
    form.append("title", values.title);
    form.append("content", values.content);
    form.append("resource_id", values?.resource_id); // Appending the resource_id from the Select component
    if (values.image_url && values.image_url.length > 0) {
      form.append("image", values.image_url[0].originFileObj);
    } else {
      message.error("Please upload a thumbnail.");
      return;
    }
    await addResourcesArticles(form).unwrap();
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setResourceId(value); // Update the resource_id state
  };

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        message.success(data.message);
        navigate("/resources-articles");
      }
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      message.error("Something went wrong");
    }
  }, [isError]);

  // Handle change in editor content
  const handleEditorChange = (value: string) => {
    setDetail(value); // Set the new value of the editor content
  };

  const resources = getResourcesData?.resources || []; // Default to empty array if undefined

  return (
    <div>
      <Typography type="title3">Add Article</Typography>
      <Form className="mt-5" layout="vertical" onFinish={onFinish}>
        <TextInput name="title" label="Name" placeholder="Enter your name" />

        <Form.Item name="resource_id" label="Resources">
          <Select
            onChange={handleChange}
            value={resourceId}
          >
            {resources.map((resource: { id: number; name: string }) => (
              <Select.Option key={resource.id} value={resource.id}>
                {resource.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="image_url"
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
          name="content"
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
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddArticle;
