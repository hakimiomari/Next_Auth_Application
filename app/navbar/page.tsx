"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AppContext } from "../context/store";

const Navbar = () => {
  const { isAuth, isLoading } = useContext(AppContext);
  const router = useRouter();

  const handleRoute = (event: any, route: string) => {
    event.preventDefault();
    router.push(route);
  };
  
  return (
    <div className="py-3 px-6">
      <ul className="flex justify-end gap-4">
        <li
          onClick={(event) => handleRoute(event, "/auth/login")}
          className="hover:text-blue-500 cursor-pointer"
        >
          Sign up
        </li>

          <li
            onClick={(event) => handleRoute(event, "/auth/login")}
            className="hover:text-blue-500 cursor-pointer"
          >
            Sign in
          </li>
      </ul>
    </div>
  );
};

export default Navbar;
