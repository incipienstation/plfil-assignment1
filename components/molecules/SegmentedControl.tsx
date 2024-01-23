import { FC } from "react";
import styled from "styled-components";
import color from "@/styles/color";

interface IPropsTabStyled {
  index: number;
  leng: number;
  currentTab: number;
}

interface IPropsTabMenu {
  tabList: Array<{
    title: string;
    key: string;
  }>;
  currentTab: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}

const SegmentedControl: FC<IPropsTabMenu> = ({ tabList, currentTab, setCurrentTab }) => {
  console.log(tabList.length);
  return (
    <Wrapper>
      {tabList.map((tab, index) => {
        return (
          <Segment
            key={index}
            onClick={() => {
              setCurrentTab(index);
            }}
            currentTab={currentTab}
            index={index}
            leng={tabList.length}
          >
            {tab.title}
          </Segment>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 41px;
  border-radius: 8px;
  background: #fff;
`;

const Segment = styled.div<IPropsTabStyled>`
  width: 100%;
  min-width: 48px;
  text-align: center;
  padding: 13px 0px 12px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid ${(props) => props.currentTab === props.index ? color.red : color.gray3};
  border-right: ${(props) => props.leng - 1 === props.index || props.currentTab === props.index ? `1px solid ${props.currentTab === props.index ? color.red : color.gray3}` : "0"};
  border-left: ${(props) => props.currentTab === props.index - 1 ? "0" : `1px solid ${props.currentTab === props.index ? color.red : color.gray3}`};
  color: ${(props) => props.currentTab === props.index ? color.red : "#999999"};

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export default SegmentedControl;