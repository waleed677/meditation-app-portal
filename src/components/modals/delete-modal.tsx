import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { RiDeleteBin6Fill } from "react-icons/ri";
const { confirm } = Modal;

const showDeleteConfirm = (title?: string, content?: string) => {
  confirm({
    title,
    icon: <ExclamationCircleFilled />,
    content,
    okText: "Delete",
    okType: "danger",
    cancelText: "Cancel",
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};

const DeleteModal = ({
  title,
  content,
}: {
  title?: string;
  content?: string;
}) => (
  <RiDeleteBin6Fill
    onClick={() => showDeleteConfirm(title, content)}
    size={20}
    fill="#FF913C"
    className="cursor-pointer"
  />
);

export default DeleteModal;
