import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-500 p-4 flex justify-between items-center">
      <div className="text-white font-medium">
        <a href="#">Home</a>
        <a href="#" className="ml-4">About Us</a>
      </div>
      <button className="bg-white text-indigo-500 p-2 rounded-lg hover:bg-indigo-500 hover:text-white">
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
