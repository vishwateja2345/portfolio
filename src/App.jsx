import React, { lazy } from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import LazySection from "./components/LazySection";
import DeferredSection from "./components/DeferredSection";

// Code-split below-fold sections — only loaded when scrolled near
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Footer = lazy(() => import("./sections/Footer"));

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      {/* Critical above-fold — loaded immediately */}
      <Navbar />
      <Hero />

      {/* Below-fold sections — deferred until scroll + code-split */}
      <DeferredSection minHeight="100vh" rootMargin="400px">
        <LazySection minHeight="100vh">
          <About />
        </LazySection>
      </DeferredSection>

      <DeferredSection minHeight="80vh" rootMargin="300px">
        <LazySection minHeight="80vh">
          <Projects />
        </LazySection>
      </DeferredSection>

      <DeferredSection minHeight="4rem" rootMargin="200px">
        <LazySection minHeight="4rem">
          <Footer />
        </LazySection>
      </DeferredSection>
    </div>
  );
};

export default App;
