import GrammarDemo from '@/components/GrammarDemo'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className="text-xl font-bold text-primary">Orazen Grammar</span>
          <a
            href="https://orazen.online"
            className="text-sm text-gray-600 hover:text-primary transition-colors"
          >
            &larr; Back to Orazen
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Grammar checking that never
          <br />
          <span className="text-primary">leaves your browser</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Try it below &mdash; everything you type is checked entirely on your device.
          Nothing is sent to a server, ever.
        </p>
      </section>

      {/* Live demo */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <GrammarDemo />
      </section>

      {/* Why */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-100">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold text-lg mb-2">Actually private</h3>
            <p className="text-gray-600 text-sm">
              Grammarly sends everything you write to its servers. Orazen Grammar runs the
              entire check in your browser &mdash; your text never leaves your device.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Fast</h3>
            <p className="text-gray-600 text-sm">
              No network round-trip, no multi-second wait. Suggestions appear as you type.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Deployable for your team</h3>
            <p className="text-gray-600 text-sm">
              Orazen packages, brands, and supports this for clients who want an in-house
              writing assistant without sending company data to a third party.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want this deployed for your team?
          </h2>
          <p className="text-gray-300 mb-8">
            Orazen can set up a customized, self-hosted deployment as part of your
            AI Automation &amp; Digital Systems package.
          </p>
          <a
            href="https://orazen.online"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
          >
            Talk to Orazen
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-400">
        <p>
          Built on the open-source{' '}
          <a
            href="https://github.com/automattic/harper"
            className="underline hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Harper
          </a>{' '}
          engine (Apache-2.0). Packaged and supported by Orazen.
        </p>
      </footer>
    </main>
  )
}
