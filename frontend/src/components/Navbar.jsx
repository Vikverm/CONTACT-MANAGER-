import React, {
  useEffect,
  useState,
} from "react";

import {
  Bell,
  Moon,
  Sun,
  Search,
} from "lucide-react";

const Navbar = () => {

  const [darkMode,
    setDarkMode] =
    useState(
      localStorage.getItem(
        "theme"
      ) === "dark"
    );

  useEffect(() => {

    if (
      darkMode
    ) {

      document.documentElement.classList.add(
        "dark"
      );

      document.documentElement.classList.remove(
        "light"
      );

      localStorage.setItem(
        "theme",
        "dark"
      );

    } else {

      document.documentElement.classList.add(
        "light"
      );

      document.documentElement.classList.remove(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "light"
      );
    }

  }, [darkMode]);

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  return (
    <div
      className="
      sticky
      top-0
      z-40
      flex
      items-center
      justify-between
      px-10
      py-5
      bg-transparent
      backdrop-blur-xl
    "
    >

      {/* Left */}
      <div>

        <h1 className="text-5xl font-bold dark:text-white">
          Dashboard
        </h1>

        <p className="text-gray-500 dark:text-gray-300 text-lg">
          Welcome back,
          {" "}
          {user?.name}
        </p>

      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="relative">

          <Search
            className="
            absolute
            left-5
            top-1/2
            -translate-y-1/2
            text-gray-400
          "
            size={22}
          />

          <input
            type="text"
            placeholder="Search contacts..."
            className="
              w-[380px]
              pl-14
              pr-5
              py-5
              rounded-full
              bg-white/60
              dark:bg-white/10
              border
              border-white/20
              outline-none
              text-lg
              dark:text-white
              backdrop-blur-xl
            "
          />

        </div>

        {/* Notification */}
        <button
          className="
          w-16
          h-16
          rounded-full
          glass-card
          flex
          items-center
          justify-center
        "
        >
          <Bell size={26} />
        </button>

        {/* Dark Mode */}
        <button
          onClick={() =>
            setDarkMode(
              !darkMode
            )
          }
          className="
          w-16
          h-16
          rounded-full
          glass-card
          flex
          items-center
          justify-center
        "
        >

          {darkMode ? (
            <Sun size={26} />
          ) : (
            <Moon size={26} />
          )}

        </button>

        {/* Profile */}
        <div
          className="
          w-16
          h-16
          rounded-full
          bg-gradient-to-br
          from-blue-500
          to-purple-600
          flex
          items-center
          justify-center
          text-white
          text-2xl
          font-bold
        "
        >
          {user?.name
            ?.charAt(0)
            ?.toUpperCase()}
        </div>

      </div>

    </div>
  );
};

export default Navbar;