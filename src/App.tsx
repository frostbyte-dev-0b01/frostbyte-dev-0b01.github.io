import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Projects from "./components/Projects";
import Home from "./components/Home";

const NAV_HEIGHT = 64;

const Section: React.FC<{
  id: string;
  className?: string;
  children: React.ReactNode;
}> = ({ id, className, children }) => (
  <motion.section
    id={id}
    className={`snap-start h-full py-10 px-40 ${className}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.section>
);

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="font-sans text-gray-800 h-screen scroll-smooth overflow-hidden">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left" style={{ scaleX }} />

      {/* Sticky Nav */}
      <header className="sticky top-0 z-50 bg-white shadow p-4" style={{ height: `${NAV_HEIGHT}px` }}>
        <nav className="flex gap-6 justify-left">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </header>

      {/* Snap Scrolling Sections */}
      <main
        className="snap-y snap-mandatory h-full overflow-y-scroll scroll-smooth"
        style={{ height: `calc(100vh - ${NAV_HEIGHT}px)` }}
      >
        <Section id="home" className="bg-blue-100">
          <Home />
        </Section>

        <Section id="projects" className="bg-rose-50">
          <Projects />
        </Section>

        <Section id="contact" className="bg-blue-100">
          <p>
            Email:{" "}
            <a href="mailto:jpmoramarco@gmail.com" className="text-blue-600 underline">
              jpmoramarco@gmail.com
            </a>{" "}
            <br></br>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/joseph-moramarco-456128224/"
              className="text-blue-600 underline"
              target="_blank"
            >
              LinkedIn
            </a>
            .
          </p>
        </Section>
      </main>
    </div>
  );
};

export default App;
