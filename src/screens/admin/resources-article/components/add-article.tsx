import { Button, Form, message, Upload, Select, Input } from "antd";
import Typography from "../../../../components/Typography/typography";
import TextInput from "../../../../components/form-inputs/textInput";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAddResourcesArticlesMutation } from "../../../../services/resourcesArticles";
import { useGetResourcesQuery } from "../../../../services/resources";

const AddArticle = () => {
  const navigate = useNavigate();
  const [resourceId, setResourceId] = useState<string | null>(null); // State to store selected resource_id
  const [addResourcesArticles, { isLoading, isSuccess, isError, data }] =
    useAddResourcesArticlesMutation();
  const { data: getResourcesData } = useGetResourcesQuery({});

  const onFinish = async (values: any) => {
    console.log("values.content", values.content);
    const form = new FormData();
    form.append("title", values.title);
    form.append("content", values.content);
    form.append("duration", values.duration);
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
      if (data && data.status === "success") {
        message.success(data.message);
        navigate("/resources-articles");
      } else {
        message.error(data?.message);
      }
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      message.error("Something went wrong");
    }
  }, [isError]);

  // Handle change in editor content

  const resources = getResourcesData?.resources || []; // Default to empty array if undefined

  return (
    <div>
      <Typography type="title3">Add Article</Typography>
      <Form className="mt-5" layout="vertical" onFinish={onFinish}>
        <TextInput name="title" label="Name" placeholder="Enter your name" />
        <TextInput
          name="duration"
          label="Duration"
          placeholder="Enter Duration"
        />

        <Form.Item
          name="resource_id"
          label="Resources"
          rules={[
            {
              required: true,
              message: "Resource is Required.",
            },
          ]}
        >
          <Select onChange={handleChange} value={resourceId}>
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
            multiple={false}
            maxCount={1}
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
            },
          ]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>

        <div className="flex items-center gap-3 justify-end">
          <Button onClick={() => navigate(-1)}>Cancel</Button>
          <Button
            loading={isLoading}
            disabled={isLoading}
            htmlType="submit"
            type="primary"
          >
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddArticle;
