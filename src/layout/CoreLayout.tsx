"use client";

import { Footer, Header, Loading, Modal } from "@/components";
import { GalleryContent, GiftUsContent } from "@/components/ModalContent";
import { useWidget } from "@/context";
import debounce from "@/utils/debounced";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import {
  Audio,
  Content,
  Div,
  LoadingContentWrapper,
  LoadingName,
  LoadingRowWrapper,
  LoadingText,
  LoadingTitle,
  LoadingWrapper,
  Wrapper,
} from "./_coreLayout";

function CoreLayout(props: any) {
  const [loading, setLoading] = useState<string>("Y");
  const [name, setName] = useState<string>("Our Family / Friend");
  const [audioTrigger, setAudioTrigger] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const { displayGallery, displayGiftUs, setDisplayGallery, setDisplayGiftUs } =
    useWidget();

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const to = urlParams.get("to");
    if (to) {
      setName(to ?? "");
    }
  }, []);

  useEffect(() => {
    const handleAudio = () => {
      if (document.hidden) {
        if (audioRef.current) {
          audioRef.current.pause();
        }
      } else {
        if (audioTrigger && audioRef.current) {
          audioRef.current.play();
        }
      }
    };

    document.addEventListener("visibilitychange", handleAudio);

    return () => {
      document.removeEventListener("visibilitychange", handleAudio);
    };
  }, [audioTrigger]);

  const openInvitation = () => {
    if (audioRef.current) {
      setAudioTrigger(true);
      audioRef.current.play();
    }
    setLoading("N");
  };

  const handleLoadingClick = debounce(openInvitation, 1000);

  return (
    <>
      <Audio ref={audioRef} src="/Yiruma-RiverFlowsInYou.mp3" />
      <Wrapper loading={loading}>
        {loading === "Y" ? (
          <>
            <LoadingWrapper>
              {name && (
                <LoadingRowWrapper>
                  <Loading />
                  <LoadingContentWrapper>
                    <LoadingTitle>Dear</LoadingTitle>
                    <LoadingName>{name}</LoadingName>
                  </LoadingContentWrapper>
                </LoadingRowWrapper>
              )}
              <LoadingText onClick={() => handleLoadingClick()}>
                Open Invitation
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
      <Modal display={displayGallery} onClose={() => setDisplayGallery(false)}>
        <GalleryContent />
      </Modal>
      <Modal
        display={displayGiftUs}
        onClose={() => setDisplayGiftUs(false)}
        type="secondary"
      >
        <GiftUsContent />
      </Modal>
    </>
  );
}

export default CoreLayout;
