import { RiEdit2Fill } from "react-icons/ri";
import ListTable from "../../../components/table";
import { checkRowData, dateFun, joinFileLink } from "../../../utils/commonFun";
import TableHeader from "./components/TableHeader";
import EditVideo from "./components/EditVideo";
import { useState } from "react";
import DeleteModal from "../../../components/modals/delete-modal";
import {
  useGetVisualPracticeQuery,
  useAddVisualPracticeMutation,
} from "../../../services/visualPractice";
import ViewVideoPlayer from "./components/ViewVideoPlayer";
import { Tag } from "antd";
const Index = () => {
  const { data, isLoading } = useGetVisualPracticeQuery({});
  const [addVisualPractice, { isLoading: deleteLoading }] =
    useAddVisualPracticeMutation();

  const [showEditModal, setShowEditModal] = useState({
    open: false,
    data: null,
  });

  const [showVideoPlayer, setShowVideoPlayerData] = useState<{
    open: boolean;
    videoLink: string | null; // Explicitly type videoLink
  }>({
    open: false,
    videoLink: null, // Default value is null
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
      title: "Duration",
      render: (record: { duration: string }) => checkRowData(record.duration),
      key: "duration",
    },
    {
      title: "Video",
      render: (record: { file_url: string }) => (
        <Tag
          color="blue"
          className="cursor-pointer"
          onClick={() =>
            setShowVideoPlayerData({
              open: true,
              videoLink: joinFileLink(record.file_url),
            })
          }
        >
          View Video
        </Tag>
      ),
      key: "video",
    },
    {
      title: "Create At",
      render: (record: { created_at: string }) => dateFun(record.created_at),
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
              data={record}
              api={addVisualPractice}
              deleteLoading={deleteLoading}
              title="Are you sure you want to delete this video?"
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
      <ListTable data={data?.videos} loading={isLoading} columns={columns} />
      {showEditModal.data && (
        <EditVideo
          setShowEditModal={setShowEditModal}
          showEditModal={showEditModal}
        />
      )}
      {showVideoPlayer.videoLink && (
        <ViewVideoPlayer
          setShowVideoPlayerData={setShowVideoPlayerData}
          showVideoPlayer={showVideoPlayer}
        />
      )}
    </div>
  );
};

export default Index;
