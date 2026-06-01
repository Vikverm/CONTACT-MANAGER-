import React, {
    useEffect,
    useState,
} from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import API from "../services/api";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
} from "recharts";

import toast from "react-hot-toast";

const Analytics = () => {

    const [contacts,
        setContacts] =
        useState([]);

    const token =
        localStorage.getItem(
            "token"
        );

    const fetchContacts =
        async () => {
            try {

                const res =
                    await API.get(
                        "/contacts",
                        {
                            headers: {
                                Authorization:
                                    `Bearer ${token}`,
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

                toast.error(
                    "Failed to load analytics"
                );
            }
        };

    useEffect(() => {
        fetchContacts();
        // eslint-disable-next-line
    }, []);

    // Stats
    const totalContacts =
        contacts.length;

    const favoriteContacts =
        contacts.filter(
            (
                contact
            ) =>
                contact.favorite
        ).length;

    const businessContacts =
        contacts.filter(
            (
                contact
            ) =>
                contact.category ===
                "Business"
        ).length;

    const familyContacts =
        contacts.filter(
            (
                contact
            ) =>
                contact.category ===
                "Family"
        ).length;

    const friendsContacts =
        contacts.filter(
            (
                contact
            ) =>
                contact.category ===
                "Friends"
        ).length;

    // Pie chart
    const pieData = [
        {
            name:
                "Friends",
            value:
                friendsContacts,
        },
        {
            name:
                "Family",
            value:
                familyContacts,
        },
        {
            name:
                "Business",
            value:
                businessContacts,
        },
    ];

    // Bar chart
    const barData = [
        {
            name:
                "Contacts",
            Total:
                totalContacts,
            Favorites:
                favoriteContacts,
        },
    ];

    const COLORS = [
        "#2563eb",
        "#22c55e",
        "#f59e0b",
    ];

    return (
        <DashboardLayout>

            <div className="space-y-8">

                <h1 className="text-5xl font-bold dark:text-white">
                    Analytics 📊
                </h1>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-[30px] shadow-sm">
                        <p className="text-gray-500 dark:text-gray-300">
                            Total Contacts
                        </p>

                        <h2 className="text-5xl font-bold dark:text-white mt-3">
                            {
                                totalContacts
                            }
                        </h2>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-[30px] shadow-sm">
                        <p className="text-gray-500 dark:text-gray-300">
                            Favorites
                        </p>

                        <h2 className="text-5xl font-bold dark:text-white mt-3">
                            {
                                favoriteContacts
                            }
                        </h2>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-[30px] shadow-sm">
                        <p className="text-gray-500 dark:text-gray-300">
                            Business
                        </p>

                        <h2 className="text-5xl font-bold dark:text-white mt-3">
                            {
                                businessContacts
                            }
                        </h2>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-[30px] shadow-sm">
                        <p className="text-gray-500 dark:text-gray-300">
                            Family
                        </p>

                        <h2 className="text-5xl font-bold dark:text-white mt-3">
                            {
                                familyContacts
                            }
                        </h2>
                    </div>

                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Pie */}
                    <div className="bg-white dark:bg-slate-800 rounded-[30px] p-6 shadow-sm">

                        <h2 className="text-2xl font-bold mb-5 dark:text-white">
                            Contact Categories
                        </h2>

                        <ResponsiveContainer
                            width="100%"
                            height={350}
                        >
                            <PieChart>

                                <Pie
                                    data={
                                        pieData
                                    }
                                    dataKey="value"
                                    outerRadius={
                                        120
                                    }
                                    label
                                >

                                    {pieData.map(
                                        (
                                            entry,
                                            index
                                        ) => (
                                            <Cell
                                                key={
                                                    index
                                                }
                                                fill={
                                                    COLORS[
                                                    index
                                                    ]
                                                }
                                            />
                                        )
                                    )}

                                </Pie>

                                <Tooltip />

                            </PieChart>
                        </ResponsiveContainer>

                    </div>

                    {/* Bar */}
                    <div className="bg-white dark:bg-slate-800 rounded-[30px] p-6 shadow-sm">

                        <h2 className="text-2xl font-bold mb-5 dark:text-white">
                            Contacts Overview
                        </h2>

                        <ResponsiveContainer
                            width="100%"
                            height={350}
                        >

                            <BarChart
                                data={
                                    barData
                                }
                            >
                                <CartesianGrid strokeDasharray="3 3" />

                                <XAxis dataKey="name" />

                                <YAxis />

                                <Tooltip />

                                <Legend />

                                <Bar
                                    dataKey="Total"
                                    fill="#2563eb"
                                />

                                <Bar
                                    dataKey="Favorites"
                                    fill="#22c55e"
                                />

                            </BarChart>

                        </ResponsiveContainer>

                    </div>

                </div>

            </div>

        </DashboardLayout>
    );
};

export default Analytics;