import { Content } from "..";
import { Span, Wrapper } from "./_footer";

function Footer() {
  const handleNameClick = () => {
    window.open("https://github.com/muhjaury");
  };

  return (
    <Wrapper>
      <Content></Content>
      <Content></Content>
      <Content>
        <Span onClick={handleNameClick}>Created by Muhammad Jaury</Span>
      </Content>
    </Wrapper>
  );
}

export default Footer;
