import ServerComponent from "./sb/ServerComponent";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function Layout({ children }) {
  const Storyblok = getStoryblokApi();

  const res = await Storyblok.get("cdn/stories/navbar", {
    version: process.env.NODE_ENV !== "production" ? "draft" : "published",
  });
  const navbarData = res.data.story.content;
  const res1 = await Storyblok.get("cdn/stories/footer", {
    version: process.env.NODE_ENV !== "production" ? "draft" : "published",
  });
  const footerData = res1.data.story.content;

  return (
    <>
      <ServerComponent blok={navbarData} />
      <main>{children}</main>
      <ServerComponent blok={footerData} />
    </>
  );
}
