import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  open: boolean;
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;

  ${(props: { open: boolean }) => `
    visibility: ${props.open ? 'visible' : 'hidden'}
  `}
`;

const ModalContainer = styled.div`
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
`;

const ModalHeader = styled.div`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalTitle = styled.h2`
  font-size: 2.5rem;
`;

const CloseButton = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: 2.5rem;
  font-weight: 700;

  &:hover {
    color: #8e8d8d;
  }

  &:focus {
    outline: none;
  }
`;

const ModalContent = styled.div`
  font-size: 1.5rem;
`;

const Modal: React.FC<ModalProps> = ({ open, onClose }) => {
  return (
    <ModalOverlay open={open}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Warning!</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <ModalContent>You still have points not used.</ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
