import { helloValentina } from "@/assets/font";
import { useWidget } from "@/context";
import { useEffect, useState } from "react";
import { HeaderText, Nav, Wrapper } from "./_header";

function Header() {
  const [scrolled, setScrolled] = useState("false");

  const { setDisplayGallery } = useWidget();

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

  const handleNavClick = (target: string) => {
    if (target === "Home") {
      return window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <HeaderText className={helloValentina.className}>
        Muhammad Jaury & Kiki Astrina
      </HeaderText>
      <Wrapper scrolled={scrolled}>
        <Nav onClick={() => handleNavClick("Home")}>Home</Nav>
        <Nav onClick={() => setDisplayGallery(true)}>Gallery</Nav>
      </Wrapper>
    </>
  );
}

export default Header;
