import "./App.css";
import ScrollToTop from "react-scroll-to-top";
import Layout from "./components/layouts/Layout";
import About from "./pages/About/About";
import TechStack from "./pages/TechStack/TechStack";
import Project from "./pages/Projects/Project";
import Education from "./pages/Education/Education";
import WorkExp from "./pages/WorkExperience/WorkExp";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";
import { useTheme } from "./context/ThemeContext";
import MoileNav from "./components/MobileNav/MoileNav";
function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MoileNav />
        <Layout />
        <About />
        <Education />
        <TechStack />
        <Project />
        <WorkExp />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop
        smooth
        color="#fff"
        title="Go To Top"
        style={{ borderRadius: "50%", backgroundColor: "#f159a2" }}
      />
    </>
  );
}

export default App;
