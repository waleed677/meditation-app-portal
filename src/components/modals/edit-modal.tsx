import React, { ReactNode, useEffect } from "react";
import { Button, Form, Modal } from "antd";
import { useForm } from "antd/es/form/Form";

// Define the shape of the modal state
interface EditModalState {
  open: boolean;
  data: any | null; // You can replace `any` with a more specific type (e.g., `User`).
}

// Define the props for the EditModal component
interface EditModalProps {
  children?: ReactNode;
  title?: string;
  editModal: EditModalState;
  setEditModal: React.Dispatch<React.SetStateAction<EditModalState>>;
}

const EditModal: React.FC<EditModalProps> = ({
  children,
  editModal,
  setEditModal,
  title,
}) => {
  const [form] = useForm();

  const onFinish = (values: any) => {
    console.log("===values", values);
    // Close the modal after submitting
    setEditModal({ open: false, data: null });
  };

  useEffect(() => {
    form.resetFields();
  }, [editModal.open]); // Trigger reset when the modal opens

  return (
    <Modal
      onCancel={() => setEditModal({ open: false, data: null })}
      open={editModal.open}
      title={title}
      footer={null}
      onClose={() => setEditModal({ open: false, data: null })}
    >
      <Form
        initialValues={editModal.data}
        form={form}
        onFinish={onFinish}
        layout="vertical"
      >
        {children}
        <div className="flex items-center gap-2 justify-end">
          <Button onClick={() => setEditModal({ open: false, data: null })}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default EditModal;
