import { RiEdit2Fill } from "react-icons/ri";
import ListTable from "../../../components/table";
import { checkRowData } from "../../../utils/commonFun";
import TableHeader from "./components/TableHeader";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../../components/modals/delete-modal";
import {
  useGetResourcesArticlesQuery,
  useAddResourcesArticlesMutation,
} from "../../../services/resourcesArticles";

const Index = () => {
  const { data, isLoading } = useGetResourcesArticlesQuery();
  const [addResourcesArticles, { isLoading: deleteLoading }] =
    useAddResourcesArticlesMutation();

  const navigate = useNavigate();
  const columns = [
    {
      title: "Id",
      render: (record: { id: string }) => checkRowData(record.id),
      key: "id",
    },
    // {
    //   title: "Thumbnail",
    //   render: (record: { image_url: string }) => (
    //     <Image style={{ width: 50 }} src={record.image_url} alt="" />
    //   ),
    //   key: "thumbnail",
    // },
    {
      title: "Title",
      render: (record: { title: string }) => checkRowData(record.title),
      key: "title",
    },
    // {
    //   title: "Description",
    //   render: (record: { content: string }) =>
    //     checkRowData(record.description),
    //   key: "description",
    //   width: 500,
    // },
    // {
    //   title: "Create At",
    //   render: (record: { createdAt: string }) => checkRowData(record.createdAt),
    //   key: "create_at",
    // },
    {
      title: "Actions",
      render: (record: any) => (
        <div className="flex items-center gap-2">
          <RiEdit2Fill
            onClick={() => navigate("/resources-edit-articles", {state: record})}
            size={20}
            fill="#FF913C"
            className="cursor-pointer"
          />
          {record && (
            <DeleteModal
              api={addResourcesArticles}
              data={record}
              deleteLoading={deleteLoading}
              title="Are you sure you want to delete this resources articles?"
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
    </div>
  );
};

export default Index;
