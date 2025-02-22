import { color } from "@/constant/color";
import styled from "styled-components";

interface IF_Image {
  src: any;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${color.a4};
  }

  &::-webkit-scrollbar-thumb {
    background: ${color.a2};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${color.a4};
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-grow: 1;
  flex-wrap: nowrap;
`;

export const Img = styled.img<IF_Image>`
  height: auto;
  width: 30%;
  object-fit: cover;
  vertical-align: bottom;
  transition: 0.3s;
  &:hover {
    width: 40%;
  }

  @media all and (min-width: 1024px) {
    width: 20%;

    &:hover {
      width: 40%;
    }
  }
`;
