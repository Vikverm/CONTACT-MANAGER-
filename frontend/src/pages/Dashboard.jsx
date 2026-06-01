import React, {
  useEffect,
  useState,
} from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const Dashboard = () => {

  const [contacts,
    setContacts] =
    useState([]);

  const navigate =
    useNavigate();

  const token =
    localStorage.getItem(
      "token"
    );

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const darkMode =
    document.documentElement.classList.contains(
      "dark"
    );

  useEffect(() => {

    const fetchContacts =
      async () => {

        try {

          const res =
            await API.get(
              "/contacts",
              {
                headers: {
                  Authorization:
                    "Bearer " +
                    token,
                },
              }
            );

          setContacts(
            res.data
          );

        } catch (
          error
        ) {

          console.log(
            error
          );

        }
      };

    fetchContacts();

  }, [token]);

  // Stats
  const totalContacts =
    contacts.length;

  const favoriteContacts =
    contacts.filter(
      (c) =>
        c.favorite
    ).length;

  const businessContacts =
    contacts.filter(
      (c) =>
        c.category ===
        "Business"
    ).length;

  const familyContacts =
    contacts.filter(
      (c) =>
        c.category ===
        "Family"
    ).length;

  const chartData = [
    {
      name:
        "Contacts",
      value:
        totalContacts,
    },
    {
      name:
        "Favorites",
      value:
        favoriteContacts,
    },
    {
      name:
        "Business",
      value:
        businessContacts,
    },
    {
      name:
        "Family",
      value:
        familyContacts,
    },
  ];

  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* Hero */}
        <div className="glass-card p-10 rounded-[35px]">

          <h1 className="text-5xl font-bold">
            Welcome Back,
            {" "}
            {user?.name}
            👋
          </h1>

          <p className="text-gray-500 mt-3">
            Manage your contacts professionally.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">

            <button
              onClick={() =>
                navigate(
                  "/contacts"
                )
              }
              className="premium-btn px-6 py-4 rounded-2xl font-semibold"
            >
              ➕ Add Contact
            </button>

            <button
              onClick={() =>
                navigate(
                  "/analytics"
                )
              }
              className="premium-btn px-6 py-4 rounded-2xl font-semibold"
            >
              📊 Analytics
            </button>

            <button
              onClick={() =>
                navigate(
                  "/profile"
                )
              }
              className="premium-btn px-6 py-4 rounded-2xl font-semibold"
            >
              👤 Profile
            </button>

          </div>

        </div>

        {/* Chart */}
        <div className="glass-card p-8 rounded-[30px]">

          <h2 className="text-3xl font-bold mb-8">
            Real Time Growth Preview
          </h2>

          <ResponsiveContainer
            width="100%"
            height={350}
          >

            <BarChart
              data={chartData}
            >

              <defs>

                <linearGradient
                  id="barGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="0%"
                    stopColor="#06b6d4"
                  />

                  <stop
                    offset="100%"
                    stopColor="#2563eb"
                  />

                </linearGradient>

              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                opacity={0.1}
              />

              <XAxis
                dataKey="name"
                tick={{
                  fill:
                    darkMode
                      ? "#ffffff"
                      : "#000000",

                  fontSize: 15,
                  fontWeight: 700,
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{
                  fill:
                    darkMode
                      ? "#ffffff"
                      : "#000000",

                  fontWeight: 700,
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                contentStyle={{
                  background:
                    darkMode
                      ? "#0f172a"
                      : "#ffffff",

                  border:
                    "none",

                  borderRadius:
                    "20px",

                  color:
                    darkMode
                      ? "#fff"
                      : "#000",
                }}
              />

              <Bar
                dataKey="value"
                fill="url(#barGradient)"
                radius={[
                  24,
                  24,
                  0,
                  0,
                ]}
                animationDuration={
                  1200
                }

                label={{
                  position:
                    "top",

                  fill:
                    darkMode
                      ? "#ffffff"
                      : "#000000",

                  fontWeight:
                    800,

                  fontSize:
                    18,
                }}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="glass-card p-8 rounded-[30px]">
            <h3 className="text-lg">
              Total Contacts
            </h3>

            <h2 className="text-5xl font-bold mt-4">
              {totalContacts}
            </h2>
          </div>

          <div className="glass-card p-8 rounded-[30px]">
            <h3 className="text-lg">
              Favorites
            </h3>

            <h2 className="text-5xl font-bold mt-4">
              {favoriteContacts}
            </h2>
          </div>

          <div className="glass-card p-8 rounded-[30px]">
            <h3 className="text-lg">
              Business
            </h3>

            <h2 className="text-5xl font-bold mt-4">
              {businessContacts}
            </h2>
          </div>

          <div className="glass-card p-8 rounded-[30px]">
            <h3 className="text-lg">
              Family
            </h3>

            <h2 className="text-5xl font-bold mt-4">
              {familyContacts}
            </h2>
          </div>

        </div>

      </div>

    </DashboardLayout>
  );
};

export default Dashboard;