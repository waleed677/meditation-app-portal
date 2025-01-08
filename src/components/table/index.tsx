import { Table } from "antd";
import { TablePaginationConfig } from "antd/es/table";

// Define the type for the data items in the table (you can adjust this based on your actual data)
interface DataItem {
  [key: string]: any; // Or use specific fields, e.g. id: number, name: string, etc.
}

interface ListTableProps {
  columns: DataItem[]; // Columns type as an array of ColumnProps, each column referring to a DataItem
  data: DataItem[]; // Data is an array of objects conforming to the DataItem structure
  pagination?: TablePaginationConfig; // Optional pagination config
}

const ListTable: React.FC<ListTableProps> = ({ columns, data, pagination }) => {
  return (
    <Table
      scroll={{ x: 800 }}
      columns={columns}
      dataSource={data}
      pagination={pagination}
    />
  );
};

export default ListTable;
