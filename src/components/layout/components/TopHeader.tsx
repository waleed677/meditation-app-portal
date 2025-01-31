import { Avatar, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import LogoutIcon from "../../../assets/vendors/logout-icon";
import SettingIcon from "../../../assets/vendors/setting-icon";

import { useNavigate } from "react-router-dom";
import { joinFileLink } from "../../../utils/commonFun";

interface TopHeaderProps {
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  collapsed: boolean;
}

const { Header } = Layout;

const TopHeader: React.FC<TopHeaderProps> = ({ setCollapsed, collapsed }) => {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo");
  const userData = userInfo ? JSON.parse(userInfo) : { username: "Guest" };

  return (
    <Header className="h-12 px-4 flex items-center justify-between">
      {collapsed ? (
        <MenuUnfoldOutlined
          onClick={() => setCollapsed(!collapsed)}
          className="text-white text-lg"
        />
      ) : (
        <MenuFoldOutlined
          onClick={() => setCollapsed(!collapsed)}
          className="text-white text-lg"
        />
      )}
      <div className="flex items-center gap-3">
        <LogoutIcon
          onClick={() => {
            localStorage.removeItem("authToken");
            localStorage.removeItem("userInfo");
            navigate("/sign-in");
          }}
        />
        <SettingIcon onClick={() => navigate("/setting")} />
        <div className="flex items-center gap-2">
          {/* <Avatar
            size={34}
            src={ImageUrl || "/path/to/default-avatar.png"}
            alt="User Avatar"
          /> */}
          <Avatar
            className="border border-zinc-300"
            src={joinFileLink(userData?.logo)}
            alt=""
            size={34}
          />
          <p className="text-white font-semibold text-sm">
            {" "}
            {userData.username
              ? userData.username.charAt(0).toUpperCase() +
                userData.username.slice(1)
              : ""}
          </p>
        </div>
      </div>
    </Header>
  );
};

export default TopHeader;
