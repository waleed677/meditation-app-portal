import { RiEdit2Fill } from "react-icons/ri";
import ListTable from "../../../components/table";
import { checkRowData } from "../../../utils/commonFun";
import TableHeader from "./components/TableHeader";
import { Avatar } from "antd";
import EditPractices from "./components/EditPractices";
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
      title: "Logo",
      render: (record: { logoLink: string }) => (
        <Avatar size="large" src={record.logoLink} alt="" />
      ),
      key: "logoLink",
    },
    {
      title: "Name",
      render: (record: { name: string }) => checkRowData(record.name),
      key: "name",
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
          <DeleteModal title="Are you sure you want to delete this practice?" />
        </div>
      ),
      key: "actions",
    },
  ];
  const dummyData = [
    {
      id: 1,
      name: "Mindfulness of Body",
      logoLink:
        "https://img.freepik.com/free-vector/people-silhouette-logo_361591-2448.jpg?semt=ais_hybrid",
      createdAt: "15-1-2025",
    },
  ];
  return (
    <div>
      <TableHeader />
      <ListTable data={dummyData} columns={columns} />
      <EditPractices
        setShowEditModal={setShowEditModal}
        showEditModal={showEditModal}
      />
    </div>
  );
};

export default Index;
