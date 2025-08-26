import ServerComponent from "./ServerComponent";

export default function FooterGrid({ blok }) {
  console.log("INSIDE FOOTERGRID", blok);
  return (
    <div className="flex w-full justify-around">
      {blok.columns.map((blok) => {
        return (
          <div className="flex flex-col" key={blok._uid}>
            <h3 className="text-sm text-black mb-3 font-bold">{blok.title}</h3>
            <ServerComponent blok={blok} />
          </div>
        );
      })}
    </div>
  );
}
