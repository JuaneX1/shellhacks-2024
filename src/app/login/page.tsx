"use client"; // Add this to make it a Client Component
import React from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push('/register');
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account?</p>
      <button onClick={handleRegisterClick}>Create an Account</button>
    </div>
  );
};

export default LoginPage;
