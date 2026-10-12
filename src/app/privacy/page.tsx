import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Ironsight",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-game text-4xl text-white">PRIVACY POLICY</h1>
      <p className="mt-2 text-sm text-text-secondary">Effective: October 12, 2026</p>
      <div className="mt-8 space-y-8 text-sm leading-relaxed text-text-secondary">

        <section>
          <p>
            This policy explains what data Ironsight (the &quot;Game&quot;) collects on iOS and Android, why, who we share it
            with, and how you can delete it. The Game is made by HMT Eskeland (&quot;we&quot;, &quot;us&quot;), which is
            responsible for your data.
          </p>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">1. Your Game Account</h2>
          <p>
            The first time you play, the Game creates an account for your installation automatically, with a random login
            kept on your device. You never give us an email address or a password. Linked to that account we store:
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1">
            <li>A player ID, and the nickname and profile picture you choose</li>
            <li>Your game progress (a cloud save), so it is kept if the app is reinstalled on the same device</li>
            <li>Clan membership and the messages you send in clan chat, which other members of your clan can read</li>
            <li>Duel, tournament and leaderboard results, shown to other players with your nickname</li>
            <li>Recordings of your side of a duel, which may be replayed to other players as a recorded rival</li>
            <li>Referral codes and in-game mail such as gifts and rewards</li>
          </ul>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">2. Purchases</h2>
          <p>
            In-app purchases are processed by the Apple App Store or Google Play. We never see your payment details. We
            receive the purchase receipt, check it with Apple or Google, and record the product and transaction ID with your
            player ID so the purchase is delivered once and can be restored.
          </p>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">3. Device, Analytics and Crash Data</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Device information: model, operating system version, language, app version and a device identifier</li>
            <li>Gameplay events, such as levels started and completed, features used and offers shown, to balance and improve the Game</li>
            <li>Crash reports and performance diagnostics, to find and fix bugs</li>
          </ul>
          <p className="mt-3">
            We use Google Firebase (Analytics and Crashlytics) for this, alongside our own game servers.
          </p>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">4. Advertising and Attribution</h2>
          <p>
            The Game shows ads, including optional rewarded ads, through Unity LevelPlay (ironSource), which works with
            Google AdMob and Unity Ads. To measure where installs come from, we use AppsFlyer. These services may collect:
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1">
            <li>Your device&apos;s advertising ID (the IDFA on iOS, the Google advertising ID on Android)</li>
            <li>Your IP address, and an approximate location derived from it</li>
            <li>Ad interactions such as views, clicks and installs</li>
          </ul>
          <p className="mt-3">
            Ads are personalised only where you allow it. In the EEA, the UK and Switzerland, the Game asks for your consent
            with Google&apos;s consent form before any ads are requested, and you can change your answer at any time under
            Privacy choices in the Game&apos;s Settings. On iOS, the Game asks for permission before using the IDFA, and you
            can change it in Settings &gt; Privacy &amp; Security &gt; Tracking. On Android, you can reset or delete your
            advertising ID in your device&apos;s Settings &gt; Privacy &gt; Ads. Non-personalised ads may still be shown.
          </p>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">5. Who We Share Data With</h2>
          <p>We share data only with the service providers that run the Game, each under its own privacy policy:</p>
          <ul className="mt-3 list-disc list-inside space-y-1">
            <li>Supabase: hosts our game servers and database</li>
            <li>Google Firebase: analytics and crash reports</li>
            <li>Unity LevelPlay (ironSource), Google AdMob and Unity Ads: advertising</li>
            <li>AppsFlyer: install attribution</li>
            <li>Apple and Google: purchases and app distribution</li>
          </ul>
          <p className="mt-3">
            Some of these providers process data outside the EEA. Where they do, they rely on safeguards such as the European
            Commission&apos;s standard contractual clauses. We do not sell your personal data.
          </p>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">6. Notifications</h2>
          <p>
            The Game&apos;s notifications are scheduled on your device, and only if you allow them. We do not collect a push
            token or send notifications from our servers.
          </p>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">7. Children</h2>
          <p>
            Ironsight is for players aged 13 and older, and the Game asks for your age before you play on. We do not knowingly
            collect personal data from children under 13. If you believe a child has given us personal data, contact us and
            we will delete it.
          </p>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">8. How Long We Keep Data</h2>
          <p>
            Account data is kept for as long as your account exists. On our servers, clan chat messages and duel recordings
            are deleted after 30 days, crash reports after 45 days and gameplay events after 90 days. Firebase keeps its
            analytics and crash data for the periods Google sets for it, and advertising data is kept according to the
            policies of the advertising providers.
          </p>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">9. Deleting Your Account and Data</h2>
          <p>
            You can delete your account and the data linked to it at any time, in the Game under Settings &gt; Delete account,
            or by request without the Game. See{" "}
            <Link href="/delete-account" className="text-accent-gold hover:underline">Delete your account</Link> for how,
            and for what is deleted.
          </p>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">10. Security</h2>
          <p>
            Data sent between the Game and our servers is encrypted in transit. Access to our database is limited to what each
            part of the Game needs.
          </p>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">11. Your Rights</h2>
          <p>
            Depending on where you live, you have the right to access, correct or delete your data, to object to or restrict
            its use, and to take it with you. To use any of these rights, email us at the address below. If you are in
            the EEA, you may also complain to your data protection authority; in Norway, that is Datatilsynet.
          </p>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">12. Changes to This Policy</h2>
          <p>
            We may update this policy. When we do, we change the effective date at the top of this page, and we tell you in
            the Game if the change is significant.
          </p>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">13. Contact</h2>
          <p>
            Questions about this policy or your data: email{" "}
            <a href="mailto:harald@konturdesign.no" className="text-accent-gold hover:underline">harald@konturdesign.no</a>.
          </p>
          <p className="mt-3">
            <strong className="text-white">Company:</strong> HMT Eskeland
          </p>
        </section>

      </div>
    </main>
  );
}
