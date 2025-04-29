
import { Code, Layout, Smartphone, Palette } from "lucide-react";

const serviceItems = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "UI Design",
    description: "Creating beautiful, intuitive interfaces for web and mobile applications that users love to use."
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Building responsive, high-performance websites using the latest technologies and best practices."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile App Design",
    description: "Designing user-friendly mobile applications that provide seamless experiences across all devices."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Branding",
    description: "Developing cohesive brand identities that communicate your values and resonate with your audience."
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-dark">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <span className="text-purple font-medium mb-4 inline-block tracking-wider">SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Specialized Services I Offer</h2>
          <p className="text-text-light">
            I provide end-to-end design solutions that help businesses succeed in the digital world.
            From research to implementation, I ensure a seamless process with attention to detail.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={service.title}
              className="bg-[#131313] p-8 rounded-xl border border-gray-800 hover:border-purple/30 transition-all duration-300 group hover:-translate-y-2 reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-purple/10 rounded-lg flex items-center justify-center mb-6 text-purple group-hover:bg-purple/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-text-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
