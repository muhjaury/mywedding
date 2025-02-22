import { color } from "@/constant/color";
import styled from "styled-components";

interface IF_Wrapper {
  scrolled?: string;
}

export const HeaderText = styled.div`
  height: 160px;
  padding: 16px;
  background: ${color.a2};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: ${color.a5};

  @media all and (min-width: 1024px) {
    font-size: 80px;
    padding: 32px 80px 0 80px;
  }
`;

export const Wrapper = styled.div<IF_Wrapper>`
  position: sticky;
  z-index: 5;
  top: 0;
  padding: 16px;
  height: 100px;
  background: ${({ scrolled }) =>
    scrolled === "true" ? "rgba(114, 125, 115, 0.8)" : `${color.a2}`};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  transition: 0.3s background;

  @media all and (min-width: 1024px) {
    padding: 32px 80px;
  }
`;

export const WrapperLeft = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-between;
`;

export const Nav = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    color: #d9d9d9;
  }
`;
