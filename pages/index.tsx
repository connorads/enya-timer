import { NextPage } from "next";
import Layout from "../components/layout";
import Logo from "../components/logo";
import Timer from "../components/timer";

interface HomeProps {
  timerSeconds: number;
  videoId: string;
  videoStartSeconds?: number;
}

const Home: NextPage<HomeProps> = ({
  timerSeconds,
  videoId,
  videoStartSeconds,
}) => (
  <Layout>
    <Logo />

    <h1>Enya Timer</h1>

    <h2>
      When the{" "}
      <a href="https://www.youtube.com/watch?v=jcLOaqsVQY4">
        iPhone uplift ringtone
      </a>{" "}
      is not enough 💃
    </h2>

    <Timer
      timerSeconds={timerSeconds}
      videoId={videoId}
      videoStartSeconds={videoStartSeconds}
    />

    <p>
      Note: <i>Autoplay is desktop only</i> 👨‍💻
    </p>

    <style jsx>{`
      h1,
      h2 {
        text-align: center;
      }

      h1 {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      h2 {
        font-weight: normal;
        line-height: 1.5;
        font-size: 1.5rem;
        margin-block-start: 1rem;
        margin-block-end: 1rem;
      }
    `}</style>
  </Layout>
);

Home.getInitialProps = async ({ query }) => {
  const { t, v, s } = query;

  const timerSeconds = typeof t === "string" ? parseInt(t) : undefined;
  const videoId = typeof v === "string" ? v : undefined;
  const videoStartSeconds = typeof s === "string" ? parseInt(s) : undefined;

  return {
    timerSeconds: timerSeconds || 120,
    videoId: videoId || "LTrk4X9ACtw",
    videoStartSeconds: videoStartSeconds
      ? videoStartSeconds
      : videoId
      ? undefined
      : 54,
  };
};

export default Home;
