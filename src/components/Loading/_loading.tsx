import { color } from "@/constant/color";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
to {
    transform: rotate(360deg);
}`;

export const Wrapper = styled.div`
  height: 40px;
  width: 40px;
  background: -webkit-linear-gradient(
    left top,
    ${color.a1} 0%,
    ${color.a2} 100%
  );
  border-radius: 100%;
  animation: ${rotate} 1.5s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.div`
  height: 30px;
  width: 30px;
  background: ${color.a4};
  border-radius: 100%;
`;
