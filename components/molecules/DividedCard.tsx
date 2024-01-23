import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface IPropsDividedCardStyled {
  background?: string;
}

interface IPropsDividedCard extends IPropsDividedCardStyled {
  leftChild: ReactNode;
  rightChild: ReactNode;
}

const DividedCard: FC<IPropsDividedCard> = ({
  leftChild,
  rightChild,
  background,
}) => {
  return (
    <Wrapper background={background}>
      <Padding>
        {leftChild}
      </Padding>
      <Divider />
      <Padding>
        {rightChild}
      </Padding>
    </Wrapper>
  );
};


const Wrapper = styled.div <IPropsDividedCardStyled>`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  border: 1px solid #DDD;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.08);
  background: ${(props) => props.background || "none"};
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1px 1fr;
`;

const Padding = styled.div`
  height: 100%;
  padding: 12px 20px;
`;

const Divider = styled.div`
  width: 1px;
  height: 40px;
  background-color: #DDD;
`;

export default DividedCard;