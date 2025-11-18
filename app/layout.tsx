import './globals.css'

export const metadata = {
  title: 'Newbotic - AI Powered Solutions',
  description: '70% Faster, 50% Cheaper AI-powered digital solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
