import ServerComponent from "./ServerComponent";

export default function Footer({ blok }) {
  return (
    <footer className="border-t-2 border-gray-300 w-full flex justify-center items-center p-7">
      {blok.content?.map((blok) => (
        <ServerComponent key={blok._uid} blok={blok} />
      ))}
    </footer>
  );
}
