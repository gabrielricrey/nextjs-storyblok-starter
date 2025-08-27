import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";
import getSbVersion from "@/utils/getSbVersion";

export default async function BlogPost({ params }) {
  const { slug } = await params;

  const { data } = await fetchData(slug);

  return (
    <div className="page">
      <StoryblokStory story={data.story} date={data.story.published_at} />
    </div>
  );
}

export async function fetchData(slug) {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/posts/${slug}`, {
    version: getSbVersion(),
  });
}
