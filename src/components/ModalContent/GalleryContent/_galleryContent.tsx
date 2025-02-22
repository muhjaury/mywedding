import styled from "styled-components";

interface IF_Image {
  src: any;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-wrap: nowrap;
`;

export const Img = styled.img<IF_Image>`
  height: auto;
  width: 20%;
  object-fit: cover;
  vertical-align: bottom;
  transition: 0.3s;

  &:hover {
    width: 40%;
  }
`;
