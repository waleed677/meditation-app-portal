import { Button } from "antd";
import Typography from "../../../../components/Typography/typography";
import AddUser from "./AddUser";
import { useState } from "react";

const TableHeader = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <>
      <AddUser setShowAddModal={setShowAddModal} showAddModal={showAddModal} />
      <div className="flex items-center justify-between mb-5">
        <Typography type="title3">Users</Typography>
        <Button type="primary" onClick={() => setShowAddModal(true)}>
          Add{" "}
        </Button>
      </div>
    </>
  );
};

export default TableHeader;
