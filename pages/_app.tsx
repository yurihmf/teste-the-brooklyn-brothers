import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen relative">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
