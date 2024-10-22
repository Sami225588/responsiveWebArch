// page.tsx
import Link from "next/link";

export default function Home() {
  return(
    <div>
        <section className="py-12 px-4">
  <div className="text-left mb-8">
    <h2 className="text-4xl font-light text-gray-600">Photo</h2>
    <h2 className="text-5xl font-bold text-gray-800">Gallery</h2>
  </div>

  {/* Gallery Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
    <div className="bg-gray-200 w-full h-48"></div>
    <div>
      <img
        src="/images/g1.png"
        alt="Gallery 1"
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <img
        src="/images/g2.png"
        alt="Gallery 2"
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <img
        src="/images/g3.png"
        alt="Gallery 3"
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <img
        src="/images/g4.png"
        alt="Gallery 4"
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <img
        src="/images/g5.png"
        alt="Gallery 5"
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <img
        src="/images/g6.png"
        alt="Gallery 6"
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <img
        src="/images/g7.png"
        alt="Gallery 7"
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <img
        src="/images/g8.png"
        alt="Gallery 8"
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <img
        src="/images/g9.png"
        alt="Gallery 9"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</section>

    </div>
  )
}
