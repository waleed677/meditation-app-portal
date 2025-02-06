import { ExclamationCircleFilled } from "@ant-design/icons";
import { message, Modal } from "antd";
import { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

const { confirm } = Modal;

// Define types for function parameters
interface DeleteConfirmProps {
  title?: string;
  content?: string;
  data?: { id: string | number; role?: string };
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  api: (form: FormData) => void; // Function type for api
  deleteLoading?: boolean;
  deleteSuccess?: boolean;
  typeFormData?: "withFiles" | "withoutFiles";
}

const showDeleteConfirm = ({
  title,
  content,
  data,
  open,
  setOpen,
  api,
  deleteLoading,
  typeFormData,
}: DeleteConfirmProps) => {
  confirm({
    open,
    title,
    icon: <ExclamationCircleFilled />,
    content,
    okText: "Delete",
    okType: "danger",
    cancelText: "Cancel",
    okButtonProps: { loading: deleteLoading },
    onOk() {
      if (typeFormData === "withoutFiles") {
        //@ts-ignore
        api(data);
        return;
      }
      const form = new FormData();
      if (data?.id) {
        form.append("id", String(data.id)); // Ensuring `id` is a string
      }
      if (data?.role) {
        form.append("role", data.role);
      }
      form.append("action", "delete");
      api(form);
      if (true) {
        message.success("Deleted successfully");
      }
      if (setOpen) setOpen(true);
    },
    onCancel() {
      if (setOpen) setOpen(false);
    },
  });
};

// Define types for DeleteModal props
interface DeleteModalProps {
  title?: string;
  content?: string;
  data: { id: string | number; role?: string };
  api: (form: FormData) => void;
  deleteLoading: boolean;
  deleteSuccess?: boolean;
}

const DeleteModal = ({
  title,
  content,
  data,
  api,
  deleteLoading,
  deleteSuccess,
}: DeleteModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <RiDeleteBin6Fill
      onClick={async () => {
        await setOpen(false);
        showDeleteConfirm({
          title,
          content,
          data,
          open,
          setOpen,
          api,
          deleteLoading,
          deleteSuccess,
        });
      }}
      size={20}
      fill="#FF913C"
      className="cursor-pointer"
    />
  );
};

export default DeleteModal;
