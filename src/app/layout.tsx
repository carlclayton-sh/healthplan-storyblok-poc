import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";
import StoryblokProvider from "./storyblokProvider";
import { ReactNode } from "react";
import "./globals.css";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
});
interface Props {
  children: ReactNode;
}

/** Import your components */
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Feature from "../components/Feature";
import Grid from "../components/Grid";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components,
});

export default function RootLayout({ children }: Props) {
  return (
    // <StoryblokProvider>
    <html lang="en">
      <body>{children}</body>
      <StoryblokBridgeLoader options={{}} />
    </html>
    // </StoryblokProvider>
  );
}
