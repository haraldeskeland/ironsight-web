import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#features", label: "Features" },
  { href: "#characters", label: "Characters" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b-4 border-[#022d55] bg-[#034a7e] shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Ironsight"
            width={120}
            height={120}
            className="rounded-2xl"
          />
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-5 py-2.5 font-game text-base text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
