// page.tsx
import Image from "next/image";
import link from "next/image";


export default function Home() {
  return (
    <div>
      {/* Project Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] bg-gray-100 flex flex-col md:flex-row">
        <div className="absolute top-20 left-12 md:top-40 md:left-24 text-left z-10">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-thin tracking-wide  text-gray-400">
            PROJECT
            <br />
             
          </h1>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold ml-20 text-black">NEW</h2>
          <div className="mt-6 flex space-x-4">
          </div>

        </div>
        <div className="relative w-full h-full md:w-1/2">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/project-building.jpg')" }} />
        </div>

      <div className="relative hidden md:block md:w-1/2 h-full">
  {/* Image on the right side */}
  <Image
    src="/images/building.png"
    alt="Project Image"
    className="w-full h-full object-cover"
    width={500}
    height={500}
  />
  <button className="absolute bottom-1 left-0 px-7 py-4 uppercase tracking-widest bg-white text-black hover:bg-gray-200">
    View Project →
  </button>
</div>
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row justify-between items-center my-12 px-6 lg:px-20">
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <img src="/images/1.png" alt="Project 1" className="w-full h-auto" />
          <img src="/images/2.png" alt="Project 2" className="w-full h-auto" />
          <img src="/images/3.png" alt="Project 3" className="w-full h-auto" />
        </div>
        <div className="mt-8 md:mt-0 ml-10 md:w-1/2">
          <h2 className="text-4xl font-bold">About</h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard since the 1500s.
          </p>
          <button className="mt-6 px-6 py-2 bg-black text-white hover:bg-gray-700">
            Read More →
          </button>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Main Focus / Mission Statement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-5xl font-extrabold">1</h3>
              <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <h3 className="text-5xl font-extrabold">2</h3>
              <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
<section className="py-12 px-6">
  <div className="text-center">
    <h2 className="text-3xl font-light text-gray-600 mb-8">Our Projects</h2>
  </div>

  {/* Projects Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

    {/* First Large Project - Sample Project */}
    <div className="relative col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 row-span-2">
      <img
        src="/images/8.png"
        alt="Sample Project"
        className="w-full h-full object-cover"
      />
      <div className="absolute hover:bg-opacity-0 inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-6">
        <h3 className="text-white text-2xl font-bold">Sample Project</h3>
        <a
          href="#"
          className="text-white mt-4 inline-block border-b border-white text-sm"
        >
          View More &rarr;
        </a>
      </div>
    </div>

    {/* Other Projects */}
    <div className="relative">
      <img
        src="/images/4.png"
        alt="Project 2"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="relative">
      <img
        src="/images/5.png"
        alt="Project 3"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="relative">
      <img
        src="/images/6.png"
        alt="Project 4"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="relative">
      <img
        src="/images/7.png"
        alt="Project 5"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* All Projects Button */}
  <div className="mt-8 text-center">
    <a
      href="#"
      className="inline-block bg-gray-900 text-white py-3 px-8 rounded-md text-sm uppercase tracking-wider"
    >
      All Projects &rarr;
    </a>
  </div>
</section>



      {/* Contact Form */}
      <section className="bg-gray-100 py-12">
        <h2 className="text-center text-4xl font-bold mb-6">Contact Us</h2>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 lg:px-20">
          <form className="md:w-1/2 space-y-4">
            <input type="text" placeholder="Name" className="w-full p-4 border border-gray-300" />
            <input type="email" placeholder="Email" className="w-full p-4 border border-gray-300" />
            <input type="text" placeholder="Interested In" className="w-full p-4 border border-gray-300" />
            <textarea placeholder="Message" className="w-full p-4 border border-gray-300"></textarea>
            <button className="mt-6 px-6 py-2 bg-black text-white hover:bg-gray-700">
              Send Email →
            </button>
          </form>
          <div className="mt-8 h md:mt-0 md:w-2/5">
            <img src="/images/contact.png" alt="Contact Person" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
