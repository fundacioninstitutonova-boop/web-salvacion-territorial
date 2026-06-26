import React, { useState } from 'react';
import { BARRIOS_CRONOGRAMA } from '../data';
import { BarrioStatus, PostulacionBarrio } from '../types';
import { BookOpen, Calendar, MapPin, Search, PlusCircle, CheckCircle, Clock, AlertCircle, Sparkles, Send, Users, ShieldAlert } from 'lucide-react';

interface Module {
  number: number;
  title: string;
  duration: string;
  focus: string;
  description: string;
  activities: string[];
}

export default function Escuela() {
  const [cronograma, setCronograma] = useState<BarrioStatus[]>(BARRIOS_CRONOGRAMA);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterEstado, setFilterEstado] = useState<string>('todos');

  // Dynamic state for neighborhood postulations
  const [postulaciones, setPostulaciones] = useState<PostulacionBarrio[]>([
    {
      id: 'p-1',
      lider: 'Doña Mercedes Soler',
      cargo: 'Presidenta JAC',
      barrio: 'Altos de la Florida Sector III',
      telefono: '314 283 8911',
      descripcionRiesgo: 'Talud de arena inestable justo detrás de 15 viviendas familiares. Cada lluvia fuerte lava parte del suelo y amenaza con tapar los accesos de la calle principal.',
      fechaRegistro: 'Hace 2 horas'
    },
    {
      id: 'p-2',
      lider: 'Don José Vicente Ortiz',
      cargo: 'Coordinador Ambiental',
      barrio: 'Loma Linda Sector Alto',
      telefono: '320 482 1234',
      descripcionRiesgo: 'Infiltración masiva de aguas servidas que satura la pendiente de arcilla y causa agrietamientos notorios en los cimientos de la capilla comunal.',
      fechaRegistro: 'Ayer'
    }
  ]);

  // Form states
  const [formLider, setFormLider] = useState('');
  const [formCargo, setFormCargo] = useState('Presidente Junta de Acción Comunal (JAC)');
  const [formBarrio, setFormBarrio] = useState('');
  const [formTelefono, setFormTelefono] = useState('');
  const [formDescripcion, setFormDescripcion] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const modulos: Module[] = [
    {
      number: 1,
      title: 'Monitoreo Comunitario y Lectura de Nubes (SAT)',
      duration: '4 horas prácticas',
      focus: 'Climatología y Alertas Vecinales',
      description: 'Capacitación en la fabricación casera de pluviómetros con material reciclado calibrado y el diseño de la Red de Alerta Temprana vecinal.',
      activities: ['Instalación de plonómetros en patios de casas altas', 'Lectura de humedales locales y acumulación pluvial', 'Simulación de protocolo de radiocomunicación en crisis']
    },
    {
      number: 2,
      title: 'Trazado topográfico con el "Nivel tipo A"',
      duration: '6 horas prácticas',
      focus: 'Topografía de Ladera y Curvas de Nivel',
      description: 'Enseñanza del ensamblaje y uso técnico del Nivel tipo A de madera para encontrar líneas de nivel perfectas sin necesidad de costosos teodolitos.',
      activities: ['Trazado de curvas de nivel en pendientes de hasta 45 grados', 'Establecimiento de estacas para zanjas de infiltración', 'Cálculo analógico de volumen de escorrentía superficial']
    },
    {
      number: 3,
      title: 'Propagación de Pasto Vetiver y Bioingeniería',
      duration: '8 horas prácticas',
      focus: 'Soluciones Basadas en la Naturaleza',
      description: 'Práctica integral sobre el tratamiento de esquejes de Vetiver, preparación de micorrizas y la siembra en curvas de contorno.',
      activities: ['Corte y estimulación de corona de Vetiver', 'Siembra en zigzag con espaciamientos calculados hidrológicamente', 'Armado de fajinas con ramas de sauce para estabilización inmediata']
    },
    {
      number: 4,
      title: 'Organización del Círculo de Cuidado y Emergencia',
      duration: '4 horas teóricas',
      focus: 'Cohesión Social e Intervención Segura',
      description: 'Estructuración de roles oficiales con el respaldo técnico de Defensa Civil y Bomberos para coordinar evacuaciones seguras e instalar camillas de socorro.',
      activities: ['Mapeo social de vulnerabilidad calle por calle', 'Establecimiento de puntos de encuentro seguros', 'Protocolo de primeros auxilios en terrenos de difícil acceso']
    }
  ];

  const handlePostular = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formLider || !formBarrio || !formTelefono || !formDescripcion) {
      alert('Por favor, completa todos los campos requeridos para enviar la solicitud.');
      return;
    }

    const nuevaPostulacion: PostulacionBarrio = {
      id: `p-${Date.now()}`,
      lider: formLider,
      cargo: formCargo,
      barrio: formBarrio,
      telefono: formTelefono,
      descripcionRiesgo: formDescripcion,
      fechaRegistro: 'Justo ahora'
    };

    setPostulaciones([nuevaPostulacion, ...postulaciones]);
    setFormSubmitted(true);
    
    // Clear form except message
    setFormLider('');
    setFormBarrio('');
    setFormTelefono('');
    setFormDescripcion('');

    // Reset alert message after 6 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 6000);
  };

  const filteredBarrios = cronograma.filter(b => {
    const matchesSearch = b.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          b.sector.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEstado = filterEstado === 'todos' || b.estado === filterEstado;
    return matchesSearch && matchesEstado;
  });

  return (
    <section id="escuela" className="py-24 bg-brand-charcoal text-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-green/15 text-brand-green-light px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="h-4 w-4" />
            <span>Nuestra Academia de Territorio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-white leading-tight">
            La Escuela Itinerante de <span className="text-brand-green not-italic font-sans font-bold uppercase tracking-tight">Gestión del Riesgo</span>
          </h2>
          <div className="w-24 h-1 bg-brand-earth mx-auto mt-3 rounded-full"></div>
          <p className="text-white/70 mt-4 text-sm sm:text-base leading-relaxed">
            Una infraestructura de conocimiento móvil que se despliega directamente en el salón comunal de cada barrio. 
            Formamos a los vecinos bajo la máxima de que <strong>"el primer respondiente es la propia comunidad"</strong>, 
            combinando ciencia hidrológica y saberes populares.
          </p>
        </div>

        {/* Part 1: Educational Modules */}
        <div className="mb-24">
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-brand-earth mb-6 border-l-4 border-brand-earth pl-3">
            Plan de Estudios Comunales (Currículo Práctico):
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modulos.map((mod) => (
              <div 
                key={mod.number} 
                className="bg-brand-sand border border-white/10 hover:border-brand-green-light rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative flex flex-col justify-between"
              >
                <div>
                  {/* Module Badge Number */}
                  <div className="absolute top-4 right-4 text-5xl font-extrabold font-mono text-white/5 select-none">
                    0{mod.number}
                  </div>

                  <span className="text-[10px] font-mono font-bold bg-brand-green/20 text-brand-green-light px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {mod.duration}
                  </span>

                  <h4 className="font-extrabold text-white text-base mt-4 mb-2 leading-tight">
                    {mod.title}
                  </h4>

                  <span className="block text-xs font-mono font-medium text-brand-earth-light mb-3">
                    Enfoque: {mod.focus}
                  </span>

                  <p className="text-xs text-white/60 leading-relaxed mb-4">
                    {mod.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <span className="block text-[10px] font-mono font-bold uppercase text-white/40 mb-2">
                    Talleres Clave:
                  </span>
                  <ul className="space-y-1.5">
                    {mod.activities.map((act, i) => (
                      <li key={i} className="text-xs text-white/70 flex items-start space-x-1.5">
                        <span className="text-brand-green font-bold shrink-0">✓</span>
                        <span className="leading-tight">{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Deployment Schedule & Form */}
        <div className="grid lg:grid-cols-12 gap-12 items-start pt-6">
          
          {/* Cronograma de Barrios (Left/7-cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-brand-green" />
                  <span>Despliegue y Cronograma Territorial</span>
                </h3>
                <p className="text-xs text-white/50">Monitorea la ubicación de nuestra carpa pedagógica.</p>
              </div>

              {/* Filtering Controls */}
              <div className="flex space-x-2 shrink-0">
                <select 
                  value={filterEstado}
                  onChange={(e) => setFilterEstado(e.target.value)}
                  className="bg-brand-charcoal border border-white/10 text-xs font-semibold rounded-lg px-3 py-2 text-white focus:outline-none focus:border-brand-green"
                >
                  <option value="todos">Todos los Estados</option>
                  <option value="Completado">Completados</option>
                  <option value="Activo">Activos</option>
                  <option value="Próximamente">Próximamente</option>
                </select>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white/40">
                <Search className="h-4 w-4" />
              </span>
              <input 
                type="text" 
                placeholder="Buscar por barrio o sector de Soacha..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-brand-charcoal border border-white/10 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-brand-green"
              />
            </div>

            {/* Barrios Grid/List */}
            <div className="space-y-4">
              {filteredBarrios.length > 0 ? (
                filteredBarrios.map((barrio) => (
                  <div 
                    key={barrio.id}
                    className="bg-brand-sand border border-white/10 rounded-xl p-5 hover:border-white/25 transition duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-brand-earth-light shrink-0" />
                        <h4 className="font-extrabold text-white text-base">{barrio.nombre}</h4>
                      </div>
                      <span className="text-xs text-white/50 font-medium block">
                        {barrio.sector} · <span className="text-brand-green font-mono">{barrio.fecha}</span>
                      </span>
                      <p className="text-xs text-white/70 italic">
                        <strong>Intervención:</strong> {barrio.tipoIntervencion}
                      </p>
                    </div>

                    <div className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-center gap-2 border-t sm:border-t-0 pt-3 sm:pt-0 border-white/5">
                      {/* State Badge */}
                      {barrio.estado === 'Completado' && (
                        <span className="inline-flex items-center space-x-1.5 bg-brand-green/20 text-brand-green-light text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase">
                          <CheckCircle className="h-3 w-3" />
                          <span>Completado</span>
                        </span>
                      )}
                      {barrio.estado === 'Activo' && (
                        <span className="inline-flex items-center space-x-1.5 bg-blue-950/40 text-blue-300 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase animate-pulse border border-blue-500/20">
                          <Clock className="h-3 w-3" />
                          <span>Activo en Aula</span>
                        </span>
                      )}
                      {barrio.estado === 'Próximamente' && (
                        <span className="inline-flex items-center space-x-1.5 bg-brand-earth/20 text-brand-earth-light text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase">
                          <AlertCircle className="h-3 w-3" />
                          <span>Próximamente</span>
                        </span>
                      )}

                      {barrio.familiasCapacitadas > 0 && (
                        <span className="text-xs text-white/50 font-mono font-semibold">
                          +{barrio.familiasCapacitadas} familias capacitadas
                        </span>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center p-8 bg-brand-sand border border-dashed border-white/10 rounded-xl">
                  <p className="text-xs text-white/50">No se encontraron barrios con los criterios de búsqueda.</p>
                </div>
              )}
            </div>
          </div>

          {/* Formulario e Inscripciones Recientes (Right/5-cols) */}
          <div id="solicitar-escuela" className="lg:col-span-5 space-y-6">
            <div className="bg-brand-charcoal-light text-white rounded-2xl p-6 shadow-xl border border-white/10 relative overflow-hidden">
              {/* background vector */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-green/10 rounded-full filter blur-xl pointer-events-none"></div>

              <div className="flex items-center space-x-2.5 mb-4">
                <PlusCircle className="h-5 w-5 text-brand-green-light" />
                <h3 className="font-bold text-lg text-white">Solicita la Escuela en tu Barrio</h3>
              </div>
              <p className="text-xs text-white/70 leading-relaxed mb-6">
                Si representas a una Junta de Acción Comunal (JAC) en un sector vulnerable a lluvias en Soacha, regístrate aquí. Analizamos la topografía de tu barrio de forma prioritaria.
              </p>

              {formSubmitted ? (
                <div className="bg-brand-green/20 border border-brand-green-light/40 rounded-xl p-5 space-y-3">
                  <div className="flex items-center space-x-2 text-brand-green-light">
                    <Sparkles className="h-5 w-5" />
                    <span className="font-bold text-sm">¡Solicitud Radicada con Éxito!</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Hemos recibido la postulación comunal para tu barrio. Nuestro equipo de consultores de gestión del riesgo se pondrá en contacto contigo para coordinar una visita técnica de viabilidad.
                  </p>
                  <span className="text-[10px] font-mono text-white/40 block pt-1">
                    ID Radicado: SALV-JAC-{Math.floor(Math.random() * 9000 + 1000)}
                  </span>
                </div>
              ) : (
                <form onSubmit={handlePostular} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-white/85 font-semibold mb-1">Nombre Completo del Líder:</label>
                    <input 
                      type="text" 
                      placeholder="Ej: Doña Martha Lucía Pérez" 
                      required
                      value={formLider}
                      onChange={(e) => setFormLider(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-brand-green"
                    />
                  </div>

                  <div>
                    <label className="block text-white/85 font-semibold mb-1">Cargo Comunal:</label>
                    <select 
                      value={formCargo}
                      onChange={(e) => setFormCargo(e.target.value)}
                      className="w-full bg-brand-charcoal border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-brand-green"
                    >
                      <option value="Presidente Junta de Acción Comunal (JAC)">Presidente Junta de Acción Comunal (JAC)</option>
                      <option value="Vicepresidente JAC">Vicepresidente JAC</option>
                      <option value="Coordinador Ambiental o de Riesgos">Coordinador Ambiental o de Riesgos</option>
                      <option value="Líder Vecinal Autónomo">Líder Vecinal Autónomo</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-white/85 font-semibold mb-1">Barrio / Sector:</label>
                      <input 
                        type="text" 
                        placeholder="Ej: Altos del Pino" 
                        required
                        value={formBarrio}
                        onChange={(e) => setFormBarrio(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-brand-green"
                      />
                    </div>
                    <div>
                      <label className="block text-white/85 font-semibold mb-1">Teléfono Móvil:</label>
                      <input 
                        type="tel" 
                        placeholder="Ej: 315 123 4567" 
                        required
                        value={formTelefono}
                        onChange={(e) => setFormTelefono(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-brand-green"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/85 font-semibold mb-1">Descripción del Riesgo Pluvial:</label>
                    <textarea 
                      placeholder="Describe la problemática (deslizamientos, pozos de agua estancada, desborde de quebradas, inclinación de taludes, etc.)" 
                      rows={3}
                      required
                      value={formDescripcion}
                      onChange={(e) => setFormDescripcion(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-brand-green resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-earth hover:brightness-110 text-white font-bold py-3 px-4 rounded-lg uppercase tracking-widest transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
                  >
                    <Send className="h-4 w-4" />
                    <span>Radicar Postulación Comunal</span>
                  </button>
                </form>
              )}
            </div>

            {/* List of Recent Postulations */}
            <div className="bg-brand-charcoal-light border border-white/10 rounded-2xl p-5 space-y-4">
              <h4 className="font-bold text-sm text-white flex items-center space-x-2">
                <Users className="h-4.5 w-4.5 text-brand-earth" />
                <span>Solicitudes Registradas Recientemente:</span>
              </h4>

              <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                {postulaciones.map((post) => (
                  <div key={post.id} className="bg-brand-charcoal border border-white/5 rounded-lg p-3 space-y-1 shadow-sm">
                    <div className="flex justify-between items-start text-[10px]">
                      <span className="font-bold text-brand-green-light uppercase font-mono bg-brand-green/20 px-1.5 py-0.5 rounded">
                        {post.cargo}
                      </span>
                      <span className="text-white/40 font-mono">{post.fechaRegistro}</span>
                    </div>
                    <h5 className="font-extrabold text-xs text-white">{post.barrio}</h5>
                    <p className="text-[11px] text-white/50">Postulado por: {post.lider}</p>
                    <p className="text-[11px] text-white/70 line-clamp-2 italic bg-brand-sand/30 p-1.5 rounded border border-white/5 mt-1">
                      "{post.descripcionRiesgo}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
