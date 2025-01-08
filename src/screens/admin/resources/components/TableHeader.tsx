import { Button } from "antd";
import Typography from "../../../../components/Typography/typography";
import AddResources from "./AddResources";
import { useState } from "react";

const TableHeader = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <Typography type="title3">Resources</Typography>
        <Button onClick={() => setShowAddModal(true)} type="primary">
          Add
        </Button>
      </div>
      <AddResources
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
      />
    </>
  );
};

export default TableHeader;
