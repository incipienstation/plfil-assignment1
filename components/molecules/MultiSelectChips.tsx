import { FC, useEffect, useState } from "react";
import Chip from "../atoms/chip/Chip";
import color from "@/styles/color";
import styled from "styled-components";

interface StyledProps {
  bg?: boolean;
}

interface IPropsMultiSelectChips {
  options: string[];
  onSelect: (selectedItems: string[]) => void;
}

const MultiSelectChips: FC<IPropsMultiSelectChips> = ({ options, onSelect }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleChipClick = (item: string) => {
    if (selectedItems.includes(item)) {
      // Remove the item if already selected
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      // Add the item if not selected
      setSelectedItems([...selectedItems, item]);
    }
  };

  // Call the onSelect callback when the selection changes
  useEffect(() => {
    onSelect(selectedItems);
  }, [selectedItems, onSelect]);

  return (
    <div>
      {options.map((option) => (
        <StyledChip
          key={option}
          onClick={() => handleChipClick(option)}
          bg={selectedItems.includes(option)}
        >
          {option}
        </StyledChip>
      ))}
    </div>
  );
};

const StyledChip = styled(Chip) <StyledProps>`
  background-color: ${(props) => props.bg ? color.red : '#e0e0e0'};
  color:  ${(props) => props.bg ? '#fff' : '#000'}
`


export default MultiSelectChips