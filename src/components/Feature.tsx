import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";

interface Props {
  blok: SbBlokData;
}

const Feature = ({ blok }: Props) => (
  <div {...storyblokEditable(blok)}>{blok.name as string}</div>
);

export default Feature;
