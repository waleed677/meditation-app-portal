import { RiEdit2Fill } from "react-icons/ri";
import ListTable from "../../../components/table";
import { checkRowData } from "../../../utils/commonFun";
import TableHeader from "./components/TableHeader";
import { Image } from "antd";
import EditMoments from "./components/EditMoments";
import { useState } from "react";
import DeleteModal from "../../../components/modals/delete-modal";

const Index = () => {
  const [showEditModal, setShowEditModal] = useState({
    open: false,
    data: null,
  });
  const columns = [
    {
      title: "Id",
      render: (record: { id: string }) => checkRowData(record.id),
      key: "id",
    },
    {
      title: "Image",
      render: (record: { imageLink: string }) => (
        <Image style={{ width: 50 }} src={record.imageLink} alt="" />
      ),
      key: "image",
    },
    {
      title: "Description",
      render: (record: { description: string }) =>
        checkRowData(record.description),
      key: "description",
      width: 500,
    },
    {
      title: "Create At",
      render: (record: { createdAt: string }) => checkRowData(record.createdAt),
      key: "create_at",
    },
    {
      title: "Actions",
      render: (record: any) => (
        <div className="flex items-center gap-2">
          <RiEdit2Fill
            onClick={() => setShowEditModal({ open: true, data: record })}
            size={20}
            fill="#FF913C"
            className="cursor-pointer"
          />
          <DeleteModal title="Are you sure you want to delete this moment?" />
        </div>
      ),
      key: "actions",
    },
  ];
  const dummyData = [
    {
      id: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      imageLink:
        "https://img.freepik.com/free-vector/people-silhouette-logo_361591-2448.jpg?semt=ais_hybrid",
      createdAt: "15-1-2025",
    },
  ];
  return (
    <div>
      <TableHeader />
      <ListTable data={dummyData} columns={columns} />
      <EditMoments
        setShowEditModal={setShowEditModal}
        showEditModal={showEditModal}
      />
    </div>
  );
};

export default Index;
