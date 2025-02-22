import { useWidget } from "@/context";
import { Button, Content } from "..";
import { ButtonWrapper, Span, Wrapper } from "./_footer";

function Footer() {
  const { setDisplayGiftUs } = useWidget();

  const handleNameClick = () => {
    window.open("https://github.com/muhjaury");
  };

  return (
    <Wrapper>
      <Content>
        <Span onClick={handleNameClick}>Created by Muhammad Jaury</Span>
      </Content>
      <Content>
        <ButtonWrapper>
          <Button onClick={() => setDisplayGiftUs(true)}>Gift Us</Button>
        </ButtonWrapper>
      </Content>
    </Wrapper>
  );
}

export default Footer;
