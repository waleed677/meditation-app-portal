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
  postData: (data: FormData) => any;
  setEditModal: React.Dispatch<React.SetStateAction<EditModalState>>;
  customValues?: Record<string, any>;
}

const EditModal: React.FC<EditModalProps> = ({
  children,
  editModal,
  setEditModal,
  title,
  customValues = {},
  loading,
  postData,
}) => {
  const [form] = useForm();

  const onFinish = async (values: any) => {
    const data = { ...customValues, ...values };

    // Create FormData instance
    const formAppend = new FormData();

    // Loop through each field in data and append to FormData
    Object.keys(data).forEach((key) => {
      const value = data[key];

      // If value is an array (for file inputs), process each file
      if (Array.isArray(value)) {
        value.forEach((item) => {
          // Ensure the item is a file (for cases where it's a file object from a component)
          if (item.originFileObj) {
            formAppend.append(key, item.originFileObj);
          } else {
            // Handle other possible values, if needed
            formAppend.append(key, item);
          }
        });
      } else {
        // Append other form values normally (non-file values)
        formAppend.append(key, value);
      }
    });

    // Send the form data to the server
    try {
      await postData(formAppend).unwrap(); // Make sure postData handles multipart/form-data
      setEditModal({ open: false, data: null });
    } catch (error) {
      console.error("Error during form submission", error);
    }
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
