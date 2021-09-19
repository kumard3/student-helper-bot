import React, { useEffect, useRef, useState } from "react";

import { db, storage } from "../firebase";
import firebase from "firebase";
import Addpost from "./Addpost";
import { Link } from "react-router-dom";

export default function StudentMessaging({ nameOfExperiment }) {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [profileImage, setProfileImage] = useState(null);

  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [profileImageString, setProfileImageString] = useState("");
  const [profileImageUploadProgress, setProfileImageUploadProgress] = useState(
    0
  );
  const messageEndRef = useRef(null);

  useEffect(() => {
    setProfileImageString("qwertyuioiuytrewertyuytre");
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timeOfMessage", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  const handleProfileUpload = (e) => {
    if (e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const profileImageUpload = (e) => {
    e.preventDefault();

    const uploadProfileImageTask = storage
      .ref(`profile-images/${profileImageString}`)
      .put(profileImage);

    uploadProfileImageTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProfileImageUploadProgress(progress);
      },
      (error) => {
        // Error function ...
        console.log(error);
        alert(error.message);
      },
      () => {
        // complete function ...
        storage
          .ref("profile-images")
          .child(profileImageString)
          .getDownloadURL()
          .then((url) => {
            setProfileImageUrl(url);
          });
      }
    );
  };
  console.log(profileImageUrl);
  const sendMessage = () => {
    db.collection("messages").add({
      nameOfStudent: "Anish",
      message: inputMessage,
      isStudent: true,
      timeOfMessage: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInputMessage("");
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  console.log(messages);
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full ">
      <Link to="/addpost"> <button className="float-left"><h1 className="float-left">Post Something</h1></button></Link>
      <div className=" flex flex-col ">
        {messages.map((message) => {
          console.log(message);
          //move to right for student
          return (
            <div className={` my-2 flex flex-col    pt-[10px]`}>
              <h3 className="dark:text-white text-black">
                {message.message.message}
              </h3>
              {profileImageUrl === "" ? (
                ""
              ) : (
                <img className="max-w-[300px]" src={profileImageUrl} />
              )}
            </div>
          );
        })}
        <div ref={messageEndRef} />
      </div>
    </div>
  );
}
