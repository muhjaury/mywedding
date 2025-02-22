import { color } from "@/constant/color";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${color.a1};

  @media all and (min-width: 1024px) {
    padding: 32px 80px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  > div {
    min-width: 100px !important;
    transition: 0.2s;
    > button {
      font-size: 16px;
      color: ${color.a1};
    }

    &:hover {
      padding-bottom: 8px;
      > button {
        color: ${color.a1};
      }
    }
  }
`;

export const Span = styled.span`
  font-size: 16px;
  color: ${color.a4};
  cursor: pointer;
`;
