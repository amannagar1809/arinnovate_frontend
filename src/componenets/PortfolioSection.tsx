import Image from 'next/image';

const projects = [
  {
    title: "Enterprise ERP Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
    description: "A scalable ERP solution for a global manufacturing company, streamlining operations and analytics.",
    link: "#",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
    description: "Real-time data visualization and AI insights for a fintech startup.",
    link: "#",
  },
  {
    title: "Healthcare ERP System",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=500&h=300&fit=crop&crop=center",
    description: "Comprehensive ERP system for healthcare management, integrating patient records, billing, and inventory.",
    link: "#",
  },
  {
    title: "E-commerce Cloud Migration",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop&crop=center",
    description: "Seamless migration of a retail platform to the cloud, boosting performance and reliability.",
    link: "#",
  },
  {
    title: "Blockchain Supply Chain",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop&crop=center",
    description: "A secure, transparent supply chain solution using blockchain for a logistics company.",
    link: "#",
  },
  {
    title: "Mobile Banking App",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop&crop=center",
    description: "A user-friendly, secure mobile banking app for a leading financial institution.",
    link: "#",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 scroll-mt-18">
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
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
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