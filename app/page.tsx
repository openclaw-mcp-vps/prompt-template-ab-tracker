export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Prompt Optimization
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          A/B Test AI Prompts<br />
          <span className="text-[#58a6ff]">Across Real Conversations</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Split prompt variants across live user conversations. Track response quality, satisfaction scores, and conversion rates to ship prompts that actually perform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Testing Prompts — $39/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl mx-auto">
          {[
            ["10x", "Faster iteration"],
            ["ML", "Quality scoring"],
            ["Real-time", "Analytics"]
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$39<span className="text-xl text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to optimize AI prompts at scale</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited prompt variants",
              "Webhook & SDK integration",
              "ML-powered quality scoring",
              "Real-time A/B analytics dashboard",
              "User satisfaction tracking",
              "Conversion rate attribution",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            [
              "How does the A/B testing work?",
              "You define prompt variants in the dashboard, then our SDK automatically splits traffic across variants in your users' conversations. We collect response data via webhooks and score quality using ML models."
            ],
            [
              "What AI providers are supported?",
              "PromptAB is provider-agnostic. It works with OpenAI, Anthropic, Cohere, or any LLM API. You integrate our lightweight SDK and we handle the routing and analytics layer."
            ],
            [
              "How is response quality measured?",
              "We use a combination of ML-based semantic scoring, user satisfaction signals (thumbs up/down, session length, follow-up rate), and custom conversion events you define for your product."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} PromptAB. Built for AI product teams.
      </footer>
    </main>
  )
}
