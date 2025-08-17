```js
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    // Simple local capture (for MVP). Replace with Mailchimp/Formspree/Supabase later.
    const prev = JSON.parse(localStorage.getItem('whyso_emails') || '[]')
    prev.push({ email, ts: Date.now() })
    localStorage.setItem('whyso_emails', JSON.stringify(prev))
    console.log('Captured email', email)
    setSubmitted(true)
  }

  return (
    <>
      <Head>
        <title>WhySo — Justify Your Move</title>
        <meta name="description" content="WhySo: explain your chess move. Share, learn, and grow." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center px-6">
        <section className="max-w-4xl w-full text-center">
          <div className="mx-auto mb-8 w-24 h-24 rounded-full bg-gradient-to-tr from-yellow-400 to-green-400 flex items-center justify-center hero-knight">
            {/* Simple knight SVG */}
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 3c0 2 2 4 4 4s4 2 4 4-1 3-3 3H7v4h10v-2" stroke="#0b1222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">A Move That <span className="text-yellow-400">Changes</span> The Game</h1>
          <p className="text-gray-300 text-lg md:text-xl mb-6">Strategy. Choice. Consequence. Explain your move — and learn the why behind it.</p>

          <div className="bg-gray-800/60 border border-gray-700 shadow-lg rounded-lg p-6 max-w-md mx-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-md bg-gray-900 border border-gray-700 px-3 py-2 text-white"
                />
                <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md">Stay in the Game</button>
              </form>
            ) : (
              <div className="text-green-300">Thanks — we saved your email. You’ll hear from us soon.</div>
            )}

            <div className="mt-4 text-sm text-gray-400">By signing up you agree to get occasional updates about the platform.</div>
          </div>

          <div className="mt-10 text-gray-400 text-sm">
            <strong>Hint:</strong> Look closely at the background. Some squares tell a story for those who know how to read them.
          </div>
        </section>

        <footer className="mt-12 text-gray-500 text-sm">© {new Date().getFullYear()} WhySo · For whosoever wonders.</footer>
      </main>
    </>
  )
}
```
