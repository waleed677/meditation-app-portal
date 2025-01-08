import React, { ReactNode, useState } from "react";
import { Layout } from "antd";
import Sidebar from "./components/Sidebar";
import TopHeader from "./components/TopHeader";

const { Content } = Layout;

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="h-screen w-screen overflow-hidden">
      <Sidebar collapsed={collapsed} />
      <Layout className="bg-[#f3ebe4d8]">
        <TopHeader setCollapsed={setCollapsed} collapsed={collapsed} />
        <div className="overflow-y-auto">
          <Content className="m-5 border border-zinc-300 p-5 rounded-xl drop-shadow bg-white">
            {children}
          </Content>
        </div>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
