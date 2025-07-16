"use client";
import Link from "next/link";
import { useState } from "react";
import HeartIcon from "../icons/HeartIcon";
import LogoutIcon from "../icons/LogoutIcon";
import SettingOutlineIcon from "../icons/SettingOutlineIcon";
import UserOutlineIcon from "../icons/UserOutlineIcon";

const LeftMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? (
        <ul className="flex space-x-2">
          <li className="p-2 hover:bg-gray-300 cursor-pointer rounded-full flex items-center justify-center shadow">
            <Link href="/profile">
              <UserOutlineIcon />
            </Link>
          </li>
          <li className="p-2 hover:bg-gray-300 cursor-pointer rounded-full flex items-center justify-center shadow">
            <Link href="/favorites">
              <HeartIcon />
            </Link>
          </li>
          <li className="p-2 hover:bg-gray-300 cursor-pointer rounded-full flex items-center justify-center shadow">
            <Link href="/settings">
              <SettingOutlineIcon />
            </Link>
          </li>
          <li className="border bg-red-100 border-red-200 text-red-500 hover:bg-red-500 hover:text-white rounded-full flex items-center justify-center">
            <button
              onClick={() => setIsLoggedIn(false)}
              className="p-2 flex items-center justify-center"
            >
              <LogoutIcon />
            </button>
          </li>
        </ul>
      ) : (
        <div className="flex space-x-2">
          <button
            className="py-1 px-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
          <button
            className="ml-2 py-1 px-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            onClick={() => setIsLoggedIn(true)}
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default LeftMenu;
