import type {AppProps} from 'next/app'
import SideNavigationBar from "@/components/organisms/SideNavigationBar";
import React from "react";
import MainTemplate from "@/components/templates/MainTemplate";

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <MainTemplate>
      <Component {...pageProps} />
    </MainTemplate>
  )
}

export default App