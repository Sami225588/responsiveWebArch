import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Sample Project",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    image: "/images/p2.png"
  },
  {
    id: 2,
    title: "Sample Project",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    image: "/images/p1.png"
  },
  {
    id: 3,
    title: "Sample Project",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    image: "/images/6.png"
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Our Projects</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-56">
                <Image
                  src={project.image} // Directly reference the image path here
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6 bg-gray-100">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href="#"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
