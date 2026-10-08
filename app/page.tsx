import { ArrowDownRight, ArrowRight, Code2, GraduationCap, Mail, MapPin, Network, Phone, Rocket, Send } from "lucide-react";

const interests = ["Software Development", "Web Design", "Computer Networking", "Application Development", "Technology & Innovation"];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a className="brand" href="#home" aria-label="Rachelle Raros home"><span className="brand-mark">RR</span><span>Rachelle Raros<span className="brand-period">.</span></span></a>
        <div className="nav-links">
          <a href="#home">Home</a><a href="#about">About</a><a href="#education">Education</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </div>
        <a className="nav-button" href="#contact">Let’s talk <ArrowRight size={15}/></a>
      </nav>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot"/> INFORMATION TECHNOLOGY STUDENT</span>
          <h1>Hello, I’m<br/><span>Rachelle Raros.</span></h1>
          <p className="hero-lead">Learning today. Creating solutions for tomorrow.</p>
          <p className="hero-text">Welcome to my personal portfolio. I’m an Information Technology student interested in programming, digital solutions, and exploring how technology can make everyday tasks easier.</p>
          <p className="hero-text">I’m building my skills through college, practice, and personal projects, one step at a time.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">View my projects <ArrowRight size={17}/></a><a className="text-link" href="#about">More about me <ArrowDownRight size={17}/></a></div>
          <div className="hero-caption"><span/> Open to learning, collaboration, and new ideas.</div>
        </div>
        <div className="hero-panel" aria-label="Simple blue abstract design">
          <div className="panel-grid"/>
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="code-card"><div className="code-top"><span/><span/><span/><small>my-profile.tsx</small></div><div className="code-body"><p><span className="code-blue">const</span> <span className="code-dark">developer</span> = {'{'}</p><p className="indent"><span className="code-blue">name:</span> <span className="code-string">"Rachelle"</span>,</p><p className="indent"><span className="code-blue">field:</span> <span className="code-string">"Information Tech"</span>,</p><p className="indent"><span className="code-blue">learning:</span> <span className="code-string">true</span></p><p>{'}'};</p><div className="code-rule"/><div className="code-status"><span/> building skills, line by line</div></div></div>
          <div className="floating-label label-top"><Code2 size={17}/><span>Curious mind</span></div><div className="floating-label label-bottom"><Rocket size={17}/><span>Future developer</span></div>
          <div className="panel-number">01 <span>/ 05</span></div>
        </div>
      </section>

      <section className="intro-strip"><div className="section-wrap strip-inner"><span>MY APPROACH</span><p>Stay curious. Keep practicing. Build with purpose.</p><span className="strip-line"/></div></section>

      <section className="section section-wrap" id="about">
        <div className="section-heading"><span className="section-label">01 / ABOUT</span><h2>A little about <span>me</span></h2><p>Getting better through curiosity, consistency, and hands-on learning.</p></div>
        <div className="about-layout">
          <div className="about-main"><span className="large-index">01</span><h3>Learning with purpose.</h3><p>My name is Rachelle Raros. I’m an aspiring programmer who enjoys discovering new concepts, exploring digital design, and understanding how technology works.</p><p>I know that improving takes patience and practice. I treat challenges as opportunities to learn, and I’m working toward building the skills I need for a future career in IT.</p><div className="about-signature">Rachelle Raros <span>— IT student</span></div></div>
          <div className="interest-panel"><span className="section-label">WHAT I’M INTERESTED IN</span><div className="interest-list">{interests.map((interest, index) => <div className="interest-item" key={interest}><span>0{index + 1}</span><p>{interest}</p><ArrowRight size={16}/></div>)}</div></div>
        </div>
      </section>

      <section className="education-section" id="education"><div className="section-wrap section">
        <div className="section-heading"><span className="section-label">02 / EDUCATION</span><h2>My college <span>journey</span></h2><p>Building a foundation in technology, one class and project at a time.</p></div>
        <article className="education-card"><div className="education-icon"><GraduationCap size={29}/></div><div className="education-content"><span className="status"><span/> CURRENTLY STUDYING</span><h3>Bachelor of Science in Information Technology</h3><p className="school-name">Nueva Vizcaya State University (NVSU)</p><div className="education-details"><div><span>MAJOR</span><b>Network Design Management (NDM)</b></div><div><span>YEAR LEVEL</span><b>Third Year College</b></div></div><p className="education-description">My studies introduce me to programming, computer networking, database management, web development, and system development. I continue to practice what I learn and strengthen my problem-solving and technical skills.</p></div><div className="education-side">EDUCATION<br/><span>02</span></div></article>
      </div></section>

      <section className="section section-wrap" id="projects">
        <div className="section-heading"><span className="section-label">03 / PROJECTS</span><h2>Work in <span>progress</span></h2><p>Small steps and practical projects that help me grow as a developer.</p></div>
        <div className="projects-grid">
          <article className="project-card"><div className="project-preview preview-blue"><div className="preview-window"><div className="preview-bar"><span/><span/><span/><b>portfolio.tsx</b></div><div className="preview-content"><div className="preview-avatar">RR</div><div className="preview-line wide"/><div className="preview-line"/><div className="preview-button"/></div></div><span className="preview-index">PROJECT / 01</span></div><div className="project-body"><div className="project-meta"><span>NEXT.JS</span><span>CSS</span><span>FRONTEND</span></div><h3>Personal Portfolio Website</h3><p>A responsive portfolio that introduces me, shares my educational background, and presents my interests using a clean blue design.</p><div className="project-bottom"><span>Personal website</span><ArrowRight size={18}/></div></div></article>
          <article className="project-card"><div className="project-preview preview-light"><div className="system-preview"><div className="system-sidebar"><i/><i/><i/></div><div className="system-main"><div className="system-heading"/><div className="system-cards"><i/><i/><i/></div><div className="system-row"/><div className="system-row short"/></div></div><span className="preview-index">PROJECT / 02</span></div><div className="project-body"><div className="project-meta"><span>DEVELOPMENT</span><span>IN PROGRESS</span></div><h3>System Development Project</h3><p>An ongoing learning project where I practice planning, organizing features, and applying programming concepts to a functional system.</p><div className="project-bottom"><span>Currently developing</span><ArrowRight size={18}/></div></div></article>
        </div>
        <p className="projects-note"><span/> More projects and details will be added as I continue learning and building.</p>
      </section>

      <section className="contact-section" id="contact"><div className="section-wrap section">
        <div className="section-heading"><span className="section-label">04 / CONTACT</span><h2>Let’s start a <span>conversation.</span></h2><p>Have a question, an idea, or want to connect? Feel free to reach out.</p></div>
        <div className="contact-layout"><div className="contact-message"><span className="contact-symbol"><Send size={24}/></span><h3>Good things begin<br/>with a simple hello.</h3><p>I’m happy to share ideas, learn from others, and connect with people who are interested in technology.</p><div className="contact-note">Thank you for visiting my portfolio.</div></div><div className="contact-details"><a className="contact-item" href="mailto:rarosrachelle1106@gmail.com"><span className="contact-icon"><Mail size={20}/></span><span><small>EMAIL</small><b>rarosrachelle1106@gmail.com</b></span><ArrowRight size={17}/></a><a className="contact-item" href="tel:09358126709"><span className="contact-icon"><Phone size={20}/></span><span><small>PHONE</small><b>09358126709</b></span><ArrowRight size={17}/></a><div className="contact-item contact-static"><span className="contact-icon"><MapPin size={20}/></span><span><small>FIELD OF INTEREST</small><b>Information Technology</b></span></div></div></div>
      </div></section>
      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">RR</span><span>Rachelle Raros<span className="brand-period">.</span></span></a><p>Designed and built with Next.js and CSS.</p><a className="back-top" href="#home">BACK TO TOP ↑</a></footer>
    </main>
  );
}
