import { Form, Input } from "antd";
import React from "react";

const WasabiUploader = ({
  label,
  name,
  form,
  accept,
}: {
  label: string;
  name: string;
  accept: string;
  form: any;
}) => {
  const [uploadProgress, setUploadProgress] = React.useState({});
  const [fileUrl, setFileUrl] = React.useState("");
  const handleFile = async (event: any) => {
    const files = event.target.files;
    if (!files.length) {
      alert("Please choose a file to upload first.");
      return;
    }
    setFileUrl("");
    const file = files[0];
    const fileName = file.name;
    //@ts-ignore
    const s3 = new AWS.S3({
      correctClockSkew: true,
      endpoint: "https://s3.ap-southeast-1.wasabisys.com",
      accessKeyId: "GJCLRXZR4BQHRX7FQNT9",
      secretAccessKey: "n0DsEJgJ5etyTIT3QzBYJVeE5wAn48EMbr5sf8i3",
      region: "ap-southeast-1",
      logger: console,
    });

    //@ts-ignore
    const uploadRequest = new AWS.S3.ManagedUpload({
      params: {
        Bucket: "meditation-portal",
        Key: fileName,
        Body: file,
        ContentType: file.type,
      },
      service: s3,
    });

    uploadRequest.on("httpUploadProgress", function (event: any) {
      const progressPercentage = Math.floor((event.loaded * 100) / event.total);
      setUploadProgress({ [name]: progressPercentage });
    });

    try {
      await uploadRequest.promise();
      const fileUrl = `https://s3.ap-southeast-1.wasabisys.com/meditation-portal/${fileName}`;
      setFileUrl(fileUrl);
      form.setFieldsValue({ [name]: fileUrl });
      console.log("=====fileUrl", fileUrl);
    } catch (err) {
      setFileUrl("");
      console.log("==err", err);
    }
  };

  console.log("===fileUrl", fileUrl);

  return (
    <>
      <Form.Item className="h-0 overflow-hidden p-0 mb-0" name={`${name}`}>
        <Input />
      </Form.Item>
      <Form.Item
        name={`${name}_file`}
        label={`${label} ${
          //@ts-ignore
          uploadProgress?.[name] ? `- Upload: ${uploadProgress?.[name]}%` : ""
        }`}
        rules={[{ required: true, message: "Required" }]}
      >
        <Input accept={accept} type="file" onChange={handleFile} />
      </Form.Item>
    </>
  );
};

export default WasabiUploader;
