import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Database, 
  Cloud, 
  Code, 
  Shield,
  PersonStandingIcon,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Terminal,
  Layers,
  Lock,
  Globe,
  HardDrive,
  Leaf,
  Network,
  Box,
  Workflow,
  Hexagon
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
  description: string;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Backend Languages",
    icon: <Code size={24} />,
    color: "from-blue-500 to-blue-600",
    skills: [
      { 
        name: "Java", 
        icon: <Coffee className="text-orange-500\" size={32} />, 
        category: "language",
        description: "Lenguaje de programación orientado a objetos, ampliamente usado para aplicaciones empresariales, móviles y backend por su portabilidad, rendimiento y robustez."
      },
      { 
        name: "Python", 
        icon: <Terminal className="text-green-500" size={32} />, 
        category: "language",
        description: "Lenguaje ideal para desarrollo web, ciencia de datos, automatización, inteligencia artificial y scripting."
      },
      { 
        name: "C++", 
        icon: <Server className="text-green-600\" size={32} />, 
        category: "language",
        description: "Lenguaje de programación de alto rendimiento, usado en sistemas embebidos, videojuegos y software que requiere control de memoria."
      },
      { 
        name: "C#", 
        icon: <Code className="text-purple-500" size={32} />, 
        category: "language",
        description: ".NET applications and enterprise solutions"
      }
    ]
  },
  {
    name: "Frameworks & Tools",
    icon: <Layers size={24} />,
    color: "from-green-500 to-green-600",
    skills: [
      { 
        name: "Spring Boot", 
        icon: <Leaf className="text-green-500\" size={32} />, 
        category: "framework",
        description: "Framework Java que simplifica la creación de aplicaciones backend robustas y escalables mediante configuración automática y arquitectura modular."
      },
      { 
        name: "Express.js", 
        icon: <Hexagon className="text-gray-400" size={32} />, 
        category: "framework",
        description: "Framework minimalista para Node.js que permite crear APIs REST de manera rápida y flexible con middleware y enrutamiento sencillo."
      },
      { 
        name: "Postman", 
        icon: <PersonStandingIcon className="text-blue-500\" size={32} />, 
        category: "framework",
        description: "Es una plataforma API que sirve como herramienta fundamental para desarrolladores en el proceso de creación, prueba, documentación y colaboración en APIs "
      }

    ]
  },
  {
    name: "Databases",
    icon: <Database size={24} />,
    color: "from-purple-500 to-purple-600",
    skills: [
      { 
        name: "PostgreSQL", 
        icon: <Database className="text-blue-600\" size={32} />, 
        category: "database",
        description: "Sistema de base de datos relacional y de código abierto, conocido por su estabilidad, extensibilidad y soporte avanzado de consultas."
      },
      { 
        name: "MySQL", 
        icon: <HardDrive className="text-orange-500" size={32} />, 
        category: "database",
        description: "Base de datos relacional popular y eficiente, ideal para aplicaciones web y empresariales gracias a su velocidad y facilidad de uso."
      },
      { 
        name: "MongoDB", 
        icon: <Database className="text-green-500\" size={32} />, 
        category: "database",
        description: "Base de datos NoSQL orientada a documentos, ideal para manejar datos no estructurados y escalar aplicaciones modernas con flexibilidad."
      }

    ]
  },
  {
    name: "Cloud & DevOps",
    icon: <Cloud size={24} />,
    color: "from-orange-500 to-orange-600",
    skills: [
      { 
        name: "AWS", 
        icon: <Cloud className="text-orange-500\" size={32} />, 
        category: "cloud",
        description: "Plataforma de servicios en la nube que ofrece infraestructura escalable, almacenamiento, bases de datos, cómputo y herramientas de desarrollo."
      },
      { 
        name: "Docker", 
        icon: <Box className="text-blue-500" size={32} />, 
        category: "devops",
        description: "Herramienta de contenedores que permite empaquetar aplicaciones con sus dependencias para ejecutarlas de forma consistente en cualquier entorno."
      },
      { 
        name: "Kubernetes", 
        icon: <Network className="text-blue-600\" size={32} />, 
        category: "devops",
        description: "Sistema de orquestación de contenedores que automatiza el despliegue, escalado y gestión de aplicaciones en contenedores."
      }

    ]
  },
  {
    name: "Security & Performance",
    icon: <Shield size={24} />,
    color: "from-red-500 to-red-600",
    skills: [
      { 
        name: "OAuth 2.0", 
        icon: <Lock className="text-green-500\" size={32} />, 
        category: "security",
        description: "Protocolo de autorización estándar que permite a aplicaciones acceder a recursos de usuario sin compartir credenciales directamente."
      },
      { 
        name: "JWT", 
        icon: <Shield className="text-blue-500" size={32} />, 
        category: "security",
        description: "JSON Web Tokens permiten la transmisión segura de información entre partes como tokens firmados digitalmente para autenticación y autorización."
      }
    ]
  },
  {
    name: "Architecture & Design",
    icon: <Workflow size={24} />,
    color: "from-cyan-500 to-cyan-600",
    skills: [
      { 
        name: "Microservices", 
        icon: <Network className="text-cyan-500\" size={32} />, 
        category: "architecture",
        description: "Distributed system architecture patterns"
      },
      { 
        name: "REST APIs", 
        icon: <Globe className="text-blue-500" size={32} />, 
        category: "architecture",
        description: "RESTful web service design and development"
      },
      { 
        name: "System Design", 
        icon: <Workflow className="text-indigo-500" size={32} />, 
        category: "architecture",
        description: "Scalable system architecture planning"
      }
    ]
  }
];

export default function Skills() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const currentCategory = skillCategories[currentCategoryIndex];
  const currentSkill = currentCategory.skills[currentSkillIndex];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSkillIndex(prev => {
        if (prev < currentCategory.skills.length - 1) {
          return prev + 1;
        } else {
          setCurrentCategoryIndex(prevCat => 
            prevCat < skillCategories.length - 1 ? prevCat + 1 : 0
          );
          return 0;
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [currentCategoryIndex, currentCategory.skills.length, isAutoPlaying]);

  const nextSkill = () => {
    setIsAutoPlaying(false);
    if (currentSkillIndex < currentCategory.skills.length - 1) {
      setCurrentSkillIndex(prev => prev + 1);
    } else {
      setCurrentCategoryIndex(prev => 
        prev < skillCategories.length - 1 ? prev + 1 : 0
      );
      setCurrentSkillIndex(0);
    }
  };

  const prevSkill = () => {
    setIsAutoPlaying(false);
    if (currentSkillIndex > 0) {
      setCurrentSkillIndex(prev => prev - 1);
    } else {
      setCurrentCategoryIndex(prev => 
        prev > 0 ? prev - 1 : skillCategories.length - 1
      );
      setCurrentSkillIndex(skillCategories[currentCategoryIndex === 0 ? skillCategories.length - 1 : currentCategoryIndex - 1].skills.length - 1);
    }
  };

  const selectCategory = (categoryIndex: number) => {
    setIsAutoPlaying(false);
    setCurrentCategoryIndex(categoryIndex);
    setCurrentSkillIndex(0);
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experiencia <span className="text-cyan-400">Técnica</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Un conjunto completo de herramientas desarrollado a través de años de experiencia práctica en desarrollo backend, arquitectura de sistemas y soluciones escalables.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => selectCategory(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                index === currentCategoryIndex
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-cyan-400'
              }`}
            >
              {category.icon}
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Main Carousel Display */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
            {/* Current Category Header */}
            <div className="text-center mb-8">
              <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${currentCategory.color} text-white mb-4`}>
                {currentCategory.icon}
                <span className="font-semibold">{currentCategory.name}</span>
              </div>
            </div>

            {/* Skill Display */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-slate-700/50 rounded-2xl flex items-center justify-center border border-slate-600 hover:border-cyan-400/50 transition-all duration-300">
                  {currentSkill.icon}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                {currentSkill.name}
              </h3>
              
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                {currentSkill.description}
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevSkill}
                className="flex items-center justify-center w-12 h-12 bg-slate-700 hover:bg-slate-600 text-white rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Skill Indicators */}
              <div className="flex gap-2">
                {currentCategory.skills.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentSkillIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSkillIndex
                        ? 'bg-cyan-400 scale-125'
                        : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSkill}
                className="flex items-center justify-center w-12 h-12 bg-slate-700 hover:bg-slate-600 text-white rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Auto-play Toggle */}
            <div className="text-center mt-6">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isAutoPlaying
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30'
                    : 'bg-slate-700 text-slate-300 border border-slate-600'
                }`}
              >
                {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="w-full bg-slate-700 rounded-full h-1">
              <div
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentCategoryIndex * skillCategories[0].skills.length + currentSkillIndex + 1) / 
                    (skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0))) * 100}%`
                }}
              />
            </div>
            <div className="flex justify-between text-sm text-slate-400 mt-2">
              <span>
                {currentCategoryIndex * skillCategories[0].skills.length + currentSkillIndex + 1} of{' '}
                {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} skills
              </span>
              <span>{currentCategory.name}</span>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Aprender es un viaje continuo
            </h3>
            <p className="text-slate-300 leading-relaxed">
            La tecnología evoluciona rápidamente, y yo también. Actualmente estoy explorando arquitecturas sin servidor, sistemas basados ​​en eventos y patrones avanzados nativos de la nube. 
            Me apasiona estar a la vanguardia de las mejores prácticas de desarrollo backend.
            </p>
          </div>
        </div>
      </div>
    </section>

    



  );
}