export default function Navbar() {
  return (
    <nav className="p-6 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-accent">Attendlytics</span>
        </div>
        <button className="bg-accent/10 hover:bg-accent/20 text-accent px-6 py-2 rounded-full transition-all">
          Get Started
        </button>
      </div>
    </nav>
  );
}
