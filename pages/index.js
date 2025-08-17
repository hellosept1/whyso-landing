import { useEffect, useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [emails, setEmails] = useState([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = JSON.parse(localStorage.getItem('whyso_emails') || '[]')
      setEmails(stored)
    }
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return

    const updated = [...emails, { email, ts: Date.now() }]
    setEmails(updated)
    localStorage.setItem('whyso_emails', JSON.stringify(updated))
    console.log('Captured email', email)
    setSubmitted(true)
  }

  // ... your JSX stays the same
}
