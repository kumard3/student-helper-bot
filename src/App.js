import React, { useEffect, useRef, useState } from "react";


import { Form } from "./components/Form";
import ResumeData from "./components/ResumeData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CourseFinder from "./courseFinder/CourseFinder";
import HomePage from "./components/HomePage";
import StudentMessage from "./pages/Message";
import StudentMessaging from "./components/MessagingComponent";
import Nav from "./components/Nav";
import Addpost from "./components/Addpost";
import { db, storage } from "./firebase";
import firebase from "firebase";
function App() {


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
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path='/addpost' >
          <Addpost
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleProfileUpload={handleProfileUpload}
        profileImageUpload={profileImageUpload}
        profileImageUrl={profileImageUrl}
        messages={messages}
        sendMessage={sendMessage}
        profileImageUploadProgress={profileImageUploadProgress}
      />
          </Route>
          <Route path="/community">
            <StudentMessaging />
          </Route>
          <Route path="/chat-bot">
            <Form />
          </Route>
          <Route path="/course-finder">
            <CourseFinder />
          </Route>
          <Route  path="/resume-data">
            <ResumeData />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
