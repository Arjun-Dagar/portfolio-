import "./App.css";
import Aboutme from "./components/aboutme";
import Contact from "./components/contact";
import FirstPage from "./components/first_page";
import Header from "./components/header";
import Project from "./components/project";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <Header />
      <FirstPage />
      <Skills />
      <Project />
      <Aboutme />
      <Contact />
    </>
  );
}

export default App;
