
import { useState, FormEvent, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    }, 1500);
  };

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
    <section id="contact" className="section bg-dark">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12 reveal">
          <span className="text-purple font-medium mb-4 inline-block tracking-wider">CONTACT</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-text-light">
            Have a project in mind or want to learn more about my services?
            I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: <Mail className="h-6 w-6" />, title: "Email", info: "hello@uiportfolio.com" },
            { icon: <Phone className="h-6 w-6" />, title: "Phone", info: "+1 (555) 123-4567" },
            { icon: <MapPin className="h-6 w-6" />, title: "Location", info: "New York, NY, USA" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#131313] p-6 rounded-xl border border-gray-800 text-center reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 mx-auto bg-purple/10 rounded-full flex items-center justify-center text-purple mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-text-light">{item.info}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-[#131313] border border-gray-800 rounded-lg focus:outline-none focus:border-purple text-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-[#131313] border border-gray-800 rounded-lg focus:outline-none focus:border-purple text-white"
                />
              </div>
            </div>
            <div className="mb-6">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full px-4 py-3 bg-[#131313] border border-gray-800 rounded-lg focus:outline-none focus:border-purple text-white"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-[#131313] border border-gray-800 rounded-lg focus:outline-none focus:border-purple text-white resize-none"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary px-8 py-3"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitMessage && (
                <div className="mt-4 text-green-500">{submitMessage}</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
