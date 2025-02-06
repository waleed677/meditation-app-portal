import { Avatar, Col, Row } from "antd";
import { FaEdit } from "react-icons/fa";
import Typography from "../../../components/Typography/typography";
import { useEffect, useState } from "react";
import UpdateProfile from "./components/update-profile";
import { joinFileLink } from "../../../utils/commonFun";
import UpdateAppInfo from "./components/update-app-info";
import { useGetSettingsQuery } from "../../../services/users";

// Define the type of userData to be consistent with the structure.
interface UserData {
  id: string;
  username: string;
  email: string;
  description: string;
  profile_logo?: string; // Optional, since the logo can be null or undefined
}

interface SettingDataProps {
  author_name?: string;
  about_author?: string;
  about_app?: string;
}

const Index = () => {
  const userInfo = localStorage?.getItem("userInfo");
  const [userData, setUserData] = useState<UserData | null>(null); // Define state type
  const { data } = useGetSettingsQuery({});
  const [SettingData, setSettingData] = useState<SettingDataProps | null>(
    data?.settings ? data?.settings : null
  ); // Define state type

  const [showEditModal, setShowEditModal] = useState<{
    open: boolean;
    data: UserData | {};
  }>({
    open: false,
    data: {},
  });
  const [showAppEditModal, setShowAppEditModal] = useState<{
    open: boolean;
    data: SettingDataProps | {};
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

  useEffect(() => {
    if (data?.settings) {
      setSettingData(data?.settings);
    }
  }, [data?.settings]);
  return (
    <Row gutter={10}>
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
                    description: userData?.description,
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
            <h2 className="font-semibold">Description</h2>
            <p className="text-xs px-2">{userData?.description}</p>
          </div>
        </div>
      </Col>
      <Col xl={10} lg={12} md={12} sm={12} xs={24}>
        <Typography className="mb-4" type="title3">
          App Setting
        </Typography>
        <div className="w-full drop-shadow-lg rounded-lg bg-white p-5 border border-gray-200">
          <div className="flex justify-end">
            <FaEdit
              onClick={() =>
                setShowAppEditModal({
                  open: true,
                  data: {
                    author_name: SettingData?.author_name,
                    about_author: SettingData?.about_author,
                    about_app: SettingData?.about_app,
                  },
                })
              }
              className="cursor-pointer"
              size={20}
            />
          </div>

          <div className="mt-4">
            <h2 className="font-semibold">Author Name</h2>
            <p className="text-xs px-2">{SettingData?.author_name}</p>
          </div>
          <div className="mt-2">
            <h2 className="font-semibold">About Author</h2>
            <p className="text-xs px-2">{SettingData?.about_author}</p>
          </div>
          <div className="mt-2">
            <h2 className="font-semibold">About App</h2>
            <p className="text-xs px-2">{SettingData?.about_app}</p>
          </div>
        </div>
      </Col>
      <UpdateProfile
        //@ts-ignore
        setShowEditModal={setShowEditModal}
        showEditModal={showEditModal}
        setUserData={setUserData}
      />
      <UpdateAppInfo
        setSettingData={setSettingData}
        //@ts-ignore
        setShowAppEditModal={setShowAppEditModal}
        showAppEditModal={showAppEditModal}
      />
    </Row>
  );
};

export default Index;
