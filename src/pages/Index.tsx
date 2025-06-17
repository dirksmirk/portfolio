import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </div>
    )
}

export default Index;