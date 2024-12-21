'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Replace with actual auth logic

  const handleSignOut = () => {
    // Add actual sign-out logic (e.g., API call or next-auth signOut())
    setIsAuthenticated(false);
    router.push('/');
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      <h1 className="text-lg font-bold cursor-pointer" onClick={() => router.push('/')}>
        Amazon Clone
      </h1>
      <div>
        {isAuthenticated ? (
          <button onClick={handleSignOut} className="text-red-500">
            Sign Out
          </button>
        ) : (
          <div className="flex gap-4">
            <button onClick={() => router.push('/auth/login')} className="text-blue-400">
              Sign In
            </button>
            <button onClick={() => router.push('/auth/register')} className="text-blue-400">
              Register
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
