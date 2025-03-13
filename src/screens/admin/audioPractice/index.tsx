import { RiEdit2Fill } from "react-icons/ri";
import ListTable from "../../../components/table";
import { checkRowData, dateFun, joinFileLink } from "../../../utils/commonFun";
import TableHeader from "./components/TableHeader";
import DeleteModal from "../../../components/modals/delete-modal";
import { useState } from "react";
import EditAudio from "./components/EditAudio";
import {
  useGetAudioPracticeQuery,
  useAddAudioPracticeMutation,
} from "../../../services/audioPractice";

const Index = () => {
  const { data, isLoading } = useGetAudioPracticeQuery({});

  const [addAudioPractice, { isLoading: deleteLoading }] =
    useAddAudioPracticeMutation();
  const [showEditModal, setShowEditModal] = useState({
    open: false,
    data: null,
  });
  const audiosWithIndex = data?.audios?.map((audio: any, index: number) => ({
    ...audio,
    index: index + 1, // Add 'id' field with index starting from 1
  }));
  const columns = [
    {
      title: "Id",
      render: (record: { index: string }) => checkRowData(record.index),
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
      title: "Audio",
      render: (record: { file_url: string }) => (
        <audio src={joinFileLink(record.file_url)} controls />
      ),
      key: "audioLink",
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
          <DeleteModal
            api={addAudioPractice}
            deleteLoading={deleteLoading}
            data={record}
            title="Are you sure you want to delete this audio?"
          />
        </div>
      ),
      key: "actions",
    },
  ];

  return (
    <div>
      <TableHeader />
      <ListTable loading={isLoading} data={audiosWithIndex} columns={columns} />
      {showEditModal && showEditModal.data && (
        <EditAudio
          setShowEditModal={setShowEditModal}
          showEditModal={showEditModal}
        />
      )}
    </div>
  );
};

export default Index;
