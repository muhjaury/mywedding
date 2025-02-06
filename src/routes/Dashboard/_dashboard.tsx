import { color } from "@/constant/color";
import styled from "styled-components";

interface Int_Img {
  src: any;
}

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 1024px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const ContentRight1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContentLeft2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContentLeft2Title = styled.div`
  text-align: center;
  color: ${color.a4};
  font-size: 32px;
`;

export const ContentLeft2Description = styled.div`
  text-align: center;
  color: ${color.a4};
  font-size: 24px;
`;

export const NameBig1 = styled.div`
  text-align: left;
  color: ${color.a5};
  font-size: 40px;

  @media all and (min-width: 1024px) {
    padding-left: 120px;
    font-size: 56px;
  }
`;

export const NameSmall1 = styled.div`
  text-align: left;
  color: ${color.a5};
  font-size: 24px;

  @media all and (min-width: 1024px) {
    padding-left: 120px;
    font-size: 56px;
  }
`;

export const GapName = styled.div`
  text-align: center;
  color: ${color.a4};
  font-size: 40px;
  margin-top: -24px;
`;

export const NameBig2 = styled.div`
  text-align: right;
  color: ${color.a5};
  font-size: 40px;

  @media all and (min-width: 1024px) {
    padding-right: 120px;
    font-size: 56px;
  }
`;

export const NameSmall2 = styled.div`
  text-align: right;
  color: ${color.a5};
  font-size: 24px;

  @media all and (min-width: 1024px) {
    padding-right: 120px;
    font-size: 56px;
  }
`;

export const Title3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 72px;
  color: ${color.a1};
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
  color: ${color.a4};
`;

export const DescriptionPrimary = styled.div`
  display: flex;
  justify-content: center;
  text-align: justify;
  font-size: 20px;
  color: ${color.a1};

  @media all and (min-width: 1024px) {
    width: 480px;
  }
`;

export const ArabicPrimary = styled.div`
  direction: rtl;
  font-size: 24px;
  color: ${color.a1};

  @media all and (min-width: 1024px) {
    width: 480px;
  }
`;

export const Img = styled.img<Int_Img>`
  -webkit-filter: drop-shadow(1px 1px 1px #222);
  filter: drop-shadow(1px 1px 1px #222);
`;

export const ContentRight4 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

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

export const ContentRight4Description = styled.div`
  text-align: left;
  color: ${color.a5};
  font-size: 24px;
`;

export const ContentRight4Date = styled.div`
  text-align: center;
  color: ${color.a5};
  font-size: 40px;

  @media all and (min-width: 1024px) {
    font-size: 56px;
  }
`;
