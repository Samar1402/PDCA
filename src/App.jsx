import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";

import { Route, Routes } from "react-router-dom";
import Members from "./Components/Members";
import Notification from "./Components/Notification";
import CommitteeMember from "./Components/CommitteeMember";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <>

      
      <Header />
      <Navbar />
      {/* <Login /> */}
      {/* <Home /> */}
      <Signup />
      {/* <CommitteeMember /> */}
      <Gallery />
      <Routes>
        <Route path="/members" Component={Members} />
        <Route path="/notification" Component={Notification} />
      </Routes>
      
    </>
  );
}

export default App;
