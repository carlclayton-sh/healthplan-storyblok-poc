"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { ReactNode } from "react";

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

export default function StoryblokProvider({ children }: Props) {
  return children;
}
