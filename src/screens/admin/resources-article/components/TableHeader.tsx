import { Button } from "antd";
import Typography from "../../../../components/Typography/typography";
import { useNavigate } from "react-router-dom";

const TableHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between mb-5">
      <Typography type="title3">Resources Articles</Typography>
      <Button
        onClick={() => navigate("/resources-add-articles")}
        type="primary"
      >
        Add
      </Button>
    </div>
  );
};

export default TableHeader;
