import Image from "next/image";

export default function Card({ blok }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col border-gray-300 border-1 cursor-pointer hover:border-black">
      {blok.image?.filename && blok.image.filename.trim() !== "" && (
        <Image
          width={300}
          height={300}
          alt={"none"}
          src={blok.image.filename}
        />
      )}
      <h3 className="font-semibold text-xl">{blok.title}</h3>
      <p>{blok.info}</p>
    </div>
  );
}
