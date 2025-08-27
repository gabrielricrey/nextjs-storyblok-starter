import ServerComponent from "./ServerComponent";

export default function Hero({ blok }) {
  return (
    <div className="h-[100vh] flex flex-col justify-center">
      {blok.content.map((blok) => (
        <ServerComponent key={blok._uid} blok={blok} />
      ))}
    </div>
  );
}
