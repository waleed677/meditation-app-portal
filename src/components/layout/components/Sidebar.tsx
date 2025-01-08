import { Layout, Menu } from "antd";
import { MenuList } from "./MenuList";
import { useLocation, useNavigate } from "react-router-dom";
const { Sider } = Layout;
const Sidebar = ({ collapsed }: { collapsed?: boolean }) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="h-12 bg-[#205086] flex items-center justify-center">
        <h2
          className={`text-[#FEF9EF] italic font-mono ${
            collapsed ? "text-[11px] font-semibold" : "text-lg font-bold"
          }`}
        >
          MEDITATION
        </h2>
      </div>
      <Menu
        className="bg-[#2762A6]"
        theme="dark"
        mode="inline"
        onClick={(e: { key: string }) => navigate(e.key)}
        defaultSelectedKeys={[location.pathname]}
        items={MenuList}
      />
    </Sider>
  );
};

export default Sidebar;
