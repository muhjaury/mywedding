import { color } from "@/constant/color";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const AccountWrapper = styled.div`
  width: 280px;
  padding: 16px;
  border: 2px solid ${color.a1};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: start;
  justify-content: space-between;
  cursor: pointer;
`;

export const AccountLabel = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const AccountNumber = styled.div`
  font-size: 24px;
  font-family: Arial;
`;

export const AccountValue = styled.div`
  font-size: 24px;
`;

export const Coppied = styled.div`
  height: 24px;
  font-size: 24px;
`;
