
import { Check } from "lucide-react";
import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section bg-[#0f0f0f]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                  alt="About me"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-dark p-4 rounded-lg shadow-xl border border-purple/20">
                <div className="flex items-center gap-2">
                  <span className="text-purple font-bold text-xl">5+</span>
                  <span className="text-white text-sm">Years of<br />Experience</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <span className="text-purple font-medium mb-4 tracking-wider reveal">ABOUT ME</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">
              Creative UI Designer Based in NYC
            </h2>
            <p className="text-text-light mb-6 reveal">
              I'm a UI/UX designer with a passion for creating beautiful and functional digital experiences. 
              With over 5 years of experience, I specialize in user-centered design that drives results.
            </p>
            <p className="text-text-light mb-6 reveal">
              My approach combines aesthetic appeal with practical functionality, ensuring that the end product 
              not only looks great but also delivers an exceptional user experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 reveal">
              {[
                "UI/UX Design", 
                "Branding", 
                "Web Development", 
                "App Design"
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <Check size={18} className="text-purple" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="btn btn-primary reveal"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
