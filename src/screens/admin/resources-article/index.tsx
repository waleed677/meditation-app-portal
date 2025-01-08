import { RiEdit2Fill } from "react-icons/ri";
import ListTable from "../../../components/table";
import { checkRowData } from "../../../utils/commonFun";
import TableHeader from "./components/TableHeader";
import { Image } from "antd";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../../components/modals/delete-modal";

const Index = () => {
  const navigate = useNavigate();
  const columns = [
    {
      title: "Id",
      render: (record: { id: string }) => checkRowData(record.id),
      key: "id",
    },
    {
      title: "Thumbnail",
      render: (record: { logo: string }) => (
        <Image style={{ width: 50 }} src={record.logo} alt="" />
      ),
      key: "thumbnail",
    },
    {
      title: "Title",
      render: (record: { title: string }) => checkRowData(record.title),
      key: "title",
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
      render: (record: { createdAt: string }) => checkRowData(record.createdAt),
      key: "create_at",
    },
    {
      title: "Actions",
      render: (record: any) => (
        <div className="flex items-center gap-2">
          <RiEdit2Fill
            onClick={() =>
              navigate("/resources-edit-articles", { state: record })
            }
            size={20}
            fill="#FF913C"
            className="cursor-pointer"
          />
          <DeleteModal title="Are you sure you want to delete this resources article?" />
        </div>
      ),
      key: "actions",
    },
  ];
  const dummyData = [
    {
      id: 1,
      title: "Mindfulness of Body",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      logo: "https://img.freepik.com/free-vector/people-silhouette-logo_361591-2448.jpg?semt=ais_hybrid",
      createdAt: "15-1-2025",
    },
  ];
  return (
    <div>
      <TableHeader />
      <ListTable data={dummyData} columns={columns} />
    </div>
  );
};

export default Index;
