/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { ReactNode } from "react";

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
});

interface StoryblokProviderProps {
  children: ReactNode;
}

export default function StoryblokProvider({
  children,
}: StoryblokProviderProps) {
  return children;
}
