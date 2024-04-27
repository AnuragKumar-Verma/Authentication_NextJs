"use client";
import Navbar from "@/components/Navbar.js";
import UserInfo from "@/components/UserInfo";


import { SessionProvider } from "next-auth/react";

export const AuthProvider = ({ children }) => {
  return <SessionProvider>
        <UserInfo/>
    {children}
  </SessionProvider>;
};