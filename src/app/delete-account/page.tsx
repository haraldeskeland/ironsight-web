import Link from "next/link";

export const metadata = {
  title: "Delete Your Account — Ironsight",
  description: "How to delete your Ironsight account and the data linked to it, in the game or by request.",
};

export default function DeleteAccountPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-game text-4xl text-white">DELETE YOUR ACCOUNT</h1>
      <p className="mt-2 text-sm text-text-secondary">
        How to delete your account in Ironsight (Ironsight TD on Google Play) and the data linked to it. Ironsight is
        made by HMT Eskeland, the developer shown as Harald Eskeland on Google Play.
      </p>
      <div className="mt-8 space-y-8 text-sm leading-relaxed text-text-secondary">

        <section>
          <h2 className="font-game text-xl text-white mb-3">In the Game</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Open Ironsight and go to Settings.</li>
            <li>Tap Delete account, then confirm.</li>
          </ol>
          <p className="mt-3">
            The Game erases its data from your device straight away and closes. Our servers delete your account within 24
            hours.
          </p>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">Without the Game</h2>
          <p>
            If you no longer have the Game installed, email{" "}
            <a href="mailto:harald@konturdesign.no?subject=Delete%20my%20Ironsight%20account" className="text-accent-gold hover:underline">harald@konturdesign.no</a>{" "}
            with the subject &quot;Delete my Ironsight account&quot;. Include your player ID (shown in the Game&apos;s
            Settings) or your nickname. We delete the account within 30 days and confirm by email.
          </p>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">What Is Deleted</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Your account and its login, player ID, nickname and profile picture</li>
            <li>Your game progress (the cloud save), clan membership and clan chat messages</li>
            <li>Your duel, tournament and leaderboard entries, duel recordings, referral codes and in-game mail</li>
            <li>Gameplay events and crash reports linked to your player ID</li>
          </ul>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">What Is Kept</h2>
          <p>
            Records of purchases are kept, without your player ID or receipt, where the law requires them for accounting. Data
            held by advertising and analytics providers is kept under their own policies; you can reset your device&apos;s
            advertising ID at any time. See the{" "}
            <Link href="/privacy" className="text-accent-gold hover:underline">Privacy Policy</Link> for more.
          </p>
        </section>

      </div>
    </main>
  );
}
