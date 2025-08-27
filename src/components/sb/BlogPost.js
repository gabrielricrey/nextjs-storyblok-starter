export default function BlogPost({ blok }) {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <h1 className="text-4xl text-black">{blok.title}</h1>
    </div>
  );
}
