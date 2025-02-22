import CLOSE from "./../../assets/svg/close.svg";
import { Close, Content, Wrapper } from "./_modal";

export type ModalProps = {
  children?: any;
  type?: string;
  display: boolean;
  onClose: Function;
};

const Modal: React.FC<ModalProps> = ({
  children,
  display = false,
  onClose,
  type = "primary",
}) => {
  const handleCloseClick = () => {
    onClose();
  };

  if (!display) return;
  return (
    <Wrapper>
      <Close src={CLOSE} onClick={handleCloseClick} type={type} />
      <Content type={type}>{children}</Content>
    </Wrapper>
  );
};

export default Modal;
