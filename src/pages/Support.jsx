export function Support() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your ticket summary message has been securely submitted.');
  };

  return (
    <div class="max-w-4xl mx-auto py-6 grid md:grid-cols-5 gap-8">
      <div class="md:col-span-2 space-y-6">
        <div>
          <h2 class="text-3xl font-extrabold text-gray-900">Get in touch</h2>
          <p class="mt-3 text-gray-600">Have engineering questions or operational hurdles? File an official support request ticket.</p>
        </div>
        <div class="space-y-4 text-gray-600">
          <p class="flex items-center gap-3">
            <span class="font-bold text-indigo-600">✉</span> support@example.com
          </p>
          <p class="flex items-center gap-3">
            <span class="font-bold text-indigo-600">📞</span> +1 (555) 019-2834
          </p>
        </div>
      </div>

      <div class="md:col-span-3 bg-white p-6 rounded-2xl shadow-xs border border-gray-200">
        <form onSubmit={handleSubmit} class="space-y-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input type="email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">Message Detail</label>
            <textarea rows="4" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
          </div>
          <button type="submit" class="w-full bg-indigo-600 text-white font-medium py-2.5 rounded-lg hover:bg-indigo-700 transition shadow-sm cursor-pointer">
            Submit Support Request
          </button>
        </form>
      </div>
    </div>
  );
}