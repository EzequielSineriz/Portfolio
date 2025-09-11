import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, MapPin } from 'lucide-react';
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
    await emailjs.send(
      'service_d0qkr9n',   // tu service ID de EmailJS
      'template_v40tpdv',  // tu template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'xTrZVFjweCfMJSb2k'    // tu public key de EmailJS
    );

    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    console.error(error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 5000);
  }
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
             <span className="text-cyan-400">Contactame</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
           Listo para hablar sobre tu próximo proyecto o explorar oportunidades de colaboración?
            Me encantaría saber de ti y explorar cómo podemos construir algo juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Mail className="text-cyan-400" size={24} />
              Enviame un Mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="Nombre o Compania"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                  Email 
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="tu_email@gmail.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  placeholder="Hablame de tu proyecto, ideas o cualquier consulta que tengas."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensaje
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="text-center text-green-400 font-medium">
                  ✨ Mensaje enviado con éxito! Gracias por contactarme.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-slate-400">ezequielsineriz@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Locacion</p>
                    <p className="text-slate-400">Buenos Aires, CABA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Seguime en mis Redes
              </h3>
              
              <div className="flex gap-4">
                <a
                  href="https://github.com/EzequielSineriz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="text-slate-400 group-hover:text-cyan-400" size={24} />
                </a>
                
                <a
                  href="https://linkedin.com/in/braian-ezequiel-siñeriz-7a412b105/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="text-slate-400 group-hover:text-cyan-400" size={24} />
                </a>
               
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Abierto a Nuevas Oportunidades
              </h3>
              <p className="text-slate-300 mb-4">
               
              Actualmente estoy disponible para proyectos freelance y oportunidades de tiempo completo. Hablemos
               sobre cómo puedo contribuir al éxito de tu equipo.
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}