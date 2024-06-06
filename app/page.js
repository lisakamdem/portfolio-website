import Head from "next/head";
import NavBar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
//Thing i need to go
//get correct image 
//get description of what i do
//see the text color for dark mode and light mode

export default function Page() {
  return (
    <div>
      <Head>
        <title>Lisa - Software Developer</title>
        <meta name="description" content="Lisa's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}