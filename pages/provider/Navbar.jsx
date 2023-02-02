import React from 'react';
import { useWalletContext } from './WalletProvider'


const Navbar = () => {
  const { metaMask, connectToMetaMask } = useWalletContext();

  return (
    <nav className="bg-indigo-500 p-4 flex justify-between items-center">
      <div className="text-white font-medium">
        <a href="#">Home</a>
        <a href="#" className="ml-4">About Us</a>
      </div>

      <button className="bg-white text-indigo-500 p-2 rounded-lg hover:bg-indigo-500 hover:text-white">
        Logout
      </button>

      <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600" onClick={connectToMetaMask}>
        {metaMask.isConnected ? "Wallet connected" : "Connect wallet"}
      </button>
    </nav>
  );
}

export default Navbar;
