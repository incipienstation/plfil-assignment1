import type { AppProps } from 'next/app';
import Navigation from "@/components/organisms/Navigation";
import { FC } from "react";
import GlobalStyle from "../styles/GlobalStyle";
import { ConfigProvider } from 'antd';
import styled from 'styled-components';
import "@/styles/font.css";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#ff1744",
            colorSuccess: "#52c41a",
            colorWarning: "#ff1744",
            colorError: "#ff1744",
            colorInfo: "#ff1744",
            colorTextBase: "#000000",
            colorBgContainerDisabled: "#EAEAEA",
            colorTextDisabled: "#ffffff",
          },
          components: {
            Button: {
              colorPrimary:
                "linear-gradient(92deg, #ff009c 0%, #ff5000 100%) !important",
              primaryShadow: "none",
              defaultShadow: "none",
              defaultColor: "#666666",
              defaultBorderColor: "#666666",
              borderColorDisabled: "transparent",
              colorBgContainerDisabled: "#dddddd",
              defaultGhostBorderColor: "#ff1744",
              groupBorderColor: "#ff1744",
              ghostBg: "transparent",
              defaultGhostColor: "#ff1744",
            },
            Input: {
              activeBorderColor: "#AAAAAA",
              hoverBorderColor: "#AAAAAA",
              activeShadow: "#AAAAAA",
            },
          },
        }}
      >
        {/* <Wrapper>
          <Navigation />
          <Component {...pageProps} />
        </Wrapper> */}

        <Header>
          <Icon1 src='icons/menu_icon.svg' />
          <Icon2 src='icons/plfil_logo.svg' />
          <EmptyBlock />
          <Icon3 src='icons/notification_icon.svg' />
          <Icon3 src='icons/plfil_icon.svg' />
        </Header>

        <Component {...pageProps} />
      </ConfigProvider>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100vh;
`;


const Header = styled.div`
  width: 100%;
  height: 52px;
  align-items: center;
  background: #FFF;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Icon1 = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 14px;
`;

const Icon2 = styled.img`
  width: 52px;
  height: 52px;
  margin-left: 10px;
`;

const Icon3 = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 17px;
  &:last-child {
    margin-right: 20px;
  }
`;

const EmptyBlock = styled.div`
  width: 100%;
  height: 100%;
`;
export default App;