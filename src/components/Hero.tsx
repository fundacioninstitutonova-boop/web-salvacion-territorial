import React, { useState } from 'react';
import { ShieldAlert, CloudRain, Shield, PhoneCall, ArrowRight, Activity, Info } from 'lucide-react';

export default function Hero() {
  const [isAlertActive, setIsAlertActive] = useState(true);

  return (
    <section id="inicio" className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center bg-gradient-to-br from-brand-charcoal via-[#1a2318] to-brand-charcoal overflow-hidden text-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[15%] left-[5%] w-96 h-96 rounded-full bg-brand-green filter blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-brand-earth filter blur-[150px]"></div>
        {/* Simple topographical grid line overlay simulation */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-12 gap-12 items-center z-10">
        {/* Main Info */}
        <div className="md:col-span-7 flex flex-col space-y-6">
          {/* Support / Technical Backup Badge */}
          <div className="inline-flex flex-wrap items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-brand-green-light max-w-max">
            <Shield className="h-4 w-4 text-brand-green-light" />
            <span>Respaldo Operativo:</span>
            <span className="text-white font-semibold">Bomberos & Defensa Civil</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif italic leading-[1.1] text-white">
            Soacha Resiliente: <br />
            <span className="block text-brand-green not-italic font-sans font-bold uppercase tracking-tighter text-3xl sm:text-4xl lg:text-5xl mt-2">
              Soberanía Territorial
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/70 font-light leading-relaxed max-w-xl">
            Somos la primera <strong>Escuela Itinerante de Gestión del Riesgo Pluvial</strong> en Soacha. 
            Fusionamos rigor técnico, neurodidáctica adaptativa y acción comunitaria directa para proteger vidas e instalar barreras ecológicas en nuestras laderas.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#escuela" 
              className="bg-brand-earth hover:brightness-110 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-brand-earth/20 text-center text-sm uppercase tracking-widest flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Únete a la Escuela</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a 
              href="#impacto" 
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold px-8 py-4 rounded-xl transition duration-200 text-center text-sm uppercase tracking-widest flex items-center justify-center cursor-pointer"
            >
              Conoce nuestro impacto
            </a>
          </div>

          {/* Quick Technical stats */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div>
              <span className="block text-2xl lg:text-3xl font-extrabold text-brand-earth-light font-mono">42%</span>
              <span className="block text-xs text-gray-400">Pendiente promedio en laderas críticas</span>
            </div>
            <div>
              <span className="block text-2xl lg:text-3xl font-extrabold text-brand-green-light font-mono">15m</span>
              <span className="block text-xs text-gray-400">Esqueje de raíz para anclaje de suelo</span>
            </div>
            <div>
              <span className="block text-2xl lg:text-3xl font-extrabold text-brand-blue-light font-mono">+1200</span>
              <span className="block text-xs text-gray-400">Familias protegidas en fase de despliegue</span>
            </div>
          </div>
        </div>

        {/* Dynamic Alert Panel / Simulation */}
        <div className="md:col-span-5 bg-brand-charcoal/80 border border-white/10 rounded-2xl p-6 shadow-2xl relative backdrop-blur-md">
          <div className="absolute top-4 right-4 flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Simulador SAT</span>
            <div className="h-2 w-2 rounded-full bg-brand-green animate-pulse"></div>
          </div>

          <div className="flex items-center space-x-3 mb-6">
            <Activity className="h-5 w-5 text-brand-earth-light" />
            <h3 className="font-bold text-sm tracking-widest uppercase font-mono text-gray-200">
              Sistema de Alerta Temprana (SAT)
            </h3>
          </div>

          {/* Alert State Box */}
          <div className={`p-5 rounded-xl border transition-all duration-300 ${
            isAlertActive 
              ? 'bg-red-950/40 border-red-500/30 text-red-100' 
              : 'bg-brand-green/10 border-brand-green/30 text-brand-green-light'
          }`}>
            <div className="flex items-start space-x-3">
              <CloudRain className={`h-6 w-6 mt-0.5 shrink-0 ${isAlertActive ? 'text-red-400 animate-bounce' : 'text-brand-green-light'}`} />
              <div className="space-y-1">
                <span className="block text-xs font-mono font-bold uppercase tracking-wider">
                  Estado de Monitoreo:
                </span>
                <span className={`block text-lg font-bold ${isAlertActive ? 'text-red-300' : 'text-brand-green-light'}`}>
                  {isAlertActive ? '🚨 ALERTA ALTA POR LLUVIAS' : '✅ ALERTA AMARILLA / PREVENTIVA'}
                </span>
                <p className="text-xs text-gray-300 leading-relaxed pt-1">
                  {isAlertActive 
                    ? 'Precipitación acumulada supera 45mm en Comuna 4 (Altos de Cazucá). Activación de red de líderes de la Escuela Itinerante para inspección de taludes y barreras de Vetiver.' 
                    : 'Condición atmosférica estable. Humedad de suelo moderada. El Círculo de Cuidado Territorial está en fase de monitoreo regular de plonómetros.'
                  }
                </p>
              </div>
            </div>

            {/* Emergency Hotline details */}
            {isAlertActive && (
              <div className="mt-4 pt-3 border-t border-red-500/20 flex items-center justify-between text-xs text-red-200 font-mono">
                <span>Canal de Emergencia JAC:</span>
                <span className="font-bold flex items-center space-x-1">
                  <PhoneCall className="h-3.5 w-3.5" />
                  <span>312-SALVACION</span>
                </span>
              </div>
            )}
          </div>

          {/* Toggle Controller to demonstrate professional capability */}
          <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/5 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-400 font-mono">Cambiar simulación climática:</span>
              <button 
                onClick={() => setIsAlertActive(!isAlertActive)}
                className="bg-brand-earth hover:bg-brand-earth-light text-white font-mono font-bold px-3 py-1 rounded text-[10px] transition cursor-pointer"
              >
                Simular {isAlertActive ? 'Día Seco' : 'Frente de Lluvias'}
              </button>
            </div>
            
            <div className="flex items-start space-x-2 text-xs text-gray-400 leading-relaxed bg-white/5 p-2 rounded border border-white/5">
              <Info className="h-4 w-4 shrink-0 text-brand-green-light mt-0.5" />
              <p>
                Este simulador representa el protocolo que entrenamos en los barrios: los líderes comunitarios reciben reportes meteorológicos y los asocian a las acciones de mitigación de la Escuela Itinerante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
