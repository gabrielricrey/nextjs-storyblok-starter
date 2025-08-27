import ServerComponent from "./ServerComponent";
import { cn } from "@/utils/cn";

export default function LinkGroup({ blok }) {
  return (
    <div
      className={cn("flex gap-5", {
        "flex-col gap-2": blok.layoutdirection === "col",
      })}
    >
      {blok.links.map((blok) => (
        <ServerComponent key={blok._uid} blok={blok} />
      ))}
    </div>
  );
}
