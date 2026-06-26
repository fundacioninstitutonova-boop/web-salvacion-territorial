import React, { useState } from 'react';
import { ARTICULOS_SABERES } from '../data';
import { SaberArticulo } from '../types';
import { BookOpen, User, Clock, ArrowRight, X, Heart, Sparkles, AlertCircle } from 'lucide-react';

export default function Saberes() {
  const [selectedArticulo, setSelectedArticulo] = useState<SaberArticulo | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('todos');

  const filteredArticulos = categoryFilter === 'todos' 
    ? ARTICULOS_SABERES 
    : ARTICULOS_SABERES.filter(art => art.categoria === categoryFilter);

  return (
    <section id="saberes" className="py-24 bg-brand-charcoal text-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-earth/15 text-brand-earth-light px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="h-4 w-4 animate-pulse" />
            <span>Centro de Saberes de Salvación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-white leading-tight">
            Bitácora Ambiental y <span className="text-brand-green not-italic font-sans font-bold uppercase tracking-tight">Crónicas del Territorio</span>
          </h2>
          <div className="w-20 h-1 bg-brand-earth mx-auto mt-3 rounded-full"></div>
          <p className="text-white/70 mt-4 text-sm sm:text-base leading-relaxed">
            Consumimos y producimos conocimiento abierto. Explora nuestras guías técnicas de bioingeniería vegetal, crónicas escritas por líderes comunales de Soacha, e investigaciones pedagógicas en neurodidáctica.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['todos', 'Bioingeniería', 'Neurodidáctica', 'Comunidad'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`text-xs font-mono font-bold uppercase tracking-widest px-4 py-2.5 rounded-full border transition cursor-pointer ${
                categoryFilter === cat 
                  ? 'bg-brand-earth border-brand-earth text-white shadow-md' 
                  : 'bg-brand-charcoal-light border-white/10 text-white/80 hover:border-white/20'
              }`}
            >
              {cat === 'todos' ? 'Todos los Saberes' : cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredArticulos.map((art) => (
            <article 
              key={art.id}
              className="bg-brand-sand border border-white/10 rounded-2xl overflow-hidden hover:shadow-xl hover:border-brand-green-light/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image header with category overlay */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img 
                    src={art.imagen} 
                    alt={art.titulo} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-brand-charcoal/90 backdrop-blur text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {art.categoria}
                  </span>
                </div>

                {/* Article Content Preview */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-4 text-[10px] text-white/40 font-mono">
                    <span className="flex items-center"><User className="h-3 w-3 mr-1" /> {art.autor}</span>
                    <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> {art.lecturaMinutos} min lectura</span>
                  </div>

                  <h3 className="font-extrabold text-white text-lg leading-snug hover:text-brand-earth-light transition duration-200">
                    {art.titulo}
                  </h3>

                  <p className="text-xs text-white/60 leading-relaxed line-clamp-3">
                    {art.resumen}
                  </p>
                </div>
              </div>

              {/* Card Footer with Link */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setSelectedArticulo(art)}
                  className="w-full py-2.5 border border-brand-earth/30 hover:border-brand-earth bg-brand-charcoal hover:bg-brand-earth/10 text-white font-bold rounded-xl text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center space-x-1 cursor-pointer"
                >
                  <span>Leer Artículo Completo</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ARTICLE READER MODAL (Beautiful full content render) */}
      {selectedArticulo && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-charcoal/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-brand-charcoal-light text-brand-cream rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto flex flex-col justify-between border border-white/10">
            
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gray-100">
              <img 
                src={selectedArticulo.imagen} 
                alt={selectedArticulo.titulo} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="bg-brand-earth text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full max-w-max mb-3">
                  {selectedArticulo.categoria}
                </span>
                <h4 className="text-xl sm:text-3xl font-black leading-tight uppercase">
                  {selectedArticulo.titulo}
                </h4>
              </div>

              {/* Close Button overlay */}
              <button 
                onClick={() => setSelectedArticulo(null)}
                className="absolute top-4 right-4 bg-brand-charcoal/85 backdrop-blur text-gray-300 hover:text-white p-2 rounded-full transition cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Body Paragraphs */}
            <div className="p-6 lg:p-8 space-y-5 overflow-y-auto">
              
              {/* Author & Meta Row */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-white/40 font-mono border-b border-white/5 pb-4">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green-light font-bold">
                    {selectedArticulo.autor.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{selectedArticulo.autor}</p>
                    <p className="text-[10px] text-white/40">{selectedArticulo.rol}</p>
                  </div>
                </div>
                <div className="text-right text-[10px]">
                  <p><strong>Publicado:</strong> {selectedArticulo.fecha}</p>
                  <p className="flex items-center justify-end"><Clock className="h-3 w-3 mr-1 text-brand-earth-light" /> {selectedArticulo.lecturaMinutos} minutos de lectura</p>
                </div>
              </div>

              {/* Paragraphs */}
              <div className="space-y-4 text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                {selectedArticulo.contenido.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>

              {/* Community Advice Banner */}
              <div className="mt-8 p-4 bg-brand-charcoal border border-white/5 rounded-xl flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-brand-earth shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="block text-xs font-bold text-white">Guía Práctica Comunitaria:</span>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Si te encuentras en un barrio de Soacha con riesgo pluvial activo, propaga Vetiver o descarga nuestra guía ilustrada. Recuerda activar el círculo de emergencias de tu JAC local ante desbordamientos continuos.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Close Actions */}
            <div className="px-6 py-4 bg-brand-charcoal/45 border-t border-white/5 rounded-b-2xl flex justify-end">
              <button 
                onClick={() => setSelectedArticulo(null)}
                className="bg-brand-earth hover:brightness-110 text-white font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-widest transition cursor-pointer"
              >
                Cerrar Lectura
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
