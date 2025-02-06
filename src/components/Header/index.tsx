import { helloValentina, kissingSeason } from "@/assets/font";
import { useWidget } from "@/context";
import { useEffect, useState } from "react";
import { Button } from "..";
import { ButtonWrapper, HeaderText, Nav, Wrapper } from "./_header";

function Header() {
  const [scrolled, setScrolled] = useState("false");

  const { setDisplaySupportUs } = useWidget();

  useEffect(() => {
    const handleStickyScroll = () => {
      if (window.scrollY > 80) {
        setScrolled("true");
      } else {
        setScrolled("false");
      }
    };
    window.addEventListener("scroll", handleStickyScroll);

    return () => {
      window.removeEventListener("scroll", handleStickyScroll);
    };
  }, []);

  return (
    <>
      <HeaderText className={helloValentina.className}>
        Muhammad Jaury & Kiki Astrina
      </HeaderText>
      <Wrapper scrolled={scrolled} className={kissingSeason.className}>
        <Nav>Home</Nav>
        <Nav>Gallery</Nav>
        <ButtonWrapper>
          <Button
            className={kissingSeason.className}
            onClick={() => setDisplaySupportUs(true)}
          >
            Support Us
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

export default Header;
