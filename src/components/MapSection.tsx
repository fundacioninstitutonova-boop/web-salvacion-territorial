import React, { useState } from 'react';
import { SECTORES_CRITICOS } from '../data';
import { SectorCritico } from '../types';
import { Map, MapPin, Compass, AlertTriangle, Layers, Percent, Activity, Sliders, ChevronRight } from 'lucide-react';

export default function MapSection() {
  const [selectedSectorId, setSelectedSectorId] = useState<string>('cazuca');
  const selectedSector = SECTORES_CRITICOS.find(s => s.id === selectedSectorId) || SECTORES_CRITICOS[0];

  // Map coordinate mock points for absolute positioning on our SVG contour map
  const mapHotspots = [
    { id: 'cazuca', x: '75%', y: '25%', name: 'Altos de Cazucá' },
    { id: 'la-florida', x: '45%', y: '65%', name: 'Altos de la Florida' },
    { id: 'tibanica', x: '82%', y: '78%', name: 'Quebrada Tibanica' },
    { id: 'loma-linda', x: '25%', y: '40%', name: 'Loma Linda' },
    { id: 'el-progreso', x: '35%', y: '20%', name: 'El Progreso Comuna 4' }
  ];

  return (
    <section id="mapa" className="py-24 bg-brand-charcoal text-white relative overflow-hidden">
      {/* Decorative vector grid overlay */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="10%" x2="100%" y2="10%" stroke="white" strokeWidth="1" />
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="white" strokeWidth="1" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeWidth="1" />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke="white" strokeWidth="1" />
          <line x1="0" y1="90%" x2="100%" y2="90%" stroke="white" strokeWidth="1" />
          <line x1="20%" y1="0" x2="20%" y2="100%" stroke="white" strokeWidth="1" />
          <line x1="40%" y1="0" x2="40%" y2="100%" stroke="white" strokeWidth="1" />
          <line x1="60%" y1="0" x2="60%" y2="100%" stroke="white" strokeWidth="1" />
          <line x1="80%" y1="0" x2="80%" y2="100%" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-brand-earth/10 text-brand-earth-light px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="h-4 w-4" />
            <span>Diagnóstico Geológico y Topográfico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-white leading-tight">
            Mapeo de Puntos Críticos y <span className="text-brand-green not-italic font-sans font-bold uppercase tracking-tight">Bioingeniería</span>
          </h2>
          <div className="w-20 h-1 bg-brand-earth mt-3 rounded-full"></div>
          <p className="text-white/70 mt-4 text-sm sm:text-base leading-relaxed">
            Nuestros consultores y tecnólogos realizan cartografías de campo en Soacha. 
            Haz clic en los puntos interactivos del plano topográfico para inspeccionar el nivel de riesgo geofísico y el plan de mitigación biológica de cada ladera.
          </p>
        </div>

        {/* Content Layout: Interactive Map + Technical Panel */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive Topo Map (LG: 7-columns) */}
          <div className="lg:col-span-7 bg-black/40 border border-white/10 rounded-2xl p-6 relative min-h-[380px] sm:min-h-[480px] flex flex-col justify-between overflow-hidden">
            {/* Top Bar Map Controls */}
            <div className="flex justify-between items-center z-10">
              <span className="text-[10px] font-mono tracking-widest text-brand-green-light uppercase font-bold flex items-center space-x-1.5">
                <Map className="h-3.5 w-3.5" />
                <span>CAPA: CURVAS DE NIVEL E HISTOGRAMA PLUVIAL (SOACHA)</span>
              </span>
              <span className="text-[10px] font-mono bg-white/10 px-2.5 py-1 rounded border border-white/5 text-gray-300">
                Escala 1:12,500
              </span>
            </div>

            {/* SVG Topographical Map Simulation with interactive nodes */}
            <div className="absolute inset-0 flex items-center justify-center opacity-60 pointer-events-none scale-105">
              <svg className="w-full h-full p-4" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Simulated topo contours */}
                <path d="M50,100 C100,80 200,120 300,90 C400,60 420,150 450,180" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                <path d="M40,140 C120,120 180,180 280,130 C380,80 430,220 480,240" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <path d="M20,200 C150,160 220,240 320,190 C420,140 460,280 490,320" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                <path d="M10,260 C180,210 250,300 350,240 C450,180 470,340 500,380" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <path d="M5,320 C190,270 280,360 380,290 C480,220 490,390 510,420" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                
                {/* Elevation marks */}
                <text x="310" y="85" fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="monospace">2,850 msnm</text>
                <text x="330" y="185" fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="monospace">2,720 msnm</text>
                <text x="360" y="235" fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="monospace">2,600 msnm</text>
              </svg>
            </div>

            {/* Pulsing Interactivity Buttons on top of the Map */}
            <div className="absolute inset-0 z-10">
              {mapHotspots.map((spot) => {
                const isActive = spot.id === selectedSectorId;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setSelectedSectorId(spot.id)}
                    style={{ left: spot.x, top: spot.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group flex flex-col items-center cursor-pointer"
                  >
                    {/* Pulsing Rings */}
                    <div className="relative">
                      {isActive && (
                        <>
                          <div className="absolute inset-0 rounded-full bg-brand-earth/40 animate-ping h-8 w-8 -m-1.5"></div>
                          <div className="absolute inset-0 rounded-full bg-brand-earth/20 animate-pulse h-12 w-12 -m-3.5"></div>
                        </>
                      )}
                      
                      {/* Central Pin Circle */}
                      <div className={`h-5 w-5 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isActive 
                          ? 'bg-brand-earth border-white text-white scale-125 shadow-lg' 
                          : 'bg-brand-green/80 hover:bg-brand-green-light border-white/20 text-white'
                      }`}>
                        <MapPin className="h-3 w-3" />
                      </div>
                    </div>

                    {/* Hover text / Label */}
                    <span className={`mt-2 font-mono text-[9px] font-bold px-2 py-0.5 rounded shadow-md border uppercase tracking-wider transition-all duration-200 ${
                      isActive 
                        ? 'bg-brand-earth text-white border-white/30 font-extrabold' 
                        : 'bg-brand-charcoal text-gray-300 border-white/10 group-hover:bg-brand-green-light group-hover:text-white'
                    }`}>
                      {spot.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Sector Selector List inside the map for quick access (great for mobile/accessibility) */}
            <div className="z-10 mt-24 sm:mt-0 bg-brand-charcoal/90 border border-white/10 rounded-xl p-3 grid grid-cols-2 sm:grid-cols-5 gap-2 max-w-full">
              {SECTORES_CRITICOS.map((sector) => {
                const isSelected = sector.id === selectedSectorId;
                return (
                  <button
                    key={sector.id}
                    onClick={() => setSelectedSectorId(sector.id)}
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-2 rounded-lg text-center border transition cursor-pointer ${
                      isSelected 
                        ? 'bg-brand-earth text-white border-brand-earth-light' 
                        : 'bg-white/5 border-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {sector.id.replace('-', ' ')}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Technical Assessment Sheet (LG: 5-columns) */}
          <div className="lg:col-span-5 bg-[#171e15] border border-brand-green-light/20 rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative">
            
            {/* Top header badge with risk tag */}
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] font-mono text-brand-green-light tracking-widest uppercase font-bold block">
                    INFORME GEOFÍSICO PREVENTIVO
                  </span>
                  <h3 className="text-xl font-black text-white mt-1">
                    {selectedSector.nombre}
                  </h3>
                </div>

                <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${
                  selectedSector.nivelRiesgo === 'Crítico'
                    ? 'bg-red-950/50 border-red-500 text-red-300 animate-pulse'
                    : 'bg-amber-950/50 border-amber-500 text-amber-300'
                }`}>
                  <AlertTriangle className="h-3.5 w-3.5" />
                  <span>{selectedSector.nivelRiesgo}</span>
                </span>
              </div>

              {/* Physical specifications table */}
              <div className="space-y-4 text-xs">
                
                <div className="grid grid-cols-2 gap-4 pb-3 border-b border-white/5 font-mono">
                  <div>
                    <span className="block text-[10px] text-gray-400">COORDENADAS SAT:</span>
                    <span className="text-gray-200 font-semibold">{selectedSector.coordenadas}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400">PENDIENTE PROMEDIO:</span>
                    <span className="text-brand-earth-light font-bold flex items-center space-x-1">
                      <Percent className="h-3.5 w-3.5" />
                      <span>{selectedSector.pendientePromedio}</span>
                    </span>
                  </div>
                </div>

                <div className="pb-3 border-b border-white/5">
                  <span className="block text-[10px] font-mono text-gray-400">COMPOSICIÓN DEL SUELO:</span>
                  <p className="text-gray-200 mt-0.5 leading-relaxed font-mono text-[11px]">
                    {selectedSector.tipoSuelo}
                  </p>
                </div>

                <div className="pb-3 border-b border-white/5">
                  <span className="block text-[10px] font-mono text-gray-400">POBLACIÓN EXPUESTA:</span>
                  <p className="text-gray-200 mt-0.5 font-sans">
                    {selectedSector.poblacionExpuesta}
                  </p>
                </div>

                {/* Key Indicators with visual progress bars */}
                <div className="space-y-2 pt-2">
                  <span className="block text-[10px] font-mono text-gray-400 uppercase">
                    ÍNDICES DE VULNERABILIDAD FÍSICA:
                  </span>
                  
                  {/* Erosion Bar */}
                  <div>
                    <div className="flex justify-between text-[10px] font-mono text-gray-300 mb-1">
                      <span>Tasa de Erosión Activa (Efecto Lluvia):</span>
                      <span className="font-bold text-red-400">{selectedSector.indicadoresClave.erosion}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-red-500 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${selectedSector.indicadoresClave.erosion}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Escorrentía Bar */}
                  <div>
                    <div className="flex justify-between text-[10px] font-mono text-gray-300 mb-1">
                      <span>Factor de Escorrentía Superficial:</span>
                      <span className="font-bold text-blue-400">{selectedSector.indicadoresClave.escorrentia}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-blue-400 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${selectedSector.indicadoresClave.escorrentia}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Cohesion Bar */}
                  <div>
                    <div className="flex justify-between text-[10px] font-mono text-gray-300 mb-1">
                      <span>Factor de Cohesión Mecánica del Suelo:</span>
                      <span className="font-bold text-brand-green-light">{selectedSector.indicadoresClave.cohesion}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-brand-green-light h-full rounded-full transition-all duration-500" 
                        style={{ width: `${selectedSector.indicadoresClave.cohesion}%` }}
                      ></div>
                    </div>
                    <span className="text-[9px] text-gray-400 font-mono italic block mt-0.5">
                      *El Vetiver busca elevar este indicador de cohesión arriba de 80%.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Nature-Based solution summary footer card */}
            <div className="mt-6 pt-4 border-t border-brand-green-light/20 bg-brand-green-dark/35 -mx-6 -mb-6 p-6 rounded-b-2xl">
              <span className="text-[10px] font-mono font-bold uppercase text-brand-earth-light tracking-wider block mb-1">
                Solución de Bioingeniería Planificada:
              </span>
              <p className="text-xs text-brand-green-light font-bold mb-1.5">
                {selectedSector.solucionBioingenieria}
              </p>
              <p className="text-[11px] text-gray-300 leading-relaxed font-light">
                {selectedSector.descripcionSolucion}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
