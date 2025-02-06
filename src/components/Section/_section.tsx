import { color } from "@/constant/color";
import styled from "styled-components";

interface IF_Wrapper {
  type?: string;
}

export const Wrapper = styled.div<IF_Wrapper>`
  overflow: hidden;
  position: relative;
  padding: 32px 80px;
  width: 100%;
  min-height: 320px;
  background: ${({ type }) => (type === "secondary" ? color.a2 : color.a4)};
  color: ${({ type }) => (type === "secondary" ? "black" : "white")};
`;
