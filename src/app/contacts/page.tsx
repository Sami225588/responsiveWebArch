export default function Home() {
return(
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
)
}