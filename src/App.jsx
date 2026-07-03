import { Component } from 'inferno';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { Support } from './pages/Support';
import { Resources } from './pages/Resources';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home'
    };
  }

  renderPage() {
    switch (this.state.currentPage) {
      case 'home': return <Home />;
      case 'pricing': return <Pricing />;
      case 'support': return <Support />;
      case 'resources': return <Resources />;
      default: return <Home />;
    }
  }

  setPage(page) {
    this.setState({ currentPage: page });
  }

  render() {
    const { currentPage } = this.state;
    const navItems = [
      { id: 'home', label: 'Home' },
      { id: 'pricing', label: 'Pricing Plan' },
      { id: 'resources', label: 'Knowledgebase' },
      { id: 'support', label: 'Contact Support' }
    ];

    return (
      <div class="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        {/* Navbar */}
        <header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-xs">
          <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <div class="flex items-center gap-2 cursor-pointer" onClick={() => this.setPage('home')}>
              <span class="text-2xl">🔥</span>
              <span class="font-black text-xl tracking-tight bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                InfernoApp
              </span>
            </div>
            
            <nav class="flex gap-1">
              {navItems.map(item => (
                <button 
                  onClick={() => this.setPage(item.id)}
                  class={`px-3 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${
                    currentPage === item.id 
                      ? 'bg-indigo-50 text-indigo-600 font-semibold' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* Content Container */}
        <main class="flex-1 max-w-6xl w-full mx-auto px-4 py-10">
          {this.renderPage()}
        </main>

        {/* Global Footer Layout */}
        <footer class="bg-white border-t border-gray-200 text-center py-6 text-sm text-gray-500">
          <p>&copy; 2026 InfernoApp Architecture. Configured cleanly via Vite & Tailwind CSS.</p>
        </footer>
      </div>
    );
  }
}