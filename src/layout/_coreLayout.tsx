import { color } from "@/constant/color";
import styled from "styled-components";

interface IF_Wrapper {
  loading?: string;
}

export const Wrapper = styled.div<IF_Wrapper>`
  position: relative;
  display: ${({ loading }) => (loading === "Y" ? "flex" : "block")};
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${color.a4};
`;

export const Audio = styled.audio`
  display: none;
`;

export const LoadingWrapper = styled.div`
  border-radius: 24px;
  border: 2px solid ${color.a1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 32px;
  margin: 8px;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const LoadingRowWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

export const LoadingContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LoadingTitle = styled.div`
  color: ${color.a1};
  font-size: 20px;
  font-weight: 600;
`;

export const LoadingName = styled.div`
  color: ${color.a1};
  font-size: 20px;
`;

export const LoadingText = styled.div`
  border: 1px solid ${color.a1};
  border-radius: 24px;
  padding: 8px 16px;
  background: ${color.a1};
  color: ${color.a4};
  font-size: 20px;
  cursor: pointer;
`;

export const Content = styled.div`
  min-height: calc(100vh - 260px - 80px);
`;

export const Div = styled.div`
  z-index: 3;
`;
