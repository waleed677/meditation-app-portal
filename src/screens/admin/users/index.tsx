import { RiEdit2Fill } from "react-icons/ri";
import ListTable from "../../../components/table";
import {
  checkRowData,
  renderRole,
  renderStatus,
} from "../../../utils/commonFun";
import TableHeader from "./components/TableHeader";
import EditUser from "./components/EditUser";
import { useState } from "react";
import DeleteModal from "../../../components/modals/delete-modal";
import { useGetUsersQuery, useAddUsersMutation } from "../../../services/users";

const Index = () => {
  const { data, isLoading } = useGetUsersQuery({});
  const usersWithIndex = data?.data?.map((user: any, index: number) => ({
    ...user,
    index: index + 1, // Add 'id' field with index starting from 1
  }));
  const [addUsers, { isLoading: deleteLoading, isSuccess: deleteSuccess }] =
    useAddUsersMutation();

  const [showEditModal, setShowEditModal] = useState({
    open: false,
    data: null,
  });

  const columns = [
    {
      title: "Id",
      render: (record: { index: string }) => checkRowData(record.index),
      key: "id",
    },
    {
      title: "User Name",
      render: (record: { username: string }) => checkRowData(record.username),
      key: "username",
    },
    {
      title: "Email",
      render: (record: { email: string }) => checkRowData(record.email),
      key: "email",
    },

    {
      title: "Role",
      render: (record: { role: string }) => renderRole(record.role),
      key: "role",
    },
    {
      title: "Status",
      render: (record: { status: string }) => renderStatus(record.status),
      key: "status",
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
          {record && (
            <DeleteModal
              api={addUsers}
              data={record}
              deleteLoading={deleteLoading}
              deleteSuccess={deleteSuccess}
              title="Are you sure you want to delete this user?"
            />
          )}
        </div>
      ),
      key: "actions",
    },
  ];

  return (
    <div>
      <TableHeader />
      <ListTable loading={isLoading} data={usersWithIndex} columns={columns} />

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
