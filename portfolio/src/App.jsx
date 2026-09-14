import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import ContactModal from "./components/Contact/ContactModal";
import Footer from "./components/Footer/Footer";

// El estado del modal de contacto vive aquí porque tres componentes
// distintos necesitan poder abrirlo (Navbar, Hero y Contact).
// Es "levantar el estado" (lifting state up) al ancestro común más cercano.
export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <>
      <Navbar onOpenContact={openContact} />
      <main>
        <Hero onOpenContact={openContact} />
        <About />
        <Projects />
        <Skills />
        <Contact onOpenContact={openContact} />
      </main>
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />
    </>
  );
}
