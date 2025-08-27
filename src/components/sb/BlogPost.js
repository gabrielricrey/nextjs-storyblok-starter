export default function BlogPost({ blok, date }) {
  const formattedWithTime = new Date(date).toLocaleString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="h-[100vh] flex justify-center items-start flex-col p-4">
      <h1 className="text-4xl">{blok.title}</h1>
      <p className="text-start mt-2">{blok.text}</p>
      <div>
        <small className="italic mt-2">Posted by: {blok.author}</small>
        <small className="italic mt-2">{formattedWithTime}</small>
      </div>
    </div>
  );
}
