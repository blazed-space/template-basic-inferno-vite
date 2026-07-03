export function Pricing() {
  return (
    <div class="py-4">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Simple, Transparent Pricing</h2>
        <p class="mt-4 text-xl text-gray-600">Choose the perfect tier for your application needs.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-4">
        {/* Tier 1 */}
        <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-semibold text-gray-900">Starter</h3>
            <p class="mt-4 text-gray-500">Perfect for small side projects and learning.</p>
            <p class="mt-6 flex items-baseline text-gray-900">
              <span class="text-5xl font-extrabold tracking-tight">$0</span>
              <span class="ml-1 text-xl font-semibold text-gray-500">/mo</span>
            </p>
            <ul class="mt-6 space-y-4 text-gray-600">
              <li class="flex items-center gap-2">✓ 1,000 monthly requests</li>
              <li class="flex items-center gap-2">✓ Community support channels</li>
              <li class="flex items-center gap-2">✓ Core analytics metrics</li>
            </ul>
          </div>
          <button class="mt-8 w-full bg-gray-800 text-white font-medium py-3 rounded-xl hover:bg-gray-700 transition cursor-pointer">Get Started</button>
        </div>

        {/* Tier 2 */}
        <div class="bg-white rounded-2xl shadow-md border-2 border-indigo-600 p-8 flex flex-col justify-between relative md:scale-105">
          <span class="absolute top-0 right-6 transform -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">Popular</span>
          <div>
            <h3 class="text-xl font-semibold text-gray-900">Pro</h3>
            <p class="mt-4 text-gray-500">For scaling production applications.</p>
            <p class="mt-6 flex items-baseline text-gray-900">
              <span class="text-5xl font-extrabold tracking-tight">$29</span>
              <span class="ml-1 text-xl font-semibold text-gray-500">/mo</span>
            </p>
            <ul class="mt-6 space-y-4 text-gray-600">
              <li class="flex items-center gap-2">✓ 50,000 monthly requests</li>
              <li class="flex items-center gap-2">✓ Priority email responses</li>
              <li class="flex items-center gap-2">✓ Advanced analytical metrics</li>
              <li class="flex items-center gap-2">✓ Custom domain routing</li>
            </ul>
          </div>
          <button class="mt-8 w-full bg-indigo-600 text-white font-medium py-3 rounded-xl hover:bg-indigo-700 transition cursor-pointer">Upgrade to Pro</button>
        </div>

        {/* Tier 3 */}
        <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-semibold text-gray-900">Enterprise</h3>
            <p class="mt-4 text-gray-500">For high-throughput operational systems.</p>
            <p class="mt-6 flex items-baseline text-gray-900">
              <span class="text-5xl font-extrabold tracking-tight">$149</span>
              <span class="ml-1 text-xl font-semibold text-gray-500">/mo</span>
            </p>
            <ul class="mt-6 space-y-4 text-gray-600">
              <li class="flex items-center gap-2">✓ Unlimited API workflows</li>
              <li class="flex items-center gap-2">✓ Dedicated account manager</li>
              <li class="flex items-center gap-2">✓ Enterprise SLA provisions</li>
              <li class="flex items-center gap-2">✓ SSO Identity mapping</li>
            </ul>
          </div>
          <button class="mt-8 w-full bg-gray-800 text-white font-medium py-3 rounded-xl hover:bg-gray-700 transition cursor-pointer">Contact Sales</button>
        </div>
      </div>
    </div>
  );
}