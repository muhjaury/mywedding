import { color } from "@/constant/color";
import styled from "styled-components";

interface Int_Img {
  src: any;
}

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentRight1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MapsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const IFrame = styled.iframe`
  width: 100%;
  height: 100%;

  @media all and (min-width: 1024px) {
    width: 600px;
    height: 450px;
  }
`;

export const A = styled.a`
  font-size: 20px;
  color: ${color.a1};
`;

export const DescriptionPrimary = styled.div`
  display: flex;
  justify-content: center;
  text-align: justify;
  width: 480px;
  font-size: 20px;
  color: ${color.a1};
`;

export const ArabicPrimary = styled.div`
  direction: rtl;
  width: 480px;
  font-size: 24px;
  color: ${color.a1};
`;

export const Img = styled.img<Int_Img>``;
