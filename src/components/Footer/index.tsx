import { Content } from "..";
import { Span, Wrapper } from "./_footer";

function Footer() {
  return (
    <Wrapper>
      <Content></Content>
      <Content></Content>
      <Content>
        <Span>Created by Muhammad Jaury</Span>
      </Content>
    </Wrapper>
  );
}

export default Footer;
