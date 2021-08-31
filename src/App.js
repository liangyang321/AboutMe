import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Protfolio from "./components/protfolio/Protfolio";
import Contact from "./components/contact/Contact"
import Projects from "./components/projects/Projects";
import Menu from "./components/menu/Menu";
import "./app.scss"
import { useState } from "react";

function App() {
  const [rightBar, setRightBar] = useState(false);
  return (
    <div className = "app">
    <Topbar rightBar={rightBar} setRightBar={setRightBar}/>
    <Menu rightBar={rightBar} setRightBar={setRightBar}/>
    <div className = "sections">
      <Intro/>
      <Protfolio/>
      <Projects/>
      <Contact/>
    </div>
    </div>
  );
}

export default App;
