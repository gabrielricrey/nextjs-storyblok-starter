import Image from "next/image";
import Link from "next/link";

export default function Logo({ blok }) {
  const href = blok.link?.cached_url || {};
  return (
    <div>
      <Link href={href}>
        <Image src={blok.logo.filename} width={50} height={50} alt="logo" />
      </Link>
    </div>
  );
}
