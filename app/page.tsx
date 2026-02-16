import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import BlogPosts from '@/components/BlogPosts';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Banner />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Experience />
      <Projects />
      <BlogPosts />
      <Certifications />
      <Contact />
    </main>
  );
}
