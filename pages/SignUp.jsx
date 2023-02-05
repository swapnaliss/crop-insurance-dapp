import React, { useState } from 'react';
import { useRouter } from 'next/router';

function SignUpForm() {
 const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password ,role : "farmer"})
      });
    
      if (response.ok) {
        console.log("sign up Successful")
        const userData = await response.json()
        router.push('/Login');
      }
      else {
        console.log("Not Logged in")
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md w-full sm:w-1/3">
      <h2 className="text-lg font-medium mb-4">Sign Up </h2>
      <div className="mb-4">
        <label
          className="block font-medium mb-2 text-gray-700"
          htmlFor="username"
        >
          Username
        </label>
        <input
          type="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-400 p-2 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label
          className="block font-medium mb-2 text-gray-700"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-400 p-2 rounded-lg"
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600"
      >
        Submit
      </button>
      
    </form>
  </div>
  );
}

export default SignUpForm;