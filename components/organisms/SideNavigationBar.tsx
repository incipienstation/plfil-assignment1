import React, {useState} from "react";
import {MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, VideoCameraOutlined} from '@ant-design/icons';
import {Button, Layout, Menu, theme} from 'antd';
import {useRouter} from "next/router";

const {Header, Sider, Content} = Layout;

const SideNavigationBar: React.FC = () => {
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              zIndex: 1,
            }}
          />
        </>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined/>,
              label: 'home',
              onClick: () => router.replace("/home"),
            },
            {
              key: '2',
              icon: <VideoCameraOutlined/>,
              label: 'profile',
              onClick: () => router.replace("/profile"),
            },
          ]}
        />
      </Sider>
    </Layout>
  );
};

export default SideNavigationBar;