import { gtagEvent } from "../lib/gtag";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

interface TimerProps {
  timerSeconds: number;
  videoId: string;
  videoStartSeconds?: number;
}

const Timer: React.FC<TimerProps> = ({
  timerSeconds,
  videoId,
  videoStartSeconds,
}) => {
  const [timeLeft, setTimeLeft] = useState(timerSeconds);

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
          videoId={videoId}
          opts={{ playerVars: { autoplay: 1, start: videoStartSeconds } }}
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
