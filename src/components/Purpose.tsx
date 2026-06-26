import React, { useState } from 'react';
import { Brain, Leaf, Users, Trash2, CheckCircle2, ChevronRight, BookOpen } from 'lucide-react';

interface Pillar {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  methodology: string;
  tools: string[];
  science: string;
  badge: string;
}

export default function Purpose() {
  const pillars: Pillar[] = [
    {
      id: 'neuro',
      icon: <Brain className="h-6 w-6" />,
      title: 'Educación Neurodidáctica',
      shortDesc: 'Asimilación lúdica y emocional del riesgo técnico bajo situaciones de estrés comunitario.',
      badge: 'Pedagogía Adaptativa',
      methodology: 'Diseñamos laboratorios sensoriales donde las familias simulan descorrentías reales en maquetas físicas 3D de sus lomas. Al asimilar el riesgo con dinámicas kinestésicas y lúdicas, el cerebro bloquea la respuesta de pánico y la sustituye por memoria procedimental activa.',
      tools: ['Maquetas de escorrentía 3D', 'Manuales ilustrados infográficos', 'Simuladores analógicos de pendiente'],
      science: 'Estudios de neuroeducación demuestran que en contextos de vulnerabilidad y estrés socio-ambiental, los conceptos abstractos solo se fijan mediante aprendizaje asociativo emocional y físico (acción-reacción).'
    },
    {
      id: 'barreras',
      icon: <Leaf className="h-6 w-6" />,
      title: 'Barreras Vivas de Vetiver',
      shortDesc: 'Soluciones basadas en la naturaleza que tejen y anclan laderas vulnerables.',
      badge: 'Bioingeniería Vegetal',
      methodology: 'Sembrado estratégico de Pasto Vetiver (Chrysopogon zizanioides) siguiendo curvas de nivel exactas. A medida que las raíces crecen verticalmente, forman una red tupida bajo tierra que sujeta firmemente los estratos limosos arcillosos inestables.',
      tools: ['Plántulas seleccionadas de Vetiver', 'Nivel tipo A de madera artesanal', 'Sustrato orgánico micorrizado'],
      science: 'El sistema radicular del Vetiver posee una resistencia mecánica a la tensión de 75 MPa, actuando como micro-pilotes de anclaje inyectados de forma natural que absorben además el excedente de agua freática.'
    },
    {
      id: 'comunidad',
      icon: <Users className="h-6 w-6" />,
      title: 'Apropiación y Acción Comunitaria',
      shortDesc: 'Organización vecinal autónoma para el cuidado permanente del suelo.',
      badge: 'Círculos de Cuidado',
      methodology: 'Conformación de los "Círculos de Cuidado Territorial" con líderes y vecinos. Cada círculo se encarga de monitorear un sector crítico específico, mantener las barreras y activar el SAT vecinal si es necesario.',
      tools: ['Pluviómetros comunitarios', 'Radios de comunicación comunal', 'Chalecos de protección e identificación'],
      science: 'La resiliencia social y la cohesión comunal disminuyen la tasa de fatalidad en desastres naturales en un 60%, promoviendo una respuesta rápida que el estado tarda horas en desplegar en zonas marginadas.'
    },
    {
      id: 'saneamiento',
      icon: <Trash2 className="h-6 w-6" />,
      title: 'Saneamiento y Gestión Fluvial',
      shortDesc: 'Remoción manual de residuos y reestructuración de canales de escorrentía.',
      badge: 'Hidrología de Canales',
      methodology: 'Jornadas de descolmatación manual de quebradas y desagües de ladera obstruidos por basura histórica. Rediseño artesanal de zanjas de coronación con recubrimiento vegetal para disipar la velocidad del agua.',
      tools: ['Herramientas manuales de excavación', 'Bolsas reforzadas para residuos', 'Sacos de arena biodegradables para encauzamiento'],
      science: 'El 80% de las inundaciones pluviales en asentamientos informales de Soacha son causadas por obstrucción de canales naturales de drenaje con desechos urbanos que represan caudales cortos pero intensos.'
    }
  ];

  const [activePillarId, setActivePillarId] = useState<string>('neuro');
  const activePillar = pillars.find(p => p.id === activePillarId) || pillars[0];

  return (
    <section id="proposito" className="py-24 bg-brand-sand text-brand-cream relative overflow-hidden">
      {/* Background soft design elements */}
      <div className="absolute top-[30%] -right-16 w-64 h-64 rounded-full bg-brand-green/5 filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-12 left-12 w-80 h-80 rounded-full bg-brand-earth/5 filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Text */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Filosofía Territorial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-white leading-tight">
            Nuestro Propósito: <br />
            <span className="text-brand-green not-italic font-sans font-bold uppercase tracking-tight text-2xl sm:text-3xl block mt-1">Más allá de la emergencia: Educación para la Vida</span>
          </h2>
          <div className="w-20 h-1 bg-brand-earth mt-3 rounded-full"></div>
          <p className="text-base sm:text-lg text-white/70 mt-4 leading-relaxed">
            En <strong>Salvación Territorial</strong>, entendemos que el riesgo pluvial en Soacha no es solo un fenómeno meteorológico irreversible; es una vulnerabilidad social que puede transformarse en resiliencia activa. No esperamos el desastre; estructuramos las soluciones desde la base.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Pillars List (Left Side) */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4 block font-mono">
              Dimensiones de Acción Integral:
            </h3>
            {pillars.map((pillar) => {
              const isActive = pillar.id === activePillarId;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start space-x-4 cursor-pointer ${
                    isActive
                      ? 'bg-white/10 border-brand-green shadow-lg shadow-brand-green/5 -translate-y-0.5'
                      : 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className={`p-3 rounded-lg shrink-0 transition-colors duration-300 ${
                    isActive ? 'bg-brand-green text-white' : 'bg-brand-green/10 text-brand-green'
                  }`}>
                    {pillar.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-mono font-semibold text-brand-earth-light uppercase">
                        {pillar.badge}
                      </span>
                      {isActive && <ChevronRight className="h-4 w-4 text-brand-green" />}
                    </div>
                    <h4 className="font-bold text-white text-base">{pillar.title}</h4>
                    <p className="text-xs text-white/50 mt-1 line-clamp-2">{pillar.shortDesc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Detail Panel (Right Side) */}
          <div className="md:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 shadow-xl relative min-h-[420px] flex flex-col justify-between">
            {/* Corner Decorative Watermark */}
            <div className="absolute bottom-4 right-4 opacity-5 pointer-events-none text-brand-green">
              {activePillar.icon}
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-6 border-b border-white/5 pb-4">
                <div className="p-3 bg-brand-green text-white rounded-xl">
                  {activePillar.icon}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-earth">
                    {activePillar.badge}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                    {activePillar.title}
                  </h4>
                </div>
              </div>

              {/* Detailed Methodology Section */}
              <div className="space-y-6">
                <div>
                  <h5 className="text-xs uppercase tracking-widest text-white/45 font-bold font-mono mb-2">
                    Metodología de Trabajo:
                  </h5>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {activePillar.methodology}
                  </p>
                </div>

                {/* Tools Provided */}
                <div>
                  <h5 className="text-xs uppercase tracking-widest text-white/45 font-bold font-mono mb-2">
                    Herramientas Entregadas a la Comunidad:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {activePillar.tools.map((tool, idx) => (
                      <span 
                        key={idx} 
                        className="bg-brand-charcoal border border-white/10 text-xs text-white/85 font-medium px-3 py-1 rounded-full flex items-center space-x-1.5"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-earth"></span>
                        <span>{tool}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Scientific and technical backings */}
            <div className="mt-8 pt-4 border-t border-white/5 bg-brand-charcoal/40 -mx-6 -mb-6 p-6 rounded-b-2xl">
              <span className="text-[10px] font-mono font-bold uppercase text-brand-green tracking-wider block mb-1">
                Fundamentación Científica y Soporte Técnico:
              </span>
              <p className="text-xs text-white/60 italic leading-relaxed">
                "{activePillar.science}"
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-charcoal-light to-brand-green p-8 sm:p-10 rounded-2xl text-white shadow-xl border border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">¿Quieres que la Escuela Itinerante visite tu barrio?</h3>
            <p className="text-xs sm:text-sm text-brand-cream/80 mt-2">
              Coordinamos con las Juntas de Acción Comunal (JAC) en Soacha para organizar talleres teóricos de neurodidáctica, trazar pendientes e instalar barreras de Vetiver vivas de forma gratuita.
            </p>
          </div>
          <a 
            href="#solicitar-escuela" 
            className="bg-brand-earth hover:brightness-110 text-white font-bold px-6 py-3.5 rounded-lg text-sm uppercase tracking-widest transition-all duration-200 shrink-0 shadow-lg text-center cursor-pointer"
          >
            Postular Barrio Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
