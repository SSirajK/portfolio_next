import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className='bg-[#0a192f] w-full'>
      <Navbar />
      <HomePage />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}
