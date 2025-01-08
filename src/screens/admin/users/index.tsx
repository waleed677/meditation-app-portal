import { RiEdit2Fill } from "react-icons/ri";
import ListTable from "../../../components/table";
import { checkRowData, renderStatus } from "../../../utils/commonFun";
import TableHeader from "./components/TableHeader";
import EditUser from "./components/EditUser";
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
      title: "First Name",
      render: (record: { first_name: string }) =>
        checkRowData(record.first_name),
      key: "first_name",
    },
    {
      title: "Last Name",
      render: (record: { last_name: string }) => checkRowData(record.last_name),
      key: "last_name",
    },
    {
      title: "Email",
      render: (record: { email: string }) => checkRowData(record.email),
      key: "email",
    },
    {
      title: "Phone",
      render: (record: { phone: string }) => checkRowData(record.phone),
      key: "phone",
    },
    {
      title: "Status",
      render: (record: { status: string }) => renderStatus(record.status),
      key: "phone",
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
          <DeleteModal title="Are you sure you want to delete this user?" />
        </div>
      ),
      key: "actions",
    },
  ];
  const dummyData = [
    {
      id: 1,
      first_name: "Dummy",
      last_name: "Name",
      email: "email@gmail.com",
      phone: "+1-212-456-7890",
      status: "active",
    },
    {
      id: 2,
      first_name: "User",
      last_name: "one",
      email: "userone@gmail.com",
      phone: "+1-212-456-70",
      status: "block",
    },
  ];
  return (
    <div>
      <TableHeader />
      <ListTable data={dummyData} columns={columns} />
      {showEditModal?.data && (
        <EditUser
          setShowEditModal={setShowEditModal}
          showEditModal={showEditModal}
        />
      )}
    </div>
  );
};

export default Index;
