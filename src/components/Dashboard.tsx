import React, { useState } from 'react';
import { TrendingUp, FileText, Download, CheckCircle, Shield, Sparkles, X, Printer, Heart } from 'lucide-react';

interface Metric {
  value: string;
  label: string;
  subLabel: string;
  bgIcon: string;
  iconColor: string;
  icon: string;
}

export default function Dashboard() {
  const [showDossier, setShowDossier] = useState(false);
  const [dossierCopied, setDossierCopied] = useState(false);

  const metricas = [
    {
      value: '+30',
      label: 'Familias Capacitadas',
      subLabel: 'En prevención, SAT y primeros auxilios',
      bgIcon: 'bg-green-100',
      iconColor: 'text-brand-green',
      icon: '🏠'
    },
    {
      value: '450m',
      label: 'Barreras Vivas',
      subLabel: 'Pasto Vetiver sembrado a nivel',
      bgIcon: 'bg-amber-100',
      iconColor: 'text-brand-earth',
      icon: '🌿'
    },
    {
      value: '1.2 Tn',
      label: 'Residuos Removidos',
      subLabel: 'De canales de escorrentía críticos',
      bgIcon: 'bg-blue-100',
      iconColor: 'text-brand-blue',
      icon: '🗑️'
    },
    {
      value: '3 Sectores',
      label: 'Zonas Mitigadas',
      subLabel: 'Con barreras vivas establecidas',
      bgIcon: 'bg-red-100',
      iconColor: 'text-red-600',
      icon: '🛡️'
    },
    {
      value: '8 Líderes',
      label: 'Certificados',
      subLabel: 'En primera respuesta por Bomberos',
      bgIcon: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      icon: '🎖️'
    },
    {
      value: '100%',
      label: 'Transparencia',
      subLabel: 'Métricas auditadas con georreferenciación',
      bgIcon: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      icon: '📊'
    }
  ];

  const handlePrintDossier = () => {
    window.print();
  };

  const handleCopyDossierLink = () => {
    setDossierCopied(true);
    setTimeout(() => setDossierCopied(false), 3000);
  };

  return (
    <section id="impacto" className="py-24 bg-brand-sand text-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-brand-green/15 text-brand-green-light px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              <TrendingUp className="h-4 w-4" />
              <span>Resultados Basados en Evidencia</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif italic text-white leading-tight">
              Dashboard de <span className="text-brand-green not-italic font-sans font-bold uppercase tracking-tight">Resiliencia Comunitaria</span>
            </h2>
            <div className="w-20 h-1 bg-brand-earth mt-3 rounded-full"></div>
            <p className="text-white/70 mt-4 text-sm sm:text-base leading-relaxed">
              Registramos de forma abierta e integrada el avance del proyecto insignia de la Escuela Itinerante en Soacha, demostrando con datos reales la efectividad de las soluciones basadas en la naturaleza.
            </p>
          </div>

          {/* Dossier Download Trigger Card */}
          <div className="shrink-0">
            <button 
              onClick={() => setShowDossier(true)}
              className="bg-brand-charcoal hover:bg-brand-charcoal/95 border border-white/10 text-white font-bold py-3.5 px-6 rounded-xl flex items-center space-x-2 transition duration-200 shadow-lg cursor-pointer"
            >
              <FileText className="h-4 w-4 text-brand-earth-light" />
              <span>Generar Dossier Técnico UNGRD</span>
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {metricas.map((m, idx) => (
            <div 
              key={idx} 
              className="bg-brand-charcoal border border-white/10 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-brand-green-light/25 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className={`${m.bgIcon} w-12 h-12 rounded-xl flex items-center justify-center text-xl`}>
                    {m.icon}
                  </div>
                  <span className="text-[9px] font-mono font-bold text-white/50 uppercase tracking-widest bg-brand-sand/50 px-2 py-0.5 rounded border border-white/5">
                    Fase I
                  </span>
                </div>

                <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                  {m.value}
                </p>
                <h4 className="font-extrabold text-white text-sm sm:text-base mt-2">
                  {m.label}
                </h4>
              </div>

              <p className="text-xs text-white/50 mt-2 border-t border-white/5 pt-3">
                {m.subLabel}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Validation Box */}
        <div className="mt-12 bg-brand-charcoal border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="bg-brand-green/10 p-4 rounded-full shrink-0 text-brand-green">
            <Shield className="h-8 w-8" />
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-extrabold text-white text-base">
              Rigor Técnico Avalado Internacionalmente
            </h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Las intervenciones de Salvación Territorial siguen los estándares del **Manual de Vetiver** para mitigación de desastres de la Red Internacional de Vetiver (TVNI). Además, las capacitaciones de evacuación están homologadas por protocolos oficiales del SNGRD colombiano.
            </p>
          </div>
        </div>
      </div>

      {/* MODAL: Dossier Técnico de Impacto UNGRD */}
      {showDossier && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-charcoal/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-brand-charcoal rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col justify-between border border-gray-200">
            
            {/* Modal Header */}
            <div className="px-6 py-4 bg-brand-charcoal text-white rounded-t-2xl flex justify-between items-center border-b border-white/10">
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-brand-earth-light" />
                <h3 className="font-bold text-sm tracking-widest uppercase font-mono">
                  Dossier Técnico de Viabilidad y Resultados
                </h3>
              </div>
              <button 
                onClick={() => setShowDossier(false)}
                className="text-gray-400 hover:text-white transition cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Dossier Body (Simulating highly formal document) */}
            <div id="print-area" className="p-6 lg:p-10 space-y-8 overflow-y-auto text-xs font-sans">
              
              {/* Document Header Block */}
              <div className="border-b-2 border-brand-charcoal pb-6 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-earth font-bold">
                    DOCUMENTO TÉCNICO INTERNO
                  </span>
                  <h4 className="text-xl font-black text-brand-charcoal uppercase">
                    PROYECTO: ESCUELA ITINERANTE DE GESTIÓN DEL RIESGO PLUVIAL
                  </h4>
                  <span className="text-[10px] text-gray-500 block font-mono">
                    Radicado: ST-SOACHA-2026-UNGRD-004
                  </span>
                </div>

                <div className="bg-brand-sand border border-gray-200 p-3 rounded-lg text-right font-mono text-[10px]">
                  <p><strong>Fecha:</strong> 25 de Junio, 2026</p>
                  <p><strong>Ubicación:</strong> Soacha (Cund.), Colombia</p>
                  <p><strong>Fase:</strong> Monitoreo & Consolidación</p>
                </div>
              </div>

              {/* Document Summary */}
              <div className="space-y-4">
                <h5 className="text-sm font-bold uppercase border-l-4 border-brand-green pl-2 text-brand-charcoal">
                  1. Resumen Ejecutivo
                </h5>
                <p className="text-gray-700 leading-relaxed font-light">
                  Este dossier consolida las metodologías de intervención y resultados logrados por el proyecto insignia de Salvación Territorial en el municipio de Soacha, Cundinamarca, orientado a la mitigación activa de riesgos por inundación pluvial y remoción en masa. Mediante la articulación de la Escuela Itinerante con las Juntas de Acción Comunal (JAC) y el respaldo operativo de organismos de rescate, se ha logrado habilitar capacidades de resiliencia local mediante Soluciones Basadas en la Naturaleza (SBN).
                </p>
              </div>

              {/* Technical Specifications of Vetiver System */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h5 className="text-sm font-bold uppercase border-l-4 border-brand-earth pl-2 text-brand-charcoal">
                    2. Ficha del Pasto Vetiver (SBN)
                  </h5>
                  <table className="w-full text-[11px] font-mono border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-100"><td className="py-1 text-gray-500">Especie:</td><td className="py-1 font-bold">Chrysopogon zizanioides</td></tr>
                      <tr className="border-b border-gray-100"><td className="py-1 text-gray-500">Resistencia Tensión:</td><td className="py-1 font-bold">~75 MPa (Megapascales)</td></tr>
                      <tr className="border-b border-gray-100"><td className="py-1 text-gray-500">Profundidad Raíz:</td><td className="py-1 font-bold">Hasta 4.0 metros en 24 meses</td></tr>
                      <tr className="border-b border-gray-100"><td className="py-1 text-gray-500">Eficiencia Filtración:</td><td className="py-1 font-bold">Disminuye 85% sedimentos de lodo</td></tr>
                      <tr className="border-b border-gray-100"><td className="py-1 text-gray-500">Ángulo de Siembra:</td><td className="py-1 font-bold">Perpendicular a pendiente (Curvas nivel)</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-3">
                  <h5 className="text-sm font-bold uppercase border-l-4 border-brand-earth pl-2 text-brand-charcoal">
                    3. Indicadores de Logro Acumulado
                  </h5>
                  <div className="bg-brand-sand border border-gray-200 rounded-xl p-4 space-y-2 font-mono text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Familias Capacitadas:</span>
                      <span className="font-bold text-brand-green">34 Familias directas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Metros de Barrera Viva:</span>
                      <span className="font-bold text-brand-green">450 metros lineales</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Residuos Sólidos Extraídos:</span>
                      <span className="font-bold text-brand-green">1,200 Kilogramos</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Puntos de Alto Riesgo Mitigados:</span>
                      <span className="font-bold text-brand-green">3 Sectores activos</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Methodology details */}
              <div className="space-y-4">
                <h5 className="text-sm font-bold uppercase border-l-4 border-brand-green pl-2 text-brand-charcoal">
                  4. Protocolo Pedagógico (Neurodidáctica)
                </h5>
                <p className="text-gray-700 leading-relaxed font-light">
                  Se aplica un diseño curricular de 22 horas de capacitación teórica-práctica modular, enfocado específicamente en la superación del estrés post-traumático pluvial. Las herramientas lúdicas y la simulación hidrológica en sitio garantizan que el 90% de los participantes apruebe el simulacro de evacuación comunitaria autónomo sin supervisión de bomberos en la tercera semana de intervención.
                </p>
              </div>

              {/* Endorsements / Signature Blocks representing the stakeholders */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 text-center font-mono text-[9px] text-gray-400">
                <div className="space-y-4">
                  <div className="h-10 border-b border-gray-200"></div>
                  <p className="font-bold text-gray-700">Salvación Territorial</p>
                  <p>Dirección Técnica de Gestión</p>
                </div>
                <div className="space-y-4">
                  <div className="h-10 border-b border-gray-200"></div>
                  <p className="font-bold text-gray-700">Bomberos Oficiales Soacha</p>
                  <p>Validación de Evacuación Comunal</p>
                </div>
                <div className="space-y-4">
                  <div className="h-10 border-b border-gray-200"></div>
                  <p className="font-bold text-gray-700">Defensa Civil Colombiana</p>
                  <p>Soporte de Mapas de Riesgo</p>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-2xl flex flex-col sm:flex-row justify-between items-center gap-3">
              <span className="text-[10px] text-gray-500 font-mono">
                *Este documento está listo para presentación en comités técnicos de la UNGRD.
              </span>
              <div className="flex space-x-2 shrink-0 w-full sm:w-auto">
                <button 
                  onClick={handleCopyDossierLink}
                  className="flex-1 sm:flex-none border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold px-4 py-2.5 rounded-lg text-xs transition uppercase tracking-wider flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>{dossierCopied ? '¡Enlace Copiado!' : 'Copiar Enlace'}</span>
                </button>
                <button 
                  onClick={handlePrintDossier}
                  className="flex-1 sm:flex-none bg-brand-earth hover:brightness-110 text-white font-bold px-4 py-2.5 rounded-lg text-xs transition uppercase tracking-wider flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>Imprimir / Exportar PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
