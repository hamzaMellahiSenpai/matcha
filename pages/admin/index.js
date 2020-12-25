import React from "react";

import Navbar from "../../components/Navbar.js";
import Sidebar from "../../components/Sidebar.js";
import LineChart from "../../components/LineChart.js";
import BarChart from "../../components/BarChart.js";
import Card from "../../components/Card/Card";
import Table from "../../components/Table/Table";
import Footer from "../../components/footer/footer";


import Link from "next/link";

export default function Dashboard() {
  let states = [
    {
      name: "Traffic",
      count: "350,897",
      icon: "far fa-chart-bar",
      rise: { state: "3.48%", since: "last week" },
    },
    {
      name: "Users",
      count: "350",
      icon: "far fa-users",
      rise: { state: "3.48%", since: "last week" },
    },
    {
      name: "Pre Users",
      count: "100",
      icon: "far fa-chart-bar",
      rise: { state: "3.48%", since: "last week" },
    },
    {
      name: " Performance",
      count: "49,65%",
      icon: "fas fa-percent",
      rise: { state: "12%", since: "last week" },
    },
  ];
  let tableData = {
    title: "Users",
    moreBtnLink: "/admin/users",
    cols: [
      //   {
      //     Id: "45545445",
      //     isPro: true,
      //     location: "Poland, Warszawa",
      //     age: "23",
      //     first_name: "Karina",
      //     last_name: "Simons",
      //     isOnline: true,
      //     intresets:
      //       "Cinema, dinner with friends, shoes, makeup, shopping, walks on the beach.",
      //     languages: [
      //       { name: "English", level: "conversational" },
      //       { name: "Polish", level: "Native" },
      //     ],
      //     distance: "256",
      //   },
      { name: "Id", label: "ID", type: "text" },
      { name: "full_name", label: "full name", type: "text" },
      { name: "location", label: "location", type: "text" },
      { name: "age", label: "age", type: "text" },
      { name: "isPro", label: "isPremuim", type: "bool" },
    ],
    rows: [
      {
        Id: "45545445",
        full_name: "Karina",
        location: "Poland, Warszawa",
        age: "23",
        isPro: false,
        last_name: "Simons",
      },
      {
        Id: "45545445",
        full_name: "Karina",
        location: "Poland, Warszawa",
        age: "23",
        isPro: true,
        last_name: "Simons",
      },
      {
        Id: "45545445",
        full_name: "Karina",
        location: "Poland, Warszawa",
        age: "23",
        isPro: true,
        last_name: "Simons",
      },
      {
        Id: "45545445",
        full_name: "Karina",
        location: "Poland, Warszawa",
        age: "23",
        isPro: true,
        last_name: "Simons",
      },
      {
        Id: "45545445",
        full_name: "Karina",
        location: "Poland, Warszawa",
        age: "23",
        isPro: true,
        last_name: "Simons",
      },
    ],
  };
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-200 h-screen">
        <Navbar />
        {/* Header */}
        <div className="relative bg-pink-600 md:pt-32 pb-32 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            <div>
              {/* Card stats */}
              <div className="flex flex-wrap">
                {states.map((state) => (
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <Card state={state} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap mt-4">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <Table data={tableData} />
            </div>
            <div className="w-full xl:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-base text-gray-800">
                        Social traffic
                      </h3>
                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                      <Link href="/admin/users">
                        <button
                          className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          See alls
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  {/* Projects table */}
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead className="thead-light">
                      <tr>
                        <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                          Referral
                        </th>
                        <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                          Visitors
                        </th>
                        <th
                          className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                          style={{ minWidth: "140px" }}
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                          Facebook
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                          1,480
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">60%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                <div
                                  style={{ width: "60%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                          Facebook
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                          5,480
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">70%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                                <div
                                  style={{ width: "70%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                          Google
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                          4,807
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">80%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                                <div
                                  style={{ width: "80%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                          Instagram
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                          3,678
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">75%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                <div
                                  style={{ width: "75%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                          twitter
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                          2,645
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">30%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-orange-200">
                                <div
                                  style={{ width: "30%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
