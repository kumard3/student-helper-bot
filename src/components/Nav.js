import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const basic_styles = `flex items-center justify-center`;

  return (
    <div className=" w-[100vw] h-[12vh] flex items-center justify-evenly">
      <Link to='/'>
        <h1 className="font-bold sm:text-3xl text-center ">
          {" "}
          Student Helper Bot
        </h1>
      </Link>
      <div className={` ${basic_styles} flex justify-around w-[40vw] `}>
        <Link to="/chat-bot">
          <button className=" font-bold sm:text-xl  ">Resume Builder</button>
        </Link>
        <Link to="/community">
          <button className="font-bold sm:text-xl">Community</button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
