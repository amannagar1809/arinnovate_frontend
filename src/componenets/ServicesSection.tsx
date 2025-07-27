const services = [
    {
        name: "Software Development Services",
        icon: (
            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z" />
                <path d="M8 8h8v8H8z" />
            </svg>
        ),
        summary: "Custom web, mobile, and enterprise software solutions tailored to your business needs.",
        link: "#",
    },
    {
        name: "Cloud & DevOps Services",
        icon: (
            <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M3 15a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-1z" />
                <path d="M17 9a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4h-1a4 4 0 0 1-4-4v-1a4 4 0 0 1 4-4h1z" />
            </svg>
        ),
        summary: "Scalable cloud infrastructure and CI/CD pipelines for faster, reliable deployments.",
        link: "#",
    },
    {
        name: "AI & Data Solutions",
        icon: (
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8M12 8v8" />
            </svg>
        ),
        summary: "Leverage AI, machine learning, and data analytics to drive business insights.",
        link: "#",
    },
    {
        name: "Quality Assurance & Testing",
        icon: (
            <svg className="w-12 h-12 text-yellow-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M9 12l2 2l4-4" />
                <circle cx="12" cy="12" r="10" />
            </svg>
        ),
        summary: "Comprehensive QA and testing services to ensure flawless software performance.",
        link: "#",
    },
    {
        name: "IT Support & Maintenance",
        icon: (
            <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="10" />
            </svg>
        ),
        summary: "Reliable IT support and maintenance to keep your systems running smoothly.",
        link: "#",
    },
    {
        name: "UI/UX & Digital Experience",
        icon: (
            <svg className="w-12 h-12 text-pink-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <path d="M8 12h8" />
            </svg>
        ),
        summary: "Engaging UI/UX design for seamless and delightful digital experiences.",
        link: "#",
    },
    {
        name: "Cybersecurity Services",
        icon: (
            <svg className="w-12 h-12 text-blue-900" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 17v.01" />
                <rect x="4" y="4" width="16" height="16" rx="8" />
                <path d="M8 12a4 4 0 1 1 8 0" />
            </svg>
        ),
        summary: "Protect your business with advanced cybersecurity solutions and monitoring.",
        link: "#",
    },
    {
        name: "Blockchain & Web3 Solutions",
        icon: (
            <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
        summary: "Innovative blockchain and Web3 development for the decentralized future.",
        link: "#",
    },
    {
        name: "IT Consulting & Strategy",
        icon: (
            <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="10" />
            </svg>
        ),
        summary: "Expert IT consulting to align technology with your business goals.",
        link: "#",
    },
    {
        name: "Specialized Industry Solutions",
        icon: (
            <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <path d="M8 8h8v8H8z" />
            </svg>
        ),
        summary: "Tailored software solutions for healthcare, finance, retail, and more.",
        link: "#",
    },
    {
        name: "Custom ERP/CRM",
        icon: (
            <svg className="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <path d="M8 8h8v8H8z" />
            </svg>
        ),
        summary: "Tailored ERP and CRM solutions to streamline your business operations and customer management.",
        link: "#",
    },
    {
        name: "Digital Transformation",
        icon: (
            <svg className="w-12 h-12 text-fuchsia-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8M12 8v8" />
            </svg>
        ),
        summary: "End-to-end digital transformation services to modernize your business and drive innovation.",
        link: "#",
    },
];

export default function ServicesSection() {
    return (
        <section
            id="services"
            className="py-16 bg-gradient-to-br from-blue-100 via-white to-purple-100 relative overflow-hidden"
        >
            {/* Optional: Add a blurred 3D SVG or canvas background here for more depth */}
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-12 tracking-tight">
                    Our Services
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:rotate-[2deg] group"
                            style={{
                                perspective: "1000px",
                                transformStyle: "preserve-3d",
                            }}
                        >
                            <div className="mb-4 transition-transform duration-300 group-hover:rotate-y-12 group-hover:scale-110">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-extrabold mb-2 text-blue-700 tracking-wide drop-shadow">
                                {service.name}
                            </h3>
                            <p className="text-gray-600 mb-4">{service.summary}</p>
                            <a
                                href={service.link}
                                className="text-blue-600 font-semibold hover:underline"
                            >
                                Explore &rarr;
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}