import { FC, useState } from "react";
import styled from "styled-components";
import Text from "../atoms/text/Text";
import SegmentedControl from "../molecules/SegmentedControl";


const DifficultySelect: FC = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const titleList = ['하', '중하', '중', '중하', '상']
  const keyList = ['low', 'mid-low', 'mid', 'mid-high', 'high']
  const tabList = titleList.map((v, i) => ({
    title: v,
    key: keyList[i]
  }))

  return (
    <Wrapper>
      <Text>난이도 설정</Text>
      <SegmentedControl tabList={tabList} currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default DifficultySelect