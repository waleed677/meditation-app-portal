import { RiEdit2Fill } from "react-icons/ri";
import ListTable from "../../../components/table";
import { checkRowData, joinFileLink } from "../../../utils/commonFun";
import TableHeader from "./components/TableHeader";
import { Avatar, Image } from "antd";
import EditResources from "./components/EditResources";
import { useState } from "react";
import DeleteModal from "../../../components/modals/delete-modal";
import {
  useGetResourcesQuery,
  useAddResourcesMutation,
} from "../../../services/resources";

const Index = () => {
  const { data, isLoading } = useGetResourcesQuery();
  const [addResources, { isLoading: deleteLoading }] =
    useAddResourcesMutation();

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
      render: (record: { image_url: string }) => (
        <div className="w-[50px] h-[20px]">
          <Image
            style={{ width: 40, height: 30 }}
            src={joinFileLink(record.image_url)}
            alt=""
          />
        </div>
      ),
      key: "image",
    },
    {
      title: "Name",
      render: (record: { name: string }) => checkRowData(record.name),
      key: "name",
    },
    {
      title: "Description",
      render: (record: { description: string }) => checkRowData(record.description),
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
              api={addResources}
              data={record}
              deleteLoading={deleteLoading}
              title="Are you sure you want to delete this resources?"
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
      <ListTable data={data?.resources} loading={isLoading} columns={columns} />
      <EditResources
        setShowEditModal={setShowEditModal}
        showEditModal={showEditModal}
      />
    </div>
  );
};

export default Index;
