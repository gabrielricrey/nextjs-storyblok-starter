import { cn } from "@/utils/cn";

export default function SectionHeader({ blok }) {
  return (
    <div
      className={cn("flex items-center justify-center gap-4 my-6", {
        "flex-col": blok.layoutdirection === "col",
      })}
    >
      <h2 className="text-3xl font-extrabold sm:text-4xl text-center">
        {blok.title}
      </h2>
      {blok.subtitle && (
        <p className="mt-4 text-lg text-gray-400 text-center">
          {blok.subtitle}
        </p>
      )}
    </div>
  );
}
