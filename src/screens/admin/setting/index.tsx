import { Avatar, Col, Row } from "antd";
import ImageUrl from "../../../assets/images/dummy-user.jpg";
import { FaEdit } from "react-icons/fa";
import Typography from "../../../components/Typography/typography";
import { useState } from "react";
import UpdateProfile from "./components/update-profile";
const Index = () => {
  const [showEditModal, setShowEditModal] = useState({
    open: false,
    data: {},
  });
  return (
    <Row>
      <Col xl={10} lg={12} md={12} sm={12} xs={24}>
        <Typography className="mb-4" type="title3">
          Setting
        </Typography>
        <div className="w-full drop-shadow-lg rounded-lg bg-white p-5 border border-gray-200">
          <div className="flex justify-end">
            <FaEdit
              onClick={() =>
                setShowEditModal({
                  open: true,
                  data: {
                    first_name: "Super",
                    last_name: "Admin",
                    email: "emailuser@g.com",
                    phone: "(555) 555-1234",
                    description:
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                  },
                })
              }
              className="cursor-pointer"
              size={20}
            />
          </div>
          <div className="flex items-center flex-col gap-3">
            <Avatar
              className="border border-zinc-300"
              src={ImageUrl}
              alt=""
              size={70}
            />
            <div>
              <h3 className="text-lg font-semibold text-center mb-[-2px]">
                Super Admin
              </h3>
              <p className="text-xs text-center">emailuser@g.com</p>
              <p className="text-xs text-center">(555) 555-1234</p>
              <div className="mt-4">
                <h2 className="font-semibold">Description</h2>
                <p className="text-xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <UpdateProfile
        setShowEditModal={setShowEditModal}
        showEditModal={showEditModal}
      />
    </Row>
  );
};

export default Index;
