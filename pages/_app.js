import '../styles/globals.css'
import Navbar from './provider/Navbar'
import { WalletProvider } from './provider/WalletProvider'
import { MetaMaskProvider } from 'metamask-react'
function MyApp({ Component, pageProps }) {

  return (
    <div>
      {/* <Navbar /> */}
      {/* <Component {...pageProps} /> */}
    <MetaMaskProvider>
    <WalletProvider>
          <Navbar />
          <div className="relative min-h-screen">
            <Component {...pageProps} />
          </div>
    </WalletProvider>
    </MetaMaskProvider>
    </div>
  )
}

export default MyApp
