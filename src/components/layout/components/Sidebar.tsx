import { Drawer, Layout, Menu } from "antd";
import { MenuList } from "./MenuList";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
const { Sider } = Layout;
const Sidebar = ({
  collapsed,
  setCollapsed,
}: {
  collapsed?: boolean;
  setCollapsed: any;
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="hidden lg:block "
      >
        {!collapsed && (
          <div className="h-12 bg-[#205086] flex items-center justify-center">
            <h2
              className={`text-[#FEF9EF] italic font-mono ${
                collapsed ? "text-[11px] font-semibold" : "text-lg font-bold"
              }`}
            >
              MEDITATION
            </h2>
          </div>
        )}
        <Menu
          className="bg-[#2762A6]"
          theme="dark"
          mode="inline"
          onClick={(e: { key: string }) => navigate(e.key)}
          defaultSelectedKeys={[location.pathname]}
          items={MenuList}
        />
      </Sider>

      <Drawer
        title="MEDITATION"
        open={collapsed}
        onClose={() => setCollapsed(false)}
        width={200}
        placement="left"
        styles={{
          body: { padding: 0, background: "#2762A6" },
          header: { background: "#2762A6", color: "#fff" },
        }}
      >
        <Menu
          className="bg-[#2762A6]"
          theme="dark"
          mode="inline"
          onClick={(e: { key: string }) => navigate(e.key)}
          defaultSelectedKeys={[location.pathname]}
          items={MenuList}
        />
      </Drawer>
    </React.Fragment>
  );
};

export default Sidebar;
