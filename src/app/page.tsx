import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <h1>Story: {data.story.name}</h1>
    </div>
  );
}

export async function fetchData() {
  let sbParams = { version: "draft" } as ISbStoriesParams;

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
