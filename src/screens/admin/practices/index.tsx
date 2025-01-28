import { RiEdit2Fill } from "react-icons/ri";
import ListTable from "../../../components/table";
import { checkRowData } from "../../../utils/commonFun";
import TableHeader from "./components/TableHeader";
import { Avatar } from "antd";
import EditPractices from "./components/EditPractices";
import { useState } from "react";
import DeleteModal from "../../../components/modals/delete-modal";
import {
  useGetPracticesQuery,
  useAddPracticesMutation,
} from "../../../services/practices";

const Index = () => {
  const { data, isLoading } = useGetPracticesQuery();
  const [addPractices, { isLoading: deleteLoading }] =
    useAddPracticesMutation();

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
    // {
    //   title: "Logo",
    //   render: (record: { logoLink: string }) => (
    //     <Avatar size="large" src={record.logoLink} alt="" />
    //   ),
    //   key: "logoLink",
    // },
    {
      title: "Name",
      render: (record: { name: string }) => checkRowData(record.name),
      key: "name",
    },
    {
      title: "Description",
      render: (record: { description: string }) =>
        checkRowData(record.description),
      key: "description",
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
              api={addPractices}
              data={record}
              deleteLoading={deleteLoading}
              title="Are you sure you want to delete this practice?"
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
      <ListTable data={data?.practices} loading={isLoading} columns={columns} />
      <EditPractices
        setShowEditModal={setShowEditModal}
        showEditModal={showEditModal}
      />
    </div>
  );
};

export default Index;
