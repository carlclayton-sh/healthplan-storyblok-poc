import {
  storyblokEditable,
  StoryblokComponent,
  SbBlokData,
} from "@storyblok/react/rsc";

interface Props {
  blok: SbBlokData;
}

const Page = ({ blok }: Props) => (
  <main {...storyblokEditable(blok)}>
    {(blok.body as SbBlokData[]).map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
