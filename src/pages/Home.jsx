export function Home() {
  return (
    <div class="space-y-12">
      <div class="text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl shadow-xl px-6">
        <h1 class="text-4xl md:text-6xl font-black tracking-tight mb-4">
          Lightning Fast Web Experiences
        </h1>
        <p class="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          Built with Inferno JS for extreme runtime performance and styled with the effortless utility of Tailwind CSS.
        </p>
        <div class="flex justify-center gap-4">
          <button class="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-50 transition cursor-pointer">
            Get Started
          </button>
          <button class="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition cursor-pointer">
            Learn More
          </button>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-xl shadow-xs border border-gray-100">
          <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-xl mb-4">🚀</div>
          <h3 class="text-xl font-bold mb-2">Blazing Speed</h3>
          <p class="text-gray-600">Inferno is one of the absolute fastest UI libraries in existence, leaving standard frameworks in the dust.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-xs border border-gray-100">
          <div class="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center font-bold text-xl mb-4">🎨</div>
          <h3 class="text-xl font-bold mb-2">Modern Styling</h3>
          <p class="text-gray-600">Tailwind configuration lets you style directly within components with blistering layout performance.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-xs border border-gray-100">
          <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center font-bold text-xl mb-4">📦</div>
          <h3 class="text-xl font-bold mb-2">Tiny Footprint</h3>
          <p class="text-gray-600">Extremely compressed bundle sizes ensure instant time-to-interactive metric milestones.</p>
        </div>
      </div>
    </div>
  );
}