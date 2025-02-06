import moment from "moment-timezone";
import { useEffect, useState } from "react";
import {
  UnitTimeTitle,
  UnitTimeValue,
  UnitTimeWrapper,
  Wrapper,
} from "./_countdown";
import { kissingSeason } from "@/assets/font";

function Countdown(props: any) {
  const [days, setDays] = useState<string>("00");
  const [hours, setHours] = useState<string>("00");
  const [minutes, setMinutes] = useState<string>("00");
  const [seconds, setSeconds] = useState<string>("00");

  useEffect(() => {
    const countDownDate = moment("Apr 19, 2025 08:00:00").tz("Asia/Makassar");

    var x = setInterval(function () {
      const timeNow = moment().tz("Asia/Makassar");
      const distance = countDownDate.diff(timeNow);

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, "0");
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
        .toString()
        .padStart(2, "0");
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0");
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");

      if (distance > 0) {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  });

  return (
    <Wrapper {...props}>
      <UnitTimeWrapper>
        <UnitTimeTitle>Days</UnitTimeTitle>
        <UnitTimeValue className={kissingSeason.className}>
          {days}
        </UnitTimeValue>
      </UnitTimeWrapper>
      <UnitTimeWrapper>
        <UnitTimeTitle>Hours</UnitTimeTitle>
        <UnitTimeValue className={kissingSeason.className}>
          {hours}
        </UnitTimeValue>
      </UnitTimeWrapper>
      <UnitTimeWrapper>
        <UnitTimeTitle>Minutes</UnitTimeTitle>
        <UnitTimeValue className={kissingSeason.className}>
          {minutes}
        </UnitTimeValue>
      </UnitTimeWrapper>
      <UnitTimeWrapper>
        <UnitTimeTitle>Seconds</UnitTimeTitle>
        <UnitTimeValue className={kissingSeason.className}>
          {seconds}
        </UnitTimeValue>
      </UnitTimeWrapper>
    </Wrapper>
  );
}

export default Countdown;
