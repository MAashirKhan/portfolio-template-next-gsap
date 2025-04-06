// // src/app/page.js
// "use client";

// import { useEffect, useRef } from "react";
// import {
//   Navbar,
//   Hero,
//   About,
//   Skills,
//   Projects,
//   Testimonials,
//   Contact,
//   Footer,
//   BackToTop,
//   ParallaxSection,
// } from "@/components";
// import Lenis from "@studio-freight/lenis";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function Home() {
//   const mainRef = useRef(null);

//   useEffect(() => {
//     // Register ScrollTrigger plugin
//     gsap.registerPlugin(ScrollTrigger);

//     // Initialize smooth scroll with Lenis
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       direction: "vertical",
//       smooth: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     // Clean up on unmount
//     return () => {
//       lenis.destroy();
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <main ref={mainRef} className="min-h-screen">
//       <Navbar />
//       <Hero />
//       <ParallaxSection>
//         <About />
//       </ParallaxSection>
//       <Skills />
//       <ParallaxSection>
//         <Projects />
//       </ParallaxSection>
//       <Testimonials />
//       <Contact />
//       <Footer />
//       <BackToTop />
//     </main>
//   );
// }
// src/app/page.tsx
"use client";

import { useEffect, useRef } from "react";
import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Testimonials,
  Contact,
  Footer,
  BackToTop,
  ParallaxSection,
} from "@/components";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home: React.FC = () => {
  const mainRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize smooth scroll with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Removed 'smooth' as it is not a valid property
    });

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up on unmount
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main ref={mainRef} className="min-h-screen">
      <Navbar />
      <Hero />
      <ParallaxSection>
        <About />
      </ParallaxSection>
      <Skills />
      <ParallaxSection>
        <Projects />
      </ParallaxSection>
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
};

export default Home;
