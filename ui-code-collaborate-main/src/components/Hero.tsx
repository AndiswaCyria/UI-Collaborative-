
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-purple/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <span className="inline-block text-purple font-medium mb-4 tracking-wider">
                UI DESIGNER & DEVELOPER
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Creating digital experiences that <span className="text-yellow">inspire</span>
              </h1>
              <p className="text-lg text-text-light mb-8 max-w-lg">
                I design and build beautiful interfaces that are intuitive to use and help businesses achieve their goals.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button className="bg-purple hover:bg-purple/90 text-white">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-purple text-purple hover:bg-purple/10">
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
          
          <div className={`order-1 md:order-2 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-purple/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="UI Designer" 
                className="w-full h-auto rounded-2xl relative z-10 border-4 border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
