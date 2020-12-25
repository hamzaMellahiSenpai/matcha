import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import SuggestedPeople from "./SuggestedPeople";

export default function Home() {
  let person = {
    location: "Poland, Warszawa",
    age: "23",
    first_name: "Karina",
    last_name: "Simons",
    isOnline: true,
    intresets:
      "Cinema, dinner with friends, shoes, makeup, shopping, walks on the beach.",
    languages: [
      { name: "English", level: "conversational" },
      { name: "Polish", level: "Native" },
    ],
    distance: "256",
  };
  let user = {
    location: "Poland, Warszawa",
    age: "23",
    first_name1: "Jhoon",
    last_name1: "Sin",
    isOnline: true,
    intresets:
      "Cinema, dinner with friends, shoes, makeup, shopping, walks on the beach.",
    languages: [
      { name: "English", level: "conversational" },
      { name: "Polish", level: "Native" },
    ],
  };
  let {
    location,
    isOnline,
    intresets,
    languages,
    first_name,
    age,
    last_name,
    distance,
  } = person;
  let { first_name1, last_name1 } = user;
  return (
    <div className="bg-gray-200  md:h-screen">
      <Navbar />
      <div className="grid grid-cols-7 container gap-5 py-4 pt-16	w-screen">
        <Sidebar />
        <SuggestedPeople />
      </div>
    </div>
  );
}
