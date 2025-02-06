import { color } from "@/constant/color";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const UnitTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  height: 120px;
  width: 80px;
  border-radius: 16px;
  background: ${color.a1};
`;

export const UnitTimeTitle = styled.span`
  color: ${color.a4};
  font-size: 16px;
  font-weight: bold;
`;

export const UnitTimeValue = styled.span`
  color: ${color.a4};
  font-size: 64px;
  font-weight: bold;
`;
