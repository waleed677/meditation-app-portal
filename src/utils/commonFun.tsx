import { Tag } from "antd";
import moment from "moment";
import { IMAGE_BASE_URL } from "../config";

export const checkRowData = (data: string) => {
  if (data) {
    return <span>{data}</span>;
  } else {
    return <span className="text-[#FF913C] font-medium ">N/A</span>;
  }
};
export const renderStatus = (status: string) => {
  if (status === "active") {
    return (
      <Tag color="green" className="capitalize">
        {status}
      </Tag>
    );
  }
  if (status === "block") {
    return (
      <Tag color="red" className="capitalize">
        {status}
      </Tag>
    );
  }
};
export const dateFun = (date: string) => {
  return moment(date).format("DD/MM/YYYY");
};
export const joinFileLink = (link: string) => {
  return `${IMAGE_BASE_URL}${link}`;
};
