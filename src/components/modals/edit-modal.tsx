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
  loading: boolean;
  postData?: () => void;
  setEditModal: React.Dispatch<React.SetStateAction<EditModalState>>;
}

const EditModal: React.FC<EditModalProps> = ({
  children,
  editModal,
  setEditModal,
  title,
  customValues,
  loading,
  postData,
}) => {
  const [form] = useForm();

  const onFinish = async (values: any) => {
    const data = { ...customValues, ...values };
    const form = new FormData();
    Object.keys(data).forEach((key) => {
      const value = data[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          form.append(key, item.originFileObj || item);
        });
      } else {
        form.append(key, value);
      }
    });
    await postData(form).unwrap();
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
        <div className="flex items-center gap-2 justify-end mt-4">
          <Button onClick={() => setEditModal({ open: false, data: null })}>
            Cancel
          </Button>
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

export default EditModal;
