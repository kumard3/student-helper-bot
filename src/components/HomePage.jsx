import { Tab } from "@headlessui/react";
import React from "react";
import WebDevelopment from "./Roadmaps/WebDevelopment";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function HomePage() {
  const basic_styles = `flex items-center justify-center`;
  return (
    <div className="w-full  px-2 py-16 sm:px-0">
      {/* <h1 className="font-bold text-5xl text-center pt-10">
        {" "}
        Student Helper Bot{" "}
      </h1> */}
      {/*  <div className={` ${basic_styles} w-full h-full `}>
        <Link to="/chat-bot">
          <div
            className={`${basic_styles}  w-96 h-40 bg-white m-1  rounded-xl`}
          >
            <button className=" font-bold text-2xl ">GO TO CHATBOT</button>
          </div>
        </Link>
        <Link to="./course-finder">
          <div
            className={` ${basic_styles}  w-96 h-40 bg-white  m-1 rounded-xl`}
          >
            <button className="font-bold text-2xl">GO TO COURSE FINDER</button>
          </div>
        </Link>
      </div> */}
      <Tab.Group>
        <Tab.List className="flex p-1 bg-gray-800 dark:bg-gray-50 text-black space-x-1 bg rounded-xl">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Web Development
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Data Science
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
           Application Development
          </Tab>{" "}
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
           Devops
          </Tab>{" "}
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Machine Learning
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <WebDevelopment />
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default HomePage;
