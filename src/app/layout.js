import './globals.css'
import ReduxProvider from './store/provider'
export const metadata = {
  title: 'insta_frontend',
  description: 'insta_frontend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
