import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-card/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
        <span className="text-sm text-text-secondary">&copy; {new Date().getFullYear()} HMT Eskeland. All rights reserved.</span>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-sm text-text-secondary transition-colors hover:text-accent-gold">Privacy Policy</Link>
          <Link href="/terms" className="text-sm text-text-secondary transition-colors hover:text-accent-gold">Terms of Service</Link>
          <Link href="/support" className="text-sm text-text-secondary transition-colors hover:text-accent-gold">Support</Link>
        </div>
      </div>
    </footer>
  );
}
