import { FC, ReactNode, useState } from "react";
import { Button, Modal as AntdModal, ModalProps as AntdModalProps } from 'antd';
import styled from "styled-components";

interface ModalProps extends AntdModalProps {
  children: ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
}

const Modal: FC<ModalProps> = ({ children, onOk, onCancel, ...props }) => {
  return (
    <StyledModal {...props} title="Modal" onOk={onOk} onCancel={onCancel} okText="확인" cancelText="취소">
      {children}
    </StyledModal>
  );
}

const StyledModal = styled(AntdModal) <ModalProps>`
  
`

export default Modal