import { gtagEvent } from "../lib/gtag";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    if (!timeLeft) {
      gtagEvent("sail_away");
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <>
      {!timeLeft ? (
        <YouTube
          videoId="LTrk4X9ACtw"
          opts={{ playerVars: { autoplay: 1, start: 54 } }}
        />
      ) : (
        <p>{timeLeft}</p>
      )}
      <style jsx>{`
        p {
          margin: 0;
          font-size: 5rem;
        }
      `}</style>
    </>
  );
};

export default Timer;
