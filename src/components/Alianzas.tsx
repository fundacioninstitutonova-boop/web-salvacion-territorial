import React, { useState } from 'react';
import { ALIANZAS_INICIALES } from '../data';
import { AlianzaRegistro } from '../types';
import { Heart, Building, Award, Landmark, Users, Hand, ShieldCheck, Sparkles, AlertCircle, FileText } from 'lucide-react';

interface AlianzasProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Alianzas({ isOpen, onClose }: AlianzasProps) {
  const [alianzas, setAlianzas] = useState<AlianzaRegistro[]>(ALIANZAS_INICIALES);
  
  // Selection state
  const [partnerType, setPartnerType] = useState<'Gubernamental' | 'Empresa Privada' | 'ONG' | 'Voluntariado'>('Gubernamental');
  
  // Form input fields
  const [orgName, setOrgName] = useState('');
  const [repName, setRepName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // Custom type-specific fields for fidelity
  const [govDept, setGovDept] = useState(''); // Gubernamental
  const [csrBudget, setCsrBudget] = useState('Bajo ($5M - $15M COP)'); // Empresa Privada
  const [volunteerSkill, setVolunteerSkill] = useState('Siembra y Bioingeniería'); // Voluntariado

  // Success state
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orgName && partnerType !== 'Voluntariado') {
      alert('Por favor, ingresa el nombre de tu organización.');
      return;
    }
    if (!repName || !email || !message) {
      alert('Por favor, completa todos los campos del formulario.');
      return;
    }

    // Compose final message based on custom fields for full fidelity
    let finalMsg = message;
    if (partnerType === 'Gubernamental' && govDept) {
      finalMsg = `[Dependencia: ${govDept}] - ${message}`;
    } else if (partnerType === 'Empresa Privada' && csrBudget) {
      finalMsg = `[Presupuesto RSE Estimado: ${csrBudget}] - ${message}`;
    } else if (partnerType === 'Voluntariado' && volunteerSkill) {
      finalMsg = `[Especialidad: ${volunteerSkill}] - ${message}`;
    }

    const nuevaAlianza: AlianzaRegistro = {
      id: `a-${Date.now()}`,
      organizacion: partnerType === 'Voluntariado' ? `Voluntario: ${repName}` : orgName,
      tipoEntidad: partnerType,
      representante: repName,
      email: email,
      mensaje: finalMsg,
      fechaRegistro: new Date().toISOString().split('T')[0],
      aprobada: false
    };

    setAlianzas([nuevaAlianza, ...alianzas]);
    setSubmitted(true);

    // Clear inputs
    setOrgName('');
    setRepName('');
    setEmail('');
    setMessage('');
    setGovDept('');

    // Reset success banner after 8 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 8000);
  };

  // Render partner type-specific fields
  const renderCustomFields = () => {
    switch (partnerType) {
      case 'Gubernamental':
        return (
          <div className="space-y-1">
            <label className="block text-gray-300 font-bold text-xs uppercase tracking-wider">Dependencia o Área Técnica:</label>
            <input 
              type="text" 
              placeholder="Ej: Subdirección de Reducción del Riesgo / UNGRD" 
              value={govDept}
              onChange={(e) => setGovDept(e.target.value)}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-brand-green text-xs"
            />
          </div>
        );
      case 'Empresa Privada':
        return (
          <div className="space-y-1">
            <label className="block text-gray-300 font-bold text-xs uppercase tracking-wider">Rango de Aporte Social (RSE):</label>
            <select 
              value={csrBudget}
              onChange={(e) => setCsrBudget(e.target.value)}
              className="w-full bg-gray-800 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-brand-green text-xs"
            >
              <option value="Semilla ($3M - $10M COP)">Patrocinio Semilla ($3M - $10M COP)</option>
              <option value="Punto Crítico Completo ($10M - $30M COP)">Patrocinio de Punto Crítico Completo ($10M - $30M COP)</option>
              <option value="Gran Aliado Anual (+$30M COP)">Gran Aliado Anual (+$30M COP)</option>
            </select>
          </div>
        );
      case 'Voluntariado':
        return (
          <div className="space-y-1">
            <label className="block text-gray-300 font-bold text-xs uppercase tracking-wider">Especialidad de Trabajo en Territorio:</label>
            <select 
              value={volunteerSkill}
              onChange={(e) => setVolunteerSkill(e.target.value)}
              className="w-full bg-gray-800 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-brand-green text-xs"
            >
              <option value="Siembra y Bioingeniería (Fajinas, Pasto)">Siembra y Bioingeniería (Fajinas, Pasto)</option>
              <option value="Educación y Neurodidáctica (Pedagogía)">Educación y Neurodidáctica (Pedagogía)</option>
              <option value="Logística y Primeros Auxilios (Soporte)">Logística y Primeros Auxilios (Soporte)</option>
              <option value="Mapeo Comunitario y Sistemas de Información (GIS)">Mapeo Comunitario y Sistemas de Información (GIS)</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  const getPartnerButtonText = () => {
    switch (partnerType) {
      case 'Gubernamental': return 'Solicitar Convenio de Co-Financiación';
      case 'Empresa Privada': return 'Patrocinar un Punto Crítico';
      case 'ONG': return 'Enviar Propuesta de Co-Ejecución';
      case 'Voluntariado': return 'Radicar Inscripción de Guardián';
    }
  };

  return (
    <section id="alianzas-portal" className="py-24 bg-brand-charcoal text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-green/10 text-brand-green-light px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="h-4 w-4 fill-brand-green-light" />
            <span>Alianzas para la Sostenibilidad Humana</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif italic text-white leading-tight">
            Portal de Alianzas y <span className="text-brand-green not-italic font-sans font-bold uppercase tracking-tight">Cooperación</span>
          </h2>
          <div className="w-20 h-1 bg-brand-earth mx-auto mt-3 rounded-full"></div>
          <p className="text-white/70 mt-4 text-sm sm:text-base leading-relaxed">
            Mitigar el riesgo de inundación pluvial en Soacha requiere un esfuerzo coordinado de todos los sectores sociales. 
            Elige tu perfil de alianza y conéctate dinámicamente con nosotros para sumar fuerzas técnicas o presupuestales.
          </p>
        </div>

        {/* Action Grid: Form (7-cols) + Public Ledger (5-cols) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Dynamic Selector Form (7-cols) */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur shadow-xl">
            <h3 className="font-extrabold text-lg mb-6 flex items-center space-x-2 border-b border-white/5 pb-4">
              <Building className="h-5 w-5 text-brand-earth-light animate-pulse" />
              <span>Selecciona tu Tipo de Alianza:</span>
            </h3>

            {/* Entity Type Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
              {(['Gubernamental', 'Empresa Privada', 'ONG', 'Voluntariado'] as const).map((type) => {
                const isActive = partnerType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => {
                      setPartnerType(type);
                      setSubmitted(false);
                    }}
                    className={`px-3 py-3 rounded-xl border text-center font-mono font-bold uppercase tracking-wider text-[10px] transition duration-200 cursor-pointer ${
                      isActive 
                        ? 'bg-brand-earth border-brand-earth text-white shadow' 
                        : 'bg-white/5 border-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {type === 'Gubernamental' && <Landmark className="h-4 w-4 mx-auto mb-1.5" />}
                    {type === 'Empresa Privada' && <Award className="h-4 w-4 mx-auto mb-1.5" />}
                    {type === 'ONG' && <Building className="h-4 w-4 mx-auto mb-1.5" />}
                    {type === 'Voluntariado' && <Hand className="h-4 w-4 mx-auto mb-1.5" />}
                    <span>{type}</span>
                  </button>
                );
              })}
            </div>

            {submitted ? (
              <div className="bg-brand-green/20 border border-brand-green-light/40 rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-2 text-brand-green-light">
                  <Sparkles className="h-5 w-5 animate-spin" />
                  <span className="font-bold text-sm sm:text-base">¡Alianza Radicada Temporalmente en Sistema!</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Muchas gracias por tu postulación de alianza estratégica. Hemos registrado tus datos en el **Transparency Ledger** público de Salvación Territorial en Soacha. Nuestro consultor ambiental revisará la propuesta para iniciar el proceso de formalización técnica de inmediato.
                </p>
                <div className="bg-white/5 p-3 rounded-lg border border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-400">
                  <span>Código de Registro:</span>
                  <span className="font-bold text-brand-green-light">SALV-ALIANZA-2026-{Math.floor(Math.random() * 8000 + 1000)}</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                {/* Dynamic Header Prompt based on entity type */}
                <div className="bg-brand-sand/5 p-4 rounded-xl border border-white/5 text-brand-green-light text-xs font-mono leading-normal flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>
                    {partnerType === 'Gubernamental' && 'B2G: Orientado a convenios interadministrativos, UNGRD, alcaldías y soporte de Defensa Civil/Bomberos.'}
                    {partnerType === 'Empresa Privada' && 'CSR: Ideal para empresas privadas interesadas en mitigar huella hídrica y cumplir metas de RSE ambiental.'}
                    {partnerType === 'ONG' && 'Cooperación: Co-ejecución de recursos no reembolsables enfocados en adaptación climática y SBN.'}
                    {partnerType === 'Voluntariado' && 'Gente: Dirigido a ingenieros, pedagogos y vecinos que deseen laborar voluntariamente en laderas de Soacha.'}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {partnerType !== 'Voluntariado' && (
                    <div className="space-y-1">
                      <label className="block text-gray-300 font-bold uppercase tracking-wider text-[10px]">Nombre de la Organización:</label>
                      <input 
                        type="text" 
                        placeholder="Ej: UNGRD / Alcaldía de Soacha" 
                        required
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-brand-green text-xs"
                      />
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="block text-gray-300 font-bold uppercase tracking-wider text-[10px]">Nombre del Representante:</label>
                    <input 
                      type="text" 
                      placeholder="Ej: Ing. Carolina Restrepo" 
                      required
                      value={repName}
                      onChange={(e) => setRepName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-brand-green text-xs"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-gray-300 font-bold uppercase tracking-wider text-[10px]">Email de Contacto:</label>
                    <input 
                      type="email" 
                      placeholder="Ej: contacto@entidad.gov.co" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-brand-green text-xs"
                    />
                  </div>

                  {renderCustomFields()}
                </div>

                <div className="space-y-1">
                  <label className="block text-gray-300 font-bold uppercase tracking-wider text-[10px]">Propuesta de Cooperación / Mensaje:</label>
                  <textarea 
                    placeholder={
                      partnerType === 'Gubernamental'
                        ? 'Indica los términos preliminares del convenio o requerimientos del dossier técnico'
                        : partnerType === 'Empresa Privada'
                        ? 'Indica el punto crítico o sector geográfico de interés para tu programa de RSE corporativo'
                        : 'Descríbenos brevemente cómo te gustaría sumarte y sumar recursos al territorio'
                    }
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-brand-earth-light text-xs resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-earth hover:brightness-110 text-white font-bold py-3.5 px-4 rounded-lg uppercase tracking-widest transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-brand-earth/10 text-xs sm:text-sm"
                >
                  <Heart className="h-4 w-4 fill-white" />
                  <span>{getPartnerButtonText()}</span>
                </button>
              </form>
            )}
          </div>

          {/* Public Transparency Ledger (5-cols) */}
          <div className="lg:col-span-5 bg-brand-charcoal-light border border-white/10 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="border-b border-white/5 pb-3">
              <h4 className="font-extrabold text-sm text-white flex items-center space-x-2">
                <ShieldCheck className="h-4.5 w-4.5 text-brand-green-light" />
                <span>Registro Público de Alianzas (Ledger)</span>
              </h4>
              <p className="text-[10px] text-white/40 font-mono uppercase mt-1">
                Transparencia total en apoyos institucionales recibidos.
              </p>
            </div>

            {/* List of alliances */}
            <div className="space-y-4 max-h-[360px] overflow-y-auto pr-1 text-xs">
              {alianzas.map((ali) => (
                <div 
                  key={ali.id}
                  className="bg-brand-charcoal border border-white/5 hover:border-white/10 rounded-xl p-4 space-y-2 transition duration-200 shadow-sm"
                >
                  <div className="flex justify-between items-start text-[10px]">
                    <span className={`font-mono font-bold uppercase px-2 py-0.5 rounded ${
                      ali.tipoEntidad === 'Gubernamental' ? 'bg-blue-950/50 text-blue-300 border border-blue-500/20' :
                      ali.tipoEntidad === 'Empresa Privada' ? 'bg-amber-950/50 text-amber-300 border border-amber-500/20' :
                      ali.tipoEntidad === 'ONG' ? 'bg-green-950/50 text-green-300 border border-green-500/20' :
                      'bg-purple-950/50 text-purple-300 border border-purple-500/20'
                    }`}>
                      {ali.tipoEntidad}
                    </span>
                    <span className="text-white/30 font-mono">{ali.fechaRegistro}</span>
                  </div>

                  <h5 className="font-black text-xs text-white uppercase">{ali.organizacion}</h5>
                  <p className="text-[10px] text-white/50">Representante: {ali.representante}</p>
                  
                  <p className="text-[11px] text-white/70 bg-brand-sand p-2.5 rounded border border-white/5 font-light leading-relaxed">
                    {ali.mensaje}
                  </p>

                  <div className="flex justify-end pt-1">
                    <span className="text-[9px] font-mono text-brand-green-light font-bold flex items-center space-x-1 uppercase bg-brand-green-dark/30 px-2 py-0.5 rounded border border-brand-green-light/20">
                      <span>●</span>
                      <span>{ali.aprobada ? 'Convenio Activo' : 'Soporte Radicado'}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Total count ticker */}
            <div className="bg-brand-charcoal border border-white/5 p-4 rounded-xl text-center">
              <span className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1">
                COOPERACIÓN TOTAL CONSOLIDADA
              </span>
              <p className="text-xl font-bold text-white font-mono">
                {alianzas.length} Alianzas Activas / Radicadas
              </p>
              <span className="text-[9px] text-white/30 block mt-1">
                Conectados para salvaguardar el suelo de Soacha.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
