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
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Ironsight"
            width={48}
            height={48}
            className="rounded-lg"
          />
        </Link>
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-accent-gold/10 hover:text-accent-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
