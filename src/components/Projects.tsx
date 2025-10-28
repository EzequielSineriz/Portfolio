import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"; // Importa el CSS de navegación
import "swiper/css/pagination"; // Importa el CSS de paginación

import agregarClienteImg from '../img/ProyectoEstetica/AgregarCliente.png';
import agregarTurnoImg from '../img/ProyectoEstetica/AgregarTurno.png';
import calendarioImg from '../img/ProyectoEstetica/Calendario.png';
import clientesImg from '../img/ProyectoEstetica/Clientes.png';
import dashboardImg from '../img/ProyectoEstetica/DashBoard.png';
import editarTurnosImg from '../img/ProyectoEstetica/EditarTurnos.png';
import loginImg from '../img/ProyectoEstetica/log-in.png';



import clientesComercio from "../img/ProyectoComercio/Clientes.png";
import dashboardComercio from "../img/ProyectoComercio/Dashboard.png";
import productosComercio from "../img/ProyectoComercio/Productos.png";
import ventasComercio from "../img/ProyectoComercio/Venta.png";
import ProveedoresComercio from "../img/ProyectoComercio/Proveedores.png";

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  images?: string[]; // ✅ nuevo campo para el carrusel
}

const projects: Project[] = [
  {
    id: 1,
    name: "Estetica Integral de Belleza",
    description: "AppEstetica es una aplicación web moderna para la gestión integral de una estética corporal, optimizando la organización de clientes, empleados, turnos y servicios.Su interfaz responsiva y estilo SPA permite un control eficiente y visualmente agradable de todas las operaciones.",
    technologies: ["Java", "Spring Boot", "Spring Security","JWT" ,"Docker", "MySQL", "Postman"],
    githubUrl: "https://github.com/EzequielSineriz/EsteticaFrontBack",
    liveUrl: "https://demo.ecommerce-platform.com",
    featured: true,
    images: [
      agregarClienteImg,
      agregarTurnoImg,
      calendarioImg,
      clientesImg,
      dashboardImg,
      editarTurnosImg,
      loginImg
    ]
  },
  {
    id: 2,
    name: "Gestión de Comercio",
    description: "Una API REST completa para la gestión de un comercio, que incluye funcionalidades para manejar clientes, productos, ventas y un dashboard para visualización de datos. Construido para ser robusto y escalable.",
    technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL","Postman", "Docker"],
    githubUrl: "https://github.com/EzequielSineriz/Productos_Clientes_Ventas_Proveedores/tree/master",
    featured: true,
    images: [
      dashboardComercio,
      clientesComercio,
      productosComercio,
      ventasComercio,
      ProveedoresComercio
    ]
  },
  {
    id: 3,
    name: "Gimnasio Full Stack",
    description: "En proceso de Codificacion....",
    technologies: ["Python", "Jenkins", "Terraform", "AWS", "GitLab CI", "Ansible"],
    githubUrl: "https://github.com/username/devops-suite",
    featured: false
  },
  {
    id: 4,
    name: "Taller Mecanico",
    description: "En proceso de Codificacion....",
    technologies: ["Java", "Spring Security", "JWT", "MySQL", "OAuth 2.0"],
    githubUrl: "https://github.com/username/auth-service",
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proyectos <span className="text-cyan-400">Destacados</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
           Una colección de sistemas backend y API que he diseñado y desarrollado, centrándome en la escalabilidad, el rendimiento y la facilidad             de mantenimiento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={project.id}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              {project.images && project.images.length > 0 && (
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="mb-6 rounded-lg overflow-hidden"
              >
                {project.images.map((img, i) => (
                <SwiperSlide key={i} className="flex justify-center items-center">
               <img
               src={img}
                alt={`${project.name} screenshot ${i + 1}`}
                className="w-full h-64 md:h-80 lg:h-96 object-contain rounded-lg"
               />
                </SwiperSlide>
                ))}
               </Swiper>
              )}
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-cyan-400/10 text-cyan-300 rounded-full text-sm font-medium border border-cyan-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Github size={18} />
                  Code
                </a>

              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={project.id}
              className="bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-cyan-400/30 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-white mb-3">
                {project.name}
              </h4>
              <p className="text-slate-400 mb-4 text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-cyan-400/5 text-cyan-400 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm"
              >
                <Github size={16} />
                View Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}