import { Tab } from "@headlessui/react";
import React from "react";
import { Link } from "react-router-dom";
import WebDevelopment from "./Roadmaps/WebDevelopment";
function HomePage() {
  const basic_styles = `flex items-center justify-center`;
  return (
    <div className="">
      {/* <h1 className="font-bold text-5xl mt-10"> Student Helper Bot </h1>
      <div className={` ${basic_styles} w-full h-full `}>
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
        <Tab.List>
          <Tab>Web Development</Tab>
          <Tab>Data Science</Tab>
          <Tab>Machine Learning</Tab>
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
