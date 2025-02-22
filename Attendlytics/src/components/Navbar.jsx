export default function Navbar() {
  return (
    <nav className="p-6 border-b border-gray-800/50 bg-[#050505]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl text-gray-100">
            <span className="font-bold">A</span>
            <span className="text-3xl italic text-gray-100">L</span>
          </span>
        </div>
        <button className="bg-gray-800 text-gray-100 px-6 py-2 rounded-full hover:bg-gray-700 transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  );
}
