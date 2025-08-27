import { components } from "@/lib/storyblok";
import DoesNotExist from "./DoesNotExist";

export default function Navbar({ blok }) {
  return (
    <nav className="fixed top-0 h-16 flex w-full p-4 items-center justify-between border-b-1 border-gray-300  bg-white">
      {blok.content?.map((blok) => {
        const Component = components[blok.component];
        if (!Component) {
          return <DoesNotExist blok={blok} />;
        }
        return <Component key={blok._uid} blok={blok} />;
      })}
    </nav>
  );
}
