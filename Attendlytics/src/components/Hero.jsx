export default function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
          Smart Classroom Attendance <br />
          <span className="text-accent">Made Simple</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Transform your classroom management with AI-powered attendance
          tracking and advanced analytics.
        </p>
        <button className="bg-accent text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent/90 transition-all">
          Start Free Trial
        </button>
      </div>
    </section>
  );
}
