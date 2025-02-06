"use client";

import { kissingSeason } from "@/assets/font";
import { Footer, Header, Loading, Modal } from "@/components";
import { useWidget } from "@/context";
import debounce from "@/utils/debounced";
import { useState } from "react";
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
              <LoadingText className={kissingSeason.className}>
                Buka Undangan
              </LoadingText>
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
