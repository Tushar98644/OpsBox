/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client'
import { BellIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { GoProject } from "react-icons/go";

export const SideNav = () => {
    const [open, setOpen] = useState(true);
    const options = [
        { title: "Notifications", component: <BellIcon className="size-6" /> },
        { title: "Projects", component: <GoProject className="size-6" /> },
        { title: "Settings", component: <FiSettings className="size-6" /> },
    ];

    return (
        <aside
            className="dark col-span-2 fixed h-screen inset-y-0 z-10 flex flex-shrink-0 overflow-hidden bg-white border-r dark:border-indigo-800 dark:bg-darker focus:outline-none"
        >
            <div className="flex flex-col flex-shrink-0 h-full px-2 py-4 border-r dark:border-indigo-800">
                <div className="project-name flex-shrink-0">
                    <a
                        href="#"
                        className="dark inline-block text-xl font-bold tracking-wider text-indigo-700 dark:text-light"
                    >
                        Slate
                    </a>
                </div>

                <div className="utility-options dark flex flex-col items-center justify-center flex-1 space-y-4">
                    {
                        options.map((option, index) => (
                            <button
                                key={index}
                                className="dark flex items-center justify-center w-12 h-12 text-indigo-400 transition-colors duration-200 rounded-full bg-indigo-50 hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-dark focus:outline-none focus:bg-indigo-100 dark:focus:bg-indigo-700 focus:ring-indigo-800"
                            >
                                <span className="sr-only">{option.title}</span>
                                <div className="dark:hover-indigo-400">
                                    {option.component}
                                </div>
                            </button>
                        ))
                    }
                </div>

                <div className="user flex items-center justify-center flex-shrink-0">
                    <div className="" x-data="{ open: false }">
                        <button
                            type="button"
                            aria-haspopup="true"
                            className="block transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100"
                        >
                            <span className="sr-only">User menu</span>
                            <img
                                className="w-10 h-10 rounded-full"
                                src="https://avatars.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                                alt="Ahmed Kamel"
                            />
                        </button>

                        <div
                            className="absolute w-56 py-1 mb-4 bg-white rounded-md shadow-lg min-w-max left-5 bottom-full ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none"
                            tabIndex={-1}
                            role="menu"
                            aria-orientation="vertical"
                            aria-label="User menu"
                        >
                            <a
                                href="#"
                                role="menuitem"
                                className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-indigo-600"
                            >
                                Your Profile
                            </a>
                            <a
                                href="#"
                                role="menuitem"
                                className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-indigo-600"
                            >
                                Settings
                            </a>
                            <a
                                href="#"
                                role="menuitem"
                                className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-indigo-600"
                            >
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};