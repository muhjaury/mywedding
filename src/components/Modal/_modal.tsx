import { color } from "@/constant/color";
import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  position: absolute;
  width: 800px;
  height: 400px;
  border-radius: 25px;
  margin-left: calc((100vw - 800px) / 2);
  margin-top: calc((100vh - 400px) / 2);
  background: ${color.a5};
  padding: 32px;
  color: ${color.a1};
`;
