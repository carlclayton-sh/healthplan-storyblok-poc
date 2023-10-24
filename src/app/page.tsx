import {
  ISbStoriesParams,
  StoryblokComponent,
  getStoryblokApi,
} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      {/* <StoryblokStory story={data.story} /> */}
      <h1>Story: {data.story.id}</h1>
      <StoryblokComponent blok={data.story.content} />
    </div>
  );
}

async function fetchData() {
  let sbParams = { version: "draft" } as ISbStoriesParams;

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
