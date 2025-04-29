
import { useEffect } from "react";

const skills = [
  { name: "UI Design", percentage: 95 },
  { name: "React", percentage: 90 },
  { name: "Figma", percentage: 95 },
  { name: "HTML & CSS", percentage: 98 },
  { name: "JavaScript", percentage: 85 },
  { name: "Tailwind CSS", percentage: 92 },
];

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Animate progress bars when they come into view
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((bar: Element) => {
              const barElement = bar as HTMLElement;
              const width = barElement.getAttribute('data-width');
              setTimeout(() => {
                if (width) barElement.style.width = `${width}%`;
              }, 300);
            });
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
    <section className="section bg-[#0f0f0f] py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <span className="text-purple font-medium mb-4 inline-block tracking-wider">SKILLS</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              My Technical Proficiency
            </h2>
            <p className="text-text-light mb-8">
              With extensive experience across various design and development tools,
              I bring a comprehensive skill set to every project. My approach combines
              technical excellence with creative problem-solving.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark p-4 rounded-lg border border-gray-800">
                <div className="text-4xl font-bold text-purple">350+</div>
                <div className="text-white">Projects Completed</div>
              </div>
              <div className="bg-dark p-4 rounded-lg border border-gray-800">
                <div className="text-4xl font-bold text-purple">120+</div>
                <div className="text-white">Happy Clients</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 reveal">
            {skills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-purple">{skill.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-[#1a1a1a] rounded-full">
                  <div 
                    className="progress-bar h-full bg-purple rounded-full transition-all duration-1000 ease-out"
                    data-width={skill.percentage}
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
