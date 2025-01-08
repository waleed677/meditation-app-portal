import { RiEdit2Fill } from "react-icons/ri";
import ListTable from "../../../components/table";
import { checkRowData } from "../../../utils/commonFun";
import TableHeader from "./components/TableHeader";
import EditVideo from "./components/EditVideo";
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
      title: "Title",
      render: (record: { title: string }) => checkRowData(record.title),
      key: "title",
    },
    {
      title: "Video",
      render: (record: { videoLink: string }) => checkRowData(record.videoLink),
      key: "video",
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
          <DeleteModal title="Are you sure you want to delete this video?" />
        </div>
      ),
      key: "actions",
    },
  ];
  const dummyData = [
    {
      id: 1,
      title: "Dummy",
      videoLink:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      createdAt: "15-1-2025",
    },
  ];
  return (
    <div>
      <TableHeader />
      <ListTable data={dummyData} columns={columns} />
      <EditVideo
        setShowEditModal={setShowEditModal}
        showEditModal={showEditModal}
      />
    </div>
  );
};

export default Index;
