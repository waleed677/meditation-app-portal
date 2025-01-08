import React, { ReactNode, useEffect } from "react";
import { Button, Form, Modal } from "antd";
import { useForm } from "antd/es/form/Form";

// Define the props for the AddModal component
interface AddModalProps {
  children?: ReactNode;
  title?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddModal: React.FC<AddModalProps> = ({
  children,
  open,
  setOpen,
  title,
}) => {
  const [form] = useForm();

  // Define the onFinish handler to handle form submission
  const onFinish = (values: any) => {
    console.log("===values", values);
    setOpen(false); // Close the modal after submission
  };

  // Reset the form fields whenever the modal opens
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
        <div className="flex items-center gap-2 justify-end">
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddModal;
