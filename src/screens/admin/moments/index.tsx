import { RiEdit2Fill } from "react-icons/ri";
import ListTable from "../../../components/table";
import { checkRowData, joinFileLink } from "../../../utils/commonFun";
import TableHeader from "./components/TableHeader";
import { Image } from "antd";
import EditMoments from "./components/EditMoments";
import { useState } from "react";
import DeleteModal from "../../../components/modals/delete-modal";
import {
  useGetMomentQuery,
  useAddMomentMutation,
} from "../../../services/moments";
const Index = () => {
  const { data, isLoading } = useGetMomentQuery();
  const [addMoment, { isLoading: deleteLoading }] = useAddMomentMutation();
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
            style={{ width: 50, height: "100%" }}
            src={joinFileLink(record.image_url)}
            alt=""
          />
        </div>
      ),
      key: "image",
    },
    {
      title: "Title",
      render: (record: { title: string }) => checkRowData(record.title),
      key: "title",
      width: 500,
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
      render: (record: { created_at: string }) =>
        checkRowData(record.created_at),
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
          {record && (
            <DeleteModal
              api={addMoment}
              data={record}
              deleteLoading={deleteLoading}
              title="Are you sure you want to delete this moment?"
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
      <ListTable data={data?.moments} loading={isLoading} columns={columns} />
      <EditMoments
        setShowEditModal={setShowEditModal}
        showEditModal={showEditModal}
      />
    </div>
  );
};

export default Index;
