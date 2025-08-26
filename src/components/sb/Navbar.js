import { components } from "@/lib/storyblok";
import DoesNotExist from "./DoesNotExist";

export default function Navbar({ blok }) {
  console.log(blok);
  return (
    <nav className="flex w-full p-4 items-center justify-between border-b-1 border-gray-300 fixed bg-white top-0">
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
