import React, { useState, useEffect } from 'react';
import { Download, ChevronDown } from 'lucide-react';


const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/cv_ezequiel_sineriz.pdf';
  link.download = 'cv_Ezequiel_Sineriz.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Back-End Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Ezequiel <span className="text-cyan-400">Siñeriz</span>
          </h1>
          <div className="h-12 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl text-cyan-300 font-light">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
         Soluciones robustas del lado del servidor y arquitecturas escalables.
          Apasionados por el código limpio, la optimización del rendimiento y la creación de sistemas
          que impulsan experiencias de usuario excepcionales.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Echa un vistazo a los Proyectos!
          </button>
          
          <button 
           onClick={handleDownload}
          className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            <Download size={20} />
            Descargar CV
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('projects')}
          className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}