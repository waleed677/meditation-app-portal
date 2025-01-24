import React, { ReactNode, useEffect } from "react";
import { Button, Form, Modal } from "antd";
import { useForm } from "antd/es/form/Form";

// Define the props for the AddModal component
interface AddModalProps {
  children?: ReactNode;
  title?: string;
  open: boolean;
  loading: boolean;
  postData?: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddModal: React.FC<AddModalProps> = ({
  children,
  open,
  setOpen,
  title,
  loading,
  postData,
}) => {
  const [form] = useForm();

  const onFinish = async (values: any) => {
    const form = new FormData();
    Object.keys(values).forEach((key) => {
      const value = values[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          form.append(key, item.originFileObj || item);
        });
      } else {
        form.append(key, value);
      }
    });
    await postData(form).unwrap();
    setOpen(false);
  };

  useEffect(() => {
    form.resetFields();
  }, [open]);

  return (
    <Modal
      onCancel={() => setOpen(false)}
      onClose={() => setOpen(false)}
      open={open}
      title={title}
      footer={null}
    >
      <Form form={form} onFinish={onFinish} layout="vertical">
        {children}
        <div className="flex items-center gap-2 justify-end mt-4">
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            loading={loading}
            disabled={loading}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddModal;
