import React, { useEffect, useState } from 'react';
import { useWalletContext } from './WalletProvider'
import { useUserContext } from './UserProvider'
import { useRouter } from 'next/router';

const Navbar = () => {
  const { metaMask, connectToMetaMask } = useWalletContext();
  const { handleLogout, user } = useUserContext();
  const [displayedUser, setDisplayedUser] = useState(user);
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    setDisplayedUser(user);
  }, [user]);

  if (pathname === '/login') {
    return null;
  }
  return (
    <nav className="bg-indigo-500 p-4 flex justify-between items-center">
      <div className="text-white font-medium">
        <a href="#">Home</a>
        <a href="#" className="ml-4">About Us</a>
      </div>
      <div>
        <span className="text-sm font-medium mr-2">Welcome {displayedUser && displayedUser.username}</span>

        {user ?
          <button className="bg-white text-indigo-500 p-2 rounded-lg hover:bg-indigo-500 hover:text-white" onClick={handleLogout}>
            Logout
          </button>
          :
          <>
            <button className="bg-white text-indigo-500 p-2 rounded-lg hover:bg-indigo-500 hover:text-white" onClick={() => router.push("/Login")}>
              Login
            </button>

            <button className="bg-white text-indigo-500 p-2 rounded-lg hover:bg-indigo-500 hover:text-white ml-4 mr-4"  onClick={() => router.push("/SignUp")}>
              Sign UP
            </button>
          </>
        }
        <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600" onClick={connectToMetaMask}>
          {metaMask.isConnected ? "Wallet connected" : "Connect wallet"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
