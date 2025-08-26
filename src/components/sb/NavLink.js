import Link from "next/link";

export default function NavLink({ blok }) {
  console.log(blok);
  const href = blok.link?.cached_url || {};
  return (
    <Link href={href} className="text-sm text-gray-500 hover:text-gray-950">
      {blok.name}
    </Link>
  );
}
