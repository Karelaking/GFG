import Footer from "./components/footer/Footer";
import PageBackground from "./components/page_background/PageBackground";
import About from "./pages/about/About";
import Contact from "./pages/contacts/Contacts";
import CurrentLearning from "./pages/current_learning/Current_learning";
import Goals from "./pages/goals/Goals";
import Hero from "./pages/hero/Hero";
import Projects from "./pages/projects/Projects";
import Resolutions from "./pages/resolution/Resolution";

function App() {
  return (
    <PageBackground>
      <div className="h-full w-screen">
        <Hero />
        <About />
        <CurrentLearning />
        <Goals />
        <Projects />
        <Resolutions/>
        <Contact/>
        <Footer />
      </div>
    </PageBackground>
  );
}

export default App;
