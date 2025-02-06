import { color } from "@/constant/color";
import styled from "styled-components";

interface Int_Wrapper {
  loading?: string;
}

export const Wrapper = styled.div<Int_Wrapper>`
  position: relative;
  display: ${({ loading }) => (loading === "Y" ? "flex" : "block")};
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${color.a4};
`;

export const LoadingWrapper = styled.div`
  border-radius: 24px;
  border: 2px solid ${color.a1};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 32px;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const LoadingText = styled.div`
  color: ${color.a1};
  font-size: 20px;
  cursor: pointer;
`;

export const Content = styled.div`
  min-height: calc(100vh - 260px - 80px);
`;

export const Div = styled.div``;
