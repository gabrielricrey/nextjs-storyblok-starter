import ServerComponent from "./ServerComponent";

export default function Section({ blok }) {
  return (
    <section className="my-12 w-full flex flex-col items-center">
      {blok.content?.map((blok) => {
        return <ServerComponent key={blok._uid} blok={blok} />;
      })}
    </section>
  );
}
