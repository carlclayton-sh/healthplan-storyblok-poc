import { SbBlokData, storyblokEditable } from "@storyblok/react/rsc";

interface Props {
  blok: SbBlokData;
}

const Teaser = ({ blok }: Props) => {
  return (
    <h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>
      {blok.headline as string}
    </h2>
  );
};

export default Teaser;
