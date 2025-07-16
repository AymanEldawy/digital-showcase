'use client';
import { useState } from "react";

const LeftMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div role="button" tabIndex={0} className="flex items-center duration-150 justify-between p-1 bg-gray-200 shadow-md" onClick={() => setIsLoggedIn(!isLoggedIn) }>
      {/* signed user ? info : CTA login  */}
      {isLoggedIn ? 'info' : 'CTA login' }
    </div>
  )
}

export default LeftMenu