import { components } from "@/lib/storyblok";
import DoesNotExist from "./DoesNotExist";

export default function Section({ blok }) {
  return (
    <section className="my-12 w-full flex flex-col items-center">
      {blok.content?.map((blok) => {
        console.log(blok.component, components[blok.component]);
        const Component = components[blok.component];
        if (!Component) return <DoesNotExist blok={blok} />;
        return <Component key={blok._uid} blok={blok} />;
      })}
    </section>
  );
}
