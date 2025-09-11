import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-400">
              © 2025 Ezequiel Sineriz.Pagina creada con React, TypeScript, y Tailwind CSS.
            </p>
            <p className="text-slate-500 text-sm mt-2">
              La pasion por el codigo limpio y una buena experiencia de usuario.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;