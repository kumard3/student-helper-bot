import { Form } from "./components/Form";
import ResumeData from "./components/ResumeData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CourseFinder from "./courseFinder/CourseFinder";
import HomePage from "./components/HomePage";
import StudentMessage from "./pages/Message";
import StudentMessaging from "./components/MessagingComponent";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          
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
