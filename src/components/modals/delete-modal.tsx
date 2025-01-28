import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
const { confirm } = Modal;

const showDeleteConfirm = (
  title?: string,
  content?: string,
  data?: any,
  open?: boolean,
  setOpen?: any,
  api?: (data: any) => void,
  deleteLoading?: boolean
) => {
  confirm({
    open: open,
    title,
    icon: <ExclamationCircleFilled />,
    content,
    okText: "Delete",
    okType: "danger",
    cancelText: "Cancel",
    okButtonProps: { loading: deleteLoading },
    onOk() {
      const form = new FormData();
      form.append("id", data.id);
      if(data.role){
        form.append("role", data.role);
      }
      form.append("action", "delete");
      api(form);
      setOpen(true);
    },
    onCancel() {
      setOpen(false);
    },
  });
};

const DeleteModal = ({
  title,
  content,
  data,
  api,
  deleteLoading,
}: {
  title?: string;
  content?: string;
  data: any;
  api: any;
  deleteLoading: boolean;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <RiDeleteBin6Fill
      onClick={async () => {
        await setOpen(false);
        showDeleteConfirm(
          title,
          content,
          data,
          open,
          setOpen,
          api,
          deleteLoading
        );
      }}
      size={20}
      fill="#FF913C"
      className="cursor-pointer"
    />
  );
};

export default DeleteModal;
