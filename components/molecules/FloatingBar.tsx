import { FC, useState } from "react";
import styled from "styled-components";
import Button from "../atoms/button/Button";
import Modal from "../atoms/modal/Modal";

const FloatingBar: FC = () => {
  const itemList = ["학습", "복습", "테스트"]
  const handleButtonClickList = Array(3).fill(0).map((_, i) => {
    return () => {
      setModalContent(itemList[i])
      setIsModalOpen(true)
    }
  })

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string | null>(null)

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancle = () => {
    setIsModalOpen(false)
  }


  return (
    <Wrapper>
      {itemList.map((v, i) => (
        <Button
          key={i}
          onClick={handleButtonClickList[i]}
        >{v}</Button>
      ))}
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancle}>{modalContent}</Modal>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 70%;
  height: 48px;
  min-width: 300px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  justify-items: center;
  align-items: center;
`

export default FloatingBar