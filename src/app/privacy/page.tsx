export const metadata = {
  title: "Privacy Policy — Ironsight",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-game text-4xl text-white">PRIVACY POLICY</h1>
      <p className="mt-2 text-sm text-text-secondary">Effective: April 8, 2026</p>
      <div className="mt-8 space-y-8 text-sm leading-relaxed text-text-secondary">

        <section>
          <h2 className="font-game text-xl text-white mb-3">1. Information We Collect</h2>
          <p>
            Ironsight is designed to be played without creating an account. We collect limited data to operate and improve the game:
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1">
            <li>Gameplay data such as levels completed, wave progress, and in-game actions</li>
            <li>Device information including device model, operating system version, and language settings</li>
            <li>Crash reports and performance diagnostics to fix bugs and improve stability</li>
            <li>In-app purchase receipts validated by Apple (we do not receive your payment details)</li>
          </ul>
          <p className="mt-3">
            We do not require you to create an account, provide your name, or share any contact information to play Ironsight.
          </p>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">2. Advertising</h2>
          <p>
            Ironsight shows optional rewarded advertisements provided by third-party ad networks, including IronSource/LevelPlay and Unity Ads. These networks may collect and use certain identifiers to serve relevant ads:
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1">
            <li>Advertising identifier (IDFA on iOS) — used with your permission to personalise ads</li>
            <li>IP address and general location data used for regional ad targeting</li>
            <li>Ad interaction data such as views and clicks</li>
          </ul>
          <p className="mt-3">
            On iOS, we request your App Tracking Transparency (ATT) permission before accessing the IDFA. You can opt out of personalised advertising at any time via Settings &gt; Privacy &amp; Security &gt; Tracking on your device. Non-personalised ads will still be shown.
          </p>
          <p className="mt-3">
            Third-party ad networks are governed by their own privacy policies. We encourage you to review them:
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1">
            <li>IronSource: <span className="text-accent-gold">ironsrc.com/privacy-policy</span></li>
            <li>Unity Ads: <span className="text-accent-gold">unity.com/legal/privacy-policy</span></li>
          </ul>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">3. Analytics</h2>
          <p>
            We collect anonymous gameplay analytics to understand how the game is played and to balance difficulty, features, and content. Analytics data cannot be used to identify you personally. It includes events such as level start/complete, wave reached, and feature usage counts. Analytics are retained for 12 months and then deleted.
          </p>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">4. In-App Purchases</h2>
          <p>
            All in-app purchases are processed by Apple through the App Store. We do not collect, store, or have access to your payment card details or billing information. Purchase receipts are validated server-side to unlock content, but no financial data is retained on our end.
          </p>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">5. Children&apos;s Privacy</h2>
          <p>
            Ironsight is rated 9+ on the App Store. We do not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at the address below and we will delete it promptly. We comply with the Children&apos;s Online Privacy Protection Act (COPPA).
          </p>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">6. Data Retention</h2>
          <p>
            Anonymous analytics data is retained for 12 months. Advertising data is retained per the policies of the respective third-party ad networks. Crash and diagnostic data is retained for up to 90 days. We do not retain any data beyond what is necessary for the stated purposes.
          </p>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">7. Your Rights</h2>
          <p>
            You have the right to request deletion of any data associated with your device. To submit a deletion request, contact us via our <span className="text-accent-gold">Support page</span>. We will process your request within 30 days. Note that anonymous, aggregated analytics data cannot be attributed to a specific user and cannot be individually deleted.
          </p>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise the effective date at the top of this page. If changes are material, we may notify you within the app. Continued use of Ironsight after changes are posted constitutes your acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="font-game text-xl text-white mb-3">9. Contact</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us via the <span className="text-accent-gold">Support page</span> on this website.
          </p>
          <p className="mt-3">
            <strong className="text-white">Company:</strong> HMT Eskeland
          </p>
        </section>

      </div>
    </main>
  );
}
