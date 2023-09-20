import React, { useEffect, useState } from "react";
import Login from "./pages/js/Login";
import Home from "./pages/js/Home";
import About from "./pages/js/About";
import Blog from "./pages/js/Blog";
import Contact from "./pages/js/Contact";
import Services from "./pages/js/Services";
import Ourteam from "./pages/js/Ourteam";
import User from "./pages/js/user";
import Mento from "./pages/js/Mentor";
import Video from "./pages/js/Youtube1";
import Contacts from "./pages/js/Contacts";
import Allcourse from "./pages/js/Ourcourse";
import Loginpage from "./pages/js/Loginpage";
import Prover from "./pages/js/Prover";
import Teacher from "./pages/js/Teacherpage";
import Student from "./pages/js/Student";
import Mentorcontact from "./pages/js/Mentorcontact";
import News from "./pages/js/News";
import Newspage from "./pages/js/Newspage";
import Number from './pages/js/Number'
import StudentAll from "./pages/js/StudentAll";
import LoginpageMentor from "./pages/js/LoginpageMentor";
import Help from "./pages/js/Help";
import UserHelp from "./pages/js/UserHelp";
import UserHelp1 from "./pages/js/User_Help1";
import UserHelp2 from "./pages/js/User_help2";
import UserHelp3 from "./pages/js/User_help3";
import UserHelp4 from "./pages/js/User_help4";
import StudentHelp4 from "./pages/js/StudentHelp4";
import MentorHelp from "./pages/js/MentorHelp";
import Student_Help from "./pages/js/Student_Help";
import TeacherProfil from "./pages/js/TeacherProfil";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Proverr2 from "./pages/js/Proverr2";
import Oplata from "./pages/js/Oplata";
import Help_chat from "./pages/js/Help_chat";
import FollowCard from "./pages/js/FollowCard";
import Testpage from "./pages/js/Testpage";
import Testloader from "./pages/js/Testloader";
import Education from "./pages/js/Education";
import Test_create from "./pages/js/Test_create";
import Koz from "./pages/js/Koz";
import Email from "./pages/js/Email";
import Nosignal from "./pages/js/Nosignal";
import Ourcourse from "./pages/js/Ourcourse";
import NNN from "./pages/js/NNN";
import VideoCall from "./pages/metting";
import JoinMeeting from "./pages/Join"
import Sotibol from "./pages/js/Sotibol";
import WiewAll from "./pages/js/WiewAll";
import WiewAll1 from "./pages/js/WiewAll1";
import Sertificate_create from "./pages/js/Sertificate_create";
import Partner from "./pages/js/Partner";
import Teams from "./pages/js/Teams";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch >
          <Route exact path="/videochat" component={JoinMeeting} />
          <Route exact path="/video/:id" component={VideoCall} />
          <Route exact path="/" component={Home} />
          <Route exact path="/Sotibol" component={Sotibol} />
          <Route exact path="/Email" component={Email} />
          <Route exact path="/Koz" component={Koz} />
          <Route exact path="/editprofil" component={Loginpage} />
          <Route exact path="/editprofilmentor" component={LoginpageMentor} />
          <Route exact path="/about" component={About} />
          <Route exact path="/servis" component={Services} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/userhelp" component={UserHelp} />
          <Route exact path="/USer_help1" component={UserHelp1} />
          <Route exact path="/USer_help2" component={UserHelp2} />
          <Route exact path="/USer_help3" component={UserHelp3} />
          <Route exact path="/USer_help4" component={UserHelp4} />
          <Route exact path="/StudentHelp4 " component={StudentHelp4} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/ourteam" component={Ourteam} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/user" component={User} />
          <Route exact path="/mentor" component={Mento} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/video" component={Video} />
          <Route exact path="/ourcourse" component={Allcourse} />
          <Route exact path="/news" component={News} />
          <Route exact path="/newspage" component={Newspage} />
          <Route exact path="/prover" component={Prover} />
          <Route exact path="/Proverr2" component={Proverr2} />
          <Route exact path="/teacher" component={Teacher} />
          <Route exact path="/student" component={Student} />
          <Route exact path="/mentorcontact" component={Mentorcontact} />
          <Route exact path="/studentall" component={StudentAll} />
          <Route exact path="/Oplata" component={Oplata} />
          <Route exact path="/MentorHelp" component={MentorHelp} />
          <Route exact path="/Student_Help" component={Student_Help} />
          <Route exact path="/Help_chat" component={Help_chat} />
          <Route exact path="/FollowCard" component={FollowCard} />
          <Route exact path="/TeacherProfil" component={TeacherProfil} />
          <Route exact path="/Testpage" component={Testpage} />
          <Route exact path="/Testloader" component={Testloader} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/testcreate" component={Test_create} />
          <Route exact path="/Nosignal" component={Nosignal} />
          <Route exact path="/Ourcourse" component={Ourcourse} />
          <Route exact path="/WiewAll" component={WiewAll} />
          <Route exact path="/WiewAll1" component={WiewAll1} />
          <Route exact path="/NNN" component={NNN} />
          <Route exact path="/sertificate_create" component={Sertificate_create} />
          <Route exact path="/partner" component={Partner} />
          <Route exact path="/Teams" component={Teams} />
          <Route exact path="/Number" component={Number} />
          {/* <Route index element={} />*/}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
