const projects = [
  {
    title: "Enterprise ERP Platform",
    image: "/portfolio1.jpg",
    description: "A scalable ERP solution for a global manufacturing company, streamlining operations and analytics.",
    link: "#",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    image: "/portfolio2.jpg",
    description: "Real-time data visualization and AI insights for a fintech startup.",
    link: "#",
  },
  {
    title: "Healthcare CRM System",
    image: "/portfolio3.jpg",
    description: "Custom CRM for a healthcare provider, improving patient engagement and workflow.",
    link: "#",
  },
  {
    title: "E-commerce Cloud Migration",
    image: "/portfolio4.jpg",
    description: "Seamless migration of a retail platform to the cloud, boosting performance and reliability.",
    link: "#",
  },
  {
    title: "Blockchain Supply Chain",
    image: "/portfolio5.jpg",
    description: "A secure, transparent supply chain solution using blockchain for a logistics company.",
    link: "#",
  },
  {
    title: "Mobile Banking App",
    image: "/portfolio6.jpg",
    description: "A user-friendly, secure mobile banking app for a leading financial institution.",
    link: "#",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-12 tracking-tight">
          Our Portfolio
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-blue-700 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block mt-auto text-blue-600 font-semibold hover:underline"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}