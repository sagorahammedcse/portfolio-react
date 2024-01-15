import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import About from "@/sections/about";
import Education from "@/sections/education";
import Experience from "@/sections/experience";
const Navbar = dynamic(() => import("@/layout/navbar/Navbar"))
const Footer = dynamic(() => import("@/layout/footer/Footer"))
const Intro = dynamic(() => import("@/sections/Intro"))
const Skills = dynamic(() => import("@/sections/Skills"))

const Home = () => {

  return (
    <Fragment>
      <Head>
        <title>Sagor&apos;s Portfolio</title>

      </Head>
      <div>
        <div>
          {/* Desktop Navbar */}
          <Navbar />
          {/* Welcome Page */}
          <Intro />
          {/* About */}
          <About />
          {/* Skills  */}
          <Skills />
          {/* Education */}
          <Education />
          {/* Experience */}
          <Experience />
          {/* Footer */}
          <Footer />

        </div>
      </div>
    </Fragment>
  );
}

export default Home
