import { color } from "@/constant/color";
import styled from "styled-components";

interface IF_Img {
  src: any;
  onClick?: Function;
}

export const Wrapper = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const Close = styled.img<IF_Img>`
  z-index: 100;
  position: absolute;
  height: 32px;
  width: 32px;
  right: calc((100vw - 344px) / 2);
  top: calc((100vh - 464px) / 2);
  cursor: pointer;

  @media all and (min-width: 1024px) {
    right: calc((100vw - 960px) / 2);
    top: calc((100vh - 456px) / 2);
  }
`;

export const Content = styled.div`
  position: absolute;
  border-radius: 25px;
  background: ${color.a4};
  padding: 40px;
  color: ${color.a1};
  overflow: hidden;

  width: 360px;
  height: 480px;
  margin-left: calc((100vw - 360px) / 2);
  margin-top: calc((100vh - 480px) / 2);

  @media all and (min-width: 1024px) {
    width: 960px;
    height: 480px;
    margin-left: calc((100vw - 960px) / 2);
    margin-top: calc((100vh - 480px) / 2);
  }
`;
