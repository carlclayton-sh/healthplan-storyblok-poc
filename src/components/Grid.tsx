import {
  storyblokEditable,
  StoryblokComponent,
  SbBlokData,
} from "@storyblok/react/rsc";

interface Props {
  blok: SbBlokData;
}

const Grid = ({ blok }: Props) => {
  return (
    <div {...storyblokEditable(blok)}>
      {(blok.columns as SbBlokData[]).map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
