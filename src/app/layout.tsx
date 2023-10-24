import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "./storyblokProvider";
import { ReactNode } from "react";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
});
interface StoryblokProviderProps {
  children: ReactNode;
}
export default function RootLayout({ children }: StoryblokProviderProps) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  );
}
