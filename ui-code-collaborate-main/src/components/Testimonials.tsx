
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Product Manager at TechCorp",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    text: "Working with this designer was a fantastic experience. Their attention to detail and ability to translate our vision into a beautiful interface exceeded our expectations."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO of StartApp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    text: "The redesign of our app completely transformed our user experience. We've seen a 40% increase in user engagement since launch. I highly recommend their services!"
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Marketing Director at BrandCo",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    text: "From concept to completion, the process was smooth and professional. They truly understood our brand and created a design system that perfectly represents who we are."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
    <section className="section bg-[#0f0f0f]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12 reveal">
          <span className="text-purple font-medium mb-4 inline-block tracking-wider">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Clients Say</h2>
          <p className="text-text-light">
            Don't just take my word for it. Here's what some of my clients have to say about working with me.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative reveal">
          <div className="bg-dark border border-gray-800 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex mb-4 text-yellow">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl italic mb-6 text-white">
                  "{testimonials[activeIndex].text}"
                </blockquote>
                <div>
                  <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                  <p className="text-text-light">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all ${
                  activeIndex === index ? "bg-purple w-6" : "bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
