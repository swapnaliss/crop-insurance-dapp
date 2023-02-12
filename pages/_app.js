import '../styles/globals.css'
import Navbar from './provider/Navbar'
import { WalletProvider } from './provider/WalletProvider'
import { MetaMaskProvider } from 'metamask-react'
import UserProvider from './provider/UserProvider'
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}

export default MyApp
