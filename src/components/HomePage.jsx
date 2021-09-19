

import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
  const basic_styles = `flex items-center justify-center`;
  return (
    <div className={` ${basic_styles} w-full  flex-col h-screen  `}>
      <h1 className="font-bold text-5xl mt-10"> Student Helper Bot </h1>
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
      </div>
    </div>
  );
}

export default HomePage;
