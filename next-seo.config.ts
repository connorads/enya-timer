import { DefaultSeoProps } from "next-seo";

const title = "Enya Timer ⏱";
const url = "https://enyatimer.app";
const description = "When the iPhone uplift ringtone is not enough 💃";

const seoConfig: DefaultSeoProps = {
  title,
  description,
  openGraph: {
    type: "website",
    url,
    site_name: title,
  },
};

export default seoConfig;
