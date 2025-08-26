import { cn } from "@/utils/cn";

export default function Button({ blok }) {
  return (
    <button
      className={cn("px-4 py-3 border-1 cursor-pointer rounded-md", {
        "bg-black text-white": blok.bgcolor === "black",
        "bg-white text-black": blok.bgcolor === "white",
      })}
    >
      {blok.label}
    </button>
  );
}
