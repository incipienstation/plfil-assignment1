import { FC } from "react";
import styled from "styled-components";
import { Button as AntdButton, ButtonProps as AntdButtonProps } from "antd";

interface ButtonProps extends AntdButtonProps {
  children: React.ReactNode;
}


const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton {...props} type="primary">
      {children}
    </StyledButton>
  )
}

const StyledButton = styled(AntdButton) <ButtonProps>`
  width: 70px;
`

export default Button;