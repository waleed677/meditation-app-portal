import { Button, Form, message, Upload, Select } from "antd";
import Typography from "../../../../components/Typography/typography";
import TextInput from "../../../../components/form-inputs/textInput";
import ReactQuill from "react-quill";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { useAddResourcesArticlesMutation } from "../../../../services/resourcesArticles";
import { useGetResourcesQuery } from "../../../../services/resources";

const EditArticle = () => {
  const location = useLocation();
  const [resourceId, setResourceId] = useState<string | null>(null); // State to store selected resource_id
  const { data: getResourcesData } = useGetResourcesQuery({});
  const [addResourcesArticles, { isSuccess, isError, data }] =
    useAddResourcesArticlesMutation();
  const [showEditModal, setShowEditModal] = useState(location?.state);
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
  const onFinish = async (values: any) => {
    console.log("====values.image", values.image, location?.state.image_url);
    const form = new FormData();
    form.append("title", values.title);
    form.append("content", values.content);
    form.append("id", location?.state.id);
    form.append("resource_id", values?.resource_id); // Appending the resource_id from the Select component
    form.append("action", "update");

    if (values.image && values.image.length > 0) {
      form.append("image", values.image[0].originFileObj);
    } else {
      form.append("image", location?.state.image_url || "");
    }
    await addResourcesArticles(form).unwrap();
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

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setResourceId(value); // Update the resource_id state
  };

  const resources = getResourcesData?.resources || []; // Default to empty array if undefined

  const handleDeleteFile = () => {
    const updatedData = { ...showEditModal };
    delete updatedData.image_url;
    setShowEditModal(updatedData);
  };

  return (
    <div>
      <Typography type="title3">Edit Article</Typography>
      <Form
        initialValues={showEditModal}
        className="mt-5"
        layout="vertical"
        onFinish={onFinish}
      >
        <TextInput name="title" label="Name" placeholder="Enter your name" />
        <Form.Item name="resource_id" label="Resources">
          <Select
            style={{ width: 120 }}
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
        {/* <Form.Item
          name="thumbnail"
          label="Upload Thumbnail"
          valuePropName="fileList"
          getValueFromEvent={(e) => e.fileList}
          rules={[
            {
              required: !imageUrl,
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
        </Form.Item> */}
        <Form.Item
          name="image"
          label="Upload Thumbnail"
          valuePropName="fileList"
          getValueFromEvent={(e) => e.fileList}
          rules={[
            {
              required: !showEditModal.image_url ? true : false,
              message: "Please upload a image.",
            },
          ]}
        >
          {!showEditModal.image_url && (
            <Upload
              listType="picture"
              accept="image/*"
              beforeUpload={() => false}
            >
              <div className="border-2 border-dashed h-[60px] w-[200px] rounded-lg border-primary-500 flex items-center justify-center cursor-pointer">
                <p className="text-primary-500 font-medium text-xs">
                  UPLOAD IMAGE
                </p>
              </div>
            </Upload>
          )}
        </Form.Item>

        {showEditModal.image_url && (
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
              <p>{showEditModal.image_url}</p>
            </div>
            <DeleteOutlined
              onClick={() => {
                handleDeleteFile();
              }}
              className="text-[#00000073]"
            />
          </div>
        )}

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
            value={detail || location?.state?.content}
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
