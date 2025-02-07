import { Close, Content, Wrapper } from "./_modal";
import CLOSE from "./../../assets/svg/close.svg";

export type ModalProps = {
  display: boolean;
  onClose: Function;
};

const Modal: React.FC<ModalProps> = ({ display, onClose }) => {
  const handleCloseClick = () => {
    onClose();
  };

  if (!display) return;
  return (
    <Wrapper>
      <Close src={CLOSE} onClick={handleCloseClick} />
      <Content></Content>
    </Wrapper>
  );
};

export default Modal;
