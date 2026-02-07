import { useState } from "react";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Responsibilities from "./components/Responsibilities";
import WhatYouGet from "./components/WhatYouGet";
import Testimonials from "./components/Testimonials";
import Certificate from "./components/Certificate";
import Apply from "./components/Apply";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-black font-sans antialiased w-full min-h-screen">
      <Hero />
      <Why />
      <Responsibilities />
      <WhatYouGet />
      <Testimonials />
      <Certificate />
      <Apply />
      <Footer />
    </div>
  );
}

export default App;
