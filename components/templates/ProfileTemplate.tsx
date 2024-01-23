import { FC } from "react";
import styled from "styled-components";


const ProfileTemplate: FC = () => {
  return (
    <Wrapper>
      <h1>Welcome to the Profile Page!</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ProfileTemplate;