import { FC, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { useRouter } from "next/router";
import styled, { CSSProperties } from "styled-components";
import color from "@/styles/color";

const { Header, Sider, Content } = Layout;

const Navigation: FC = () => {
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Wrapper>
      <Layout>
        <Sider style={siderStyle} trigger={null} collapsible collapsed={collapsed}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              zIndex: 1,
            }}
          />
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <HomeOutlined />,
                label: 'home',
                onClick: () => router.replace("/home"),
              },
              {
                key: '2',
                icon: <UserOutlined />,
                label: 'profile',
                onClick: () => router.replace("/profile"),
              },
            ]}
          />
          <EmptyBox />
        </Sider>
      </Layout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  border-right: 1px solid ${color.gray4};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const siderStyle: CSSProperties = {
  backgroundColor: color.white
}

const EmptyBox = styled.div`
  height: 64px;
`

export default Navigation;