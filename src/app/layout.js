import './globals.css'

export const metadata = {
  title: 'insta_frontend',
  description: 'insta_frontend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
