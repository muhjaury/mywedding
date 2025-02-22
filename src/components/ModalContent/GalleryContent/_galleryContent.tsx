import styled from "styled-components";

interface IF_Image {
  src: any;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Img = styled.img<IF_Image>`
  height: auto;
  width: 20%;
  object-fit: cover;
  vertical-align: bottom;
`;
