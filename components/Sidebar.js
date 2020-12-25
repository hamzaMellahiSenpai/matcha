import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import NotificationDropdown from "./NotificationDropdown.js";
import UserDropdown from "./UserDropdown.js";

export default function Sidebar() {
  const router = useRouter();
  //#161e2e
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  let tabs = [
    { name: "Dashboard", icon: "fa-home", path: "/admin" },
    { name: "Users", icon: "fa-users", path: "/admin/users" },
    { name: "Profile", icon: "fa-user", path: "/admin/profile" },
  ];
  return (
    <>
      <nav
        style={{ background: "#242f3f" }}
        className="text-white md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl  flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
      >
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <img
            className=" rounded-full h-32 w-32 my-2 text-center mx-auto"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
          {/* <h2 className="text-center"> Katarinaa lolila</h2> */}
          <h2 className="text-center text-bold text-2xl">
            Katarinaa lolila
            <button
              type="button"
              className="mt-5 p-2 rounded w-full	bg-pink-main text-white hover:border-none"
            >
              <Link
                className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0 font-2xl"
                href="/admin/profile"
              >
                View Profile
              </Link>
            </button>
          </h2>
          {/* Divider
          <hr className="my-4 md:min-w-full" />
          {/* Heading */}
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
                    href="/"
                  >
                    Tailwind Starter Kit
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 h-12 border border-solid  border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none ">
              {tabs.map((tab) => (
                <li
                  className={router.pathname == tab.path ? " p-3" : "p-3"}
                  style={{
                    background: router.pathname == tab.path ? "#161e2e" : "",
                  }}
                >
                  <i class={"fas pr-3 " + tab.icon}></i>
                  <Link
                    className="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
                    href={tab.path}
                  >
                    {/* <i class={"fas " + tab.icon}></i> */}
                    {tab.name}

                    {/* <>Login<i className="fas fa-fingerprint text-gray-500 mr-2 text-sm"></i></> */}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
