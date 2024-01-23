import { FC } from "react";
import MultiSelectChips from "../molecules/MultiSelectChips";
import styled from "styled-components";
import Text from "@/components/atoms/text/Text"

const InterestSelect: FC = () => {
  const options = ['비즈니스', '과학/기술', '엔터테인먼트', '스포츠']
  const handleSelect = (selectedItems: string[]) => {
    console.log('Selected Items:', selectedItems);
  };

  return (
    <Wrapper>
      <Text>관심사 설정</Text>
      <MultiSelectChips options={options} onSelect={handleSelect}></MultiSelectChips>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default InterestSelect