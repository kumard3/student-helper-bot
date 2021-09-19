import React from "react";

function Addpost({
  inputMessage,
  setInputMessage,
  handleProfileUpload,
  profileImageUpload,
  profileImageUrl,
  messages,
  sendMessage,
  profileImageUploadProgress
}) {
  return (
    <div className="">
      <div className="flex flex-col w-screen p-[2%] justify-center">
        <input
          className=" relative z-[1] w-full h-[42px] pl-[7px] rounded-[10px] left-[10px] focus:outline-none "
          type="text"
          value={inputMessage}
          placeholder="Enter Your Message Here"
          onChange={(e) => setInputMessage(e.target.value)}
        />

        <input
          onChange={handleProfileUpload}
          type="file"
          className="form__inputnone"
          name=""
          id=""
        />

        <button onClick={profileImageUpload}>
          {profileImageUrl === "" ? `Upload` : `Uploaded`}
        </button>
        <progress
          value={profileImageUploadProgress}
          className="imageupload__progress"
          max="100"
        />
        {messages === "" ? (
          ""
        ) : (
          <div
            className="relative flex items-center justify-center z-10 right-[22px]"
            onClick={sendMessage}
          >
            <button>send</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Addpost;
