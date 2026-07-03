export function Resources() {
  const documentationArticles = [
    { title: "Getting Started with Inferno JS Core", desc: "Understand the structural properties and low memory layouts.", category: "Core Basics" },
    { title: "Fine-tuning Component Diff Processes", desc: "Deep dive optimizations across complex nested virtual DOM layouts.", category: "Performance" },
    { title: "Configuring Apache Server Routing Paths", desc: "Map static route catch-alls across historical tracking extensions.", category: "DevOps Configuration" },
    { title: "Utilizing Modern CSS Engine Extensions", desc: "Leverage CSS architecture within component layer trees safely.", category: "Layout Styling" }
  ];

  return (
    <div class="py-6">
      <div class="text-center max-w-2xl mx-auto mb-10">
        <h2 class="text-3xl font-extrabold text-gray-900">Knowledgebase & Technical Resources</h2>
        <p class="mt-3 text-gray-600">Find official architectural deep dives, developer resources, and tutorials.</p>
        <div class="mt-6 max-w-md mx-auto">
          <input type="text" placeholder="Search knowledge documentation modules..." class="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" />
        </div>
      </div>

      <div class="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {documentationArticles.map(article => (
          <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-xs hover:shadow-sm transition group cursor-pointer">
            <span class="inline-block text-xs font-bold uppercase px-2 py-1 bg-indigo-50 text-indigo-700 rounded mb-3">{article.category}</span>
            <h3 class="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition mb-2">{article.title}</h3>
            <p class="text-gray-600 text-sm">{article.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}