import ServerComponent from "./ServerComponent";
import { cn } from "@/utils/cn";

export default function BtnGroup({ blok }) {
  return (
    <div
      className={cn("flex justify-center gap-2", {
        "flex-col": blok.layoutdirection === "col",
      })}
    >
      {blok.content.map((blok) => {
        return <ServerComponent key={blok._uid} blok={blok} />;
      })}
    </div>
  );
}
