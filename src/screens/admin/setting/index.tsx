import { Avatar, Col, Row } from "antd";
import { FaEdit } from "react-icons/fa";
import Typography from "../../../components/Typography/typography";
import { useEffect, useState } from "react";
import UpdateProfile from "./components/update-profile";
import { joinFileLink } from "../../../utils/commonFun";

// Define the type of userData to be consistent with the structure.
interface UserData {
  id: string;
  username: string;
  email: string;
  aboutApp: string;
  authorName: string;
  aboutAuthor: string;
  profile_logo?: string; // Optional, since the logo can be null or undefined
}

const Index = () => {
  const userInfo = localStorage?.getItem("userInfo");
  const [userData, setUserData] = useState<UserData | null>(null); // Define state type
  const [showEditModal, setShowEditModal] = useState<{
    open: boolean;
    data: UserData | {};
  }>({
    open: false,
    data: {},
  });

  useEffect(() => {
    const userData = userInfo ? JSON?.parse(userInfo) : null;
    if (userData) {
      setUserData(userData);
    }
  }, [userInfo]);

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
                    id: userData?.id,
                    username: userData?.username,
                    email: userData?.email,
                    aboutApp: userData?.aboutApp,
                    authorName: userData?.authorName,
                    aboutAuthor: userData?.aboutAuthor,
                    logo: userData?.profile_logo,
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
              src={joinFileLink(userData?.profile_logo)}
              alt=""
              size={70}
            />
            <div>
              <h3 className="text-lg font-semibold text-center mb-[-2px]">
                {userData?.username
                  ? userData.username.charAt(0).toUpperCase() +
                    userData.username.slice(1)
                  : ""}
              </h3>
              <p className="text-xs text-center">{userData?.email}</p>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="font-semibold">Author Name</h2>
            <p className="text-xs px-2">{userData?.authorName}</p>
          </div>
          <div className="mt-2">
            <h2 className="font-semibold">AboutApp</h2>
            <p className="text-xs px-2">
              {
                //@ts-ignore
                userData?.aboutApp?.length > 100
                  ? userData?.aboutApp?.slice(0, 100)
                  : userData?.aboutApp
              }
            </p>
          </div>
          <div className="mt-2">
            <h2 className="font-semibold">About Author</h2>
            <p className="text-xs px-2">
              {
                //@ts-ignore
                userData?.aboutAuthor?.length > 100
                  ? userData?.aboutAuthor?.slice(0, 100)
                  : userData?.aboutAuthor
              }
            </p>
          </div>
        </div>
      </Col>
      <UpdateProfile
        //@ts-ignore
        setShowEditModal={setShowEditModal}
        showEditModal={showEditModal}
        setUserData={setUserData}
      />
    </Row>
  );
};

export default Index;
