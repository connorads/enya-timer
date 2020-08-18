import Layout from "../components/layout";
import Logo from "../components/logo";
import Timer from "../components/timer";

export default function Home() {
  return (
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

      <Timer />

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
}
