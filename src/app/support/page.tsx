import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Support — Ironsight",
};

const faqs = [
  {
    q: "How do I restore my purchases?",
    a: "Go to Settings in the game and tap 'Restore Purchases'. Make sure you're signed in with the same Apple ID you used to make the purchase.",
  },
  {
    q: "The game is crashing on startup",
    a: "Try force-closing the app and reopening it. If the issue persists, restart your device or reinstall the game. Your progress is saved automatically.",
  },
  {
    q: "How do I get more gems?",
    a: "Gems can be earned by completing levels, daily quests, weekly challenges, the Battle Pass, and through in-app purchases in the Shop.",
  },
  {
    q: "Can I play offline?",
    a: "Yes, Ironsight can be played fully offline. Some features like the leaderboard and clan chat require an internet connection.",
  },
  {
    q: "How do I change my character?",
    a: "Visit the Shop in the hub world and go to the Skins tab. You can browse and equip any character you've unlocked.",
  },
];

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-game text-4xl text-white">SUPPORT</h1>
      <p className="mt-2 text-text-secondary">Need help? Send us a message and we will get back to you.</p>
      <div className="mt-10">
        <ContactForm />
      </div>
      <div className="mt-16">
        <h2 className="font-game text-2xl text-white">FAQ</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-white/5 bg-card p-5">
              <h3 className="font-game text-base text-white">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
