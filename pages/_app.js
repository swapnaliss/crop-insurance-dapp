import '../styles/globals.css'
import Navbar from './provider/Navbar'
import { WalletProvider } from './provider/WalletProvider'
import { MetaMaskProvider } from 'metamask-react'
import UserProvider from './provider/UserProvider'
function MyApp({ Component, pageProps }) {

  return (
    <div>
      <MetaMaskProvider>
        <WalletProvider>
          <UserProvider>
            <Navbar />
            <div className="relative min-h-screen">
              <Component {...pageProps} />
            </div>
          </UserProvider>
        </WalletProvider>
      </MetaMaskProvider>
    </div>
  )
}

export default MyApp
