import { RiEdit2Fill } from "react-icons/ri";
import ListTable from "../../../components/table";
import { checkRowData, joinFileLink } from "../../../utils/commonFun";
import TableHeader from "./components/TableHeader";
import { Image } from "antd";
import EditPractices from "./components/EditPractices";
import { useState } from "react";
import DeleteModal from "../../../components/modals/delete-modal";
import {
  useGetPracticesQuery,
  useAddPracticesMutation,
} from "../../../services/practices";

const Index = () => {
  const { data, isLoading } = useGetPracticesQuery({});
  const practicesWithIndex = data?.practices?.map(
    (practice: any, index: number) => ({
      ...practice,
      index: index + 1, // Add 'id' field with index starting from 1
    })
  );
  const [addPractices, { isLoading: deleteLoading }] =
    useAddPracticesMutation();

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
      render: (record: { description: string }) =>
        checkRowData(record.description),
      key: "description",
    },
    {
      title: "Actions",
      render: (record: any) => (
        <div className="flex items-center gap-2">
          <RiEdit2Fill
            onClick={() =>
              setShowEditModal({
                open: true,
                data: {
                  ...record,
                  description:
                    record?.description != "undefined"
                      ? record?.description
                      : "",
                },
              })
            }
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
      <ListTable
        data={practicesWithIndex}
        loading={isLoading}
        columns={columns}
      />
      {showEditModal?.data && (
        <EditPractices
          setShowEditModal={setShowEditModal}
          showEditModal={showEditModal}
        />
      )}
    </div>
  );
};

export default Index;
