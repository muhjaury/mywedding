import { useEffect, useState } from "react";
import {
  AccountLabel,
  AccountNumber,
  AccountValue,
  AccountWrapper,
  Coppied,
  Wrapper,
} from "./_supportUsContent";

function SupportUsContent() {
  const [coppied, setCoppied] = useState<boolean>(false);

  useEffect(() => {
    if (coppied) {
      setTimeout(() => setCoppied(false), 3000);
    }
  }, [coppied]);

  const handleFirstAccClick = () => {
    navigator.clipboard.writeText("1520032030328");
    setCoppied(true);
  };

  const handleSecondAccClick = () => {
    navigator.clipboard.writeText("5859459264145615");
    setCoppied(true);
  };

  return (
    <Wrapper>
      <AccountWrapper onClick={handleFirstAccClick}>
        <AccountLabel>Bank Mandiri</AccountLabel>
        <AccountNumber>1520032030328</AccountNumber>
        <AccountValue>a.n. Muhammad Jaury</AccountValue>
      </AccountWrapper>
      <AccountWrapper onClick={handleSecondAccClick}>
        <AccountLabel>Bank Neo Commerce</AccountLabel>
        <AccountNumber>5859459264145615</AccountNumber>
        <AccountValue>a.n. Kiki Astrina</AccountValue>
      </AccountWrapper>
      <Coppied>{coppied && "Coppied"}</Coppied>
    </Wrapper>
  );
}

export default SupportUsContent;
