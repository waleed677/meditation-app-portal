import { Avatar, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import LogoutIcon from "../../../assets/vendors/logout-icon";
import SettingIcon from "../../../assets/vendors/setting-icon";
import ImageUrl from "../../../assets/images/dummy-user.jpg";
import { useNavigate } from "react-router-dom";

interface TopHeaderProps {
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  collapsed: boolean;
}

const { Header } = Layout;

const TopHeader: React.FC<TopHeaderProps> = ({ setCollapsed, collapsed }) => {
  const navigate = useNavigate();
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
        <LogoutIcon onClick={() => navigate("/sign-in")} />
        <SettingIcon onClick={() => navigate("/setting")} />
        <div className="flex items-center gap-2">
          {/* Default fallback for Avatar in case ImageUrl is unavailable */}
          <Avatar
            size={34}
            src={ImageUrl || "/path/to/default-avatar.png"}
            alt="User Avatar"
          />
          <p className="text-white font-semibold text-sm">Super Admin</p>
        </div>
      </div>
    </Header>
  );
};

export default TopHeader;
