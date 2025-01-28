import { RiEdit2Fill } from "react-icons/ri";
import ListTable from "../../../components/table";
import { checkRowData, renderStatus } from "../../../utils/commonFun";
import TableHeader from "./components/TableHeader";
import EditUser from "./components/EditUser";
import { useState } from "react";
import DeleteModal from "../../../components/modals/delete-modal";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import {
  useGetUsersQuery,
  useAddUsersMutation,
} from "../../../services/users";

const Index = () => {
  const { data, isLoading } = useGetUsersQuery();
  console.log("======data",data);
  const [addUsers, { isLoading: deleteLoading }] =
  useAddUsersMutation();



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
      title: "User Name",
      render: (record: { username: string }) =>
        checkRowData(record.username),
      key: "username",
    },
    {
      title: "Email",
      render: (record: { email: string }) => checkRowData(record.email),
      key: "email",
    },
    {
      title: "Status",
      render: (record: { status: string }) => renderStatus(record.status),
      key: "status",
    },
    {
      title: "Role",
      render: (record: { status: string }) => renderStatus(record.role),
      key: "role",
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
              title="Are you sure you want to delete this user?"
            />
          )}
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

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Admin',
      children: <ListTable data={data?.data} columns={columns} />,
    },
    {
      key: '2',
      label: 'User',
      children: <ListTable data={data?.data} columns={columns} />,
    },
  ];

  return (
    <div>
      <TableHeader />
      <Tabs defaultActiveKey="1" items={items} />
      {/* <ListTable data={dummyData} columns={columns} /> */}
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
