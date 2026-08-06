import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import AuditContest from '@/components/AuditContest';
import Experience from '@/components/Experience';
import BlogPosts from '@/components/BlogPosts';
import Certifications from '@/components/Certifications';
import ExperienceDetails from '@/components/ExperienceDetails';
import Hackathon from '@/components/Hackathon';
import HackathonDetails from '@/components/HackathonDetails';
import Project from '@/components/Project';
import ProjectDetails from '@/components/ProjectDetails';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--th-bg)] text-[var(--th-body)] transition-colors duration-200">
      <Sidebar />
      <main className="md:ml-60 pt-16 md:pt-0">
        <div id="home">
          <Hero />
        </div>
        <About />
        <AuditContest />
        <Experience />
        <ExperienceDetails />
        <Hackathon />
        <HackathonDetails />
        <Project />
        <ProjectDetails />
        <BlogPosts />
        <Certifications />
        <Gallery />
      </main>
    </div>
  );
}
