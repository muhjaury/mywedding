"use client";

import { Footer, Header, Loading, Modal } from "@/components";
import { useWidget } from "@/context";
import debounce from "@/utils/debounced";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import {
  Content,
  Div,
  LoadingText,
  LoadingWrapper,
  Wrapper,
} from "./_coreLayout";

function CoreLayout(props: any) {
  const [loading, setLoading] = useState("Y");

  const { displaySupportUs, setDisplaySupportUs } = useWidget();

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  const openInvitation = () => {
    new Audio("/Yiruma-RiverFlowsInYou.mp3").play();
    setLoading("N");
  };

  const handleLoadingClick = debounce(openInvitation, 1000);

  return (
    <>
      <Wrapper loading={loading}>
        {loading === "Y" ? (
          <>
            <LoadingWrapper onClick={() => handleLoadingClick()}>
              <Loading />
              <LoadingText>Buka Undangan</LoadingText>
            </LoadingWrapper>
          </>
        ) : (
          <>
            <Header />
            <Content>{props.children}</Content>
            <Footer />
            <Div className="snow" />
          </>
        )}
      </Wrapper>
      <Modal
        display={displaySupportUs}
        onClose={() => setDisplaySupportUs(false)}
      ></Modal>
    </>
  );
}

export default CoreLayout;
