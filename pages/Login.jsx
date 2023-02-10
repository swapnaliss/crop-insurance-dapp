import React, { useState , useEffect} from 'react';
import { useRouter } from 'next/router';
import { useUserContext } from './provider/UserProvider'

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { login } = useUserContext();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await fetch('http://localhost:3000/api/signUp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      console.log(response)
      if (response.ok) {
        console.log("Login Successful")
        const userData = await response.json()
        login(userData);
        setError(false)
        router.push('/');
      }
      else {
        console.log("Not Logged in")
        setError(true)
      }

    } catch (error) {
      console.error(error);
      setError('An error occurred. Please try again later.');
    }
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('insurance-login'));
    if (userData) {
        router.push('/');
    }
}, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md w-full sm:w-1/3">
        <h2 className="text-lg font-medium mb-4">Login</h2>
        <div className="mb-4">
          <label
            className="block font-medium mb-2 text-gray-700"
            htmlFor="username">
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
            htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded-lg"/>
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600" >
          Submit
        </button>
        {error && <p className="text-red-600">User not found</p>}
      </form>
    </div>
  );
}

export default LoginForm;
