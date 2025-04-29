
import { useState, useEffect } from "react";

const categories = ["All", "UI Design", "Web Design", "App Design", "Branding"];

const portfolioItems = [
  {
    id: 1,
    title: "Mobile Banking App",
    category: "UI Design",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    title: "Health Dashboard",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    title: "E-commerce App",
    category: "App Design",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 4,
    title: "Company Rebrand",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 5,
    title: "Fitness Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 6,
    title: "Food Delivery App",
    category: "App Design",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === activeCategory)
      );
    }
  }, [activeCategory]);

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
    <section id="portfolio" className="section bg-dark">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12 reveal">
          <span className="text-purple font-medium mb-4 inline-block tracking-wider">PORTFOLIO</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-text-light">
            Explore some of my recent work that showcases my design skills and approach.
            Each project represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-purple text-white"
                  : "bg-[#1a1a1a] text-white hover:bg-purple/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-purple text-sm">{item.category}</span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <button className="mt-4 text-white bg-purple/20 px-4 py-2 rounded-full self-start hover:bg-purple/30 transition-colors">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
