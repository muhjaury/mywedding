import { color } from "@/constant/color";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${color.a1};

  @media all and (min-width: 1024px) {
    padding: 32px 80px;
    justify-content: space-between;
  }
`;

export const Span = styled.span`
  font-size: 16px;
  color: ${color.a4};
  cursor: pointer;
`;
