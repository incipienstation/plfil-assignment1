import React from 'react';
import styled from "styled-components";
import SideNavigationBar from "@/components/organisms/SideNavigationBar";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`
const MainTemplate: React.FC<{ children: React.ReactNode }> = ({children}) => {
  return (
    <StyledMainTemplate>
      <SideNavigationBar/>
      {children}
    </StyledMainTemplate>
  );
};

export default MainTemplate;