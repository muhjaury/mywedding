import { Content, Wrapper } from "./_modal";

export type ModalProps = {
  display: boolean;
};

const Modal: React.FC<ModalProps> = ({ display }) => {
  if (!display) return;
  return (
    <Wrapper>
      <Content>Modal Test</Content>
    </Wrapper>
  );
};

export default Modal;
