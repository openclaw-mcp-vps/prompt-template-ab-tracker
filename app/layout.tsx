import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PromptAB — A/B Test AI Prompts Across Conversations',
  description: 'Split AI prompt variations across real user conversations, tracking performance metrics like response quality, user satisfaction, and conversion rates.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="59590b6d-bee8-4ef1-a057-d1fa936dfdb8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
