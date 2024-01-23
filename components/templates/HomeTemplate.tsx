import { FC } from "react";
import styled from "styled-components";
import color from "@/styles/color"
import FloatingBar from "@/components/molecules/FloatingBar";
import InterestSelect from "@/components/organisms/InterestSelect";
import DifficultySelect from "@/components/organisms/DifficultySelect";

const HomeTemplate: FC = () => {
  return (
    <Wrapper>
      <ConfigSection>
        <InterestSelect />
        <DifficultySelect />
      </ConfigSection>

      <PreviewSection>
        <Card></Card>
        <Card></Card>
      </PreviewSection>

      <Footer>
        <FloatingBar />
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 120px;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 24px;
  grid-column-gap: 24px;
  grid-template-areas:
  "config-sec preview-sec"
  "footer footer";
`

const ConfigSection = styled.div`
  grid-area: config-sec;
  padding-left: 24px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 24px;
`

const PreviewSection = styled.div`
  grid-area: preview-sec;
  padding-right: 24px;
  display: grid;
  grid-template-rows: 1fr 5fr;
  grid-row-gap: 24px;
`

const Footer = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
`

const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${color.blue}
`

export default HomeTemplate;