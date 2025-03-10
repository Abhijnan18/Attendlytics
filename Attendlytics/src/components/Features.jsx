import { features } from "../constants";

export default function Features() {
  return (
    <section className="py-20 px-6 bg-[#050505]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-gray-100">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 rounded-xl border border-gray-800"
            >
              <div className="text-gray-400 mb-4 text-2xl">➤</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
