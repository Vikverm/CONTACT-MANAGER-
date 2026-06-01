import React from "react";
import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  Star,
  BarChart3,
  Settings,
} from "lucide-react";

import Navbar from "../components/Navbar";

const DashboardLayout = ({
  children,
}) => {

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <LayoutDashboard size={24} />,
    },
    {
      name: "Contacts",
      path: "/contacts",
      icon: <Users size={24} />,
    },
    {
      name: "Favorites",
      path: "/favorites",
      icon: <Star size={24} />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <BarChart3 size={24} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={24} />,
    },
  ];

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <aside
        className="
          sidebar-premium
          fixed
          left-0
          top-0
          h-screen
          w-[320px]
          px-6
          py-6
          z-50
          flex
          flex-col
          overflow-hidden
        "
      >

        {/* Logo */}
        <div className="mb-8">

          <h1
            className="
              text-[44px]
              font-extrabold
              leading-[0.9]
              tracking-tight
            "
            style={{
              background:
                "linear-gradient(90deg, #60a5fa, #a855f7)",
              WebkitBackgroundClip:
                "text",
              WebkitTextFillColor:
                "transparent",
              textShadow:
                "0 0 20px rgba(96,165,250,0.30)",
            }}
          >
            Contact
            <br />
            Pro
          </h1>

          <p
            className="
              text-lg
              mt-3
              font-medium
            "
            style={{
              color: "#cbd5e1",
            }}
          >
            Manage smarter 🚀
          </p>

        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-4">

          {menuItems.map(
            (item) => (

              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  gap-4
                  px-6
                  py-5
                  rounded-[28px]
                  text-[20px]
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }
                `
                }
              >
                {item.icon}

                <span>
                  {item.name}
                </span>

              </NavLink>
            )
          )}

        </nav>

        {/* Push Premium Card Down */}
        <div className="flex-1" />

        {/* Premium Card */}
        <div className="mt-auto pb-10">

          <div
            className="
              rounded-[28px]
              p-5
              text-center
              bg-gradient-to-br
              from-slate-800
              via-slate-900
              to-black
              border
              border-white/10
              shadow-[0_0_30px_rgba(59,130,246,0.20)]
            "
          >

            <h3 className="text-white text-2xl font-bold">
              Premium Dashboard
            </h3>

            <p className="text-slate-300 mt-2">
              Organize contacts with style ✨
            </p>

          </div>

        </div>

      </aside>

      {/* Main Content */}
      <main
        className="
          flex-1
          ml-[320px]
          min-h-screen
        "
      >

        <Navbar />

        <div className="p-10">
          {children}
        </div>

      </main>

    </div>
  );
};

export default DashboardLayout;