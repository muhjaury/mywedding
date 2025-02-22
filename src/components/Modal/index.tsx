import { Close, Content, Wrapper } from "./_modal";
import CLOSE from "./../../assets/svg/close.svg";

export type ModalProps = {
  children?: any;
  display: boolean;
  onClose: Function;
};

const Modal: React.FC<ModalProps> = ({ children, display, onClose }) => {
  const handleCloseClick = () => {
    onClose();
  };

  if (!display) return;
  return (
    <Wrapper>
      <Close src={CLOSE} onClick={handleCloseClick} />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Modal;
