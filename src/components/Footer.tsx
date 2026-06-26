import React from 'react';
import { ShieldAlert, Mail, MapPin, Shield, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand-charcoal text-white border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Background soft design elements */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-green/5 filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Logo Brand / Info (5-cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-brand-green p-2 rounded-lg flex items-center justify-center">
                <ShieldAlert className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                SALVACIÓN <span className="text-brand-earth">TERRITORIAL</span>
              </span>
            </div>
            
            <p className="text-xs text-white/60 leading-relaxed max-w-md">
              Somos consultores y tecnólogos comunitarios enfocados en mitigar el riesgo climático en asentamientos de ladera inestable. Mediante nuestra Escuela Itinerante y el Pasto Vetiver, devolvemos la soberanía y la seguridad de vida a los hogares de Soacha.
            </p>

            <div className="pt-2 space-y-2 text-xs text-white/80">
              <p className="flex items-center"><Mail className="h-4 w-4 mr-2.5 text-brand-green-light shrink-0" /> contacto@salvacionterritorial.org</p>
              <p className="flex items-center"><MapPin className="h-4 w-4 mr-2.5 text-brand-green-light shrink-0" /> Soacha, Cundinamarca - Colombia</p>
              <p className="flex items-center"><Shield className="h-4 w-4 mr-2.5 text-brand-green-light shrink-0" /> Soporte Técnico Operativo: Bomberos Oficiales y Defensa Civil</p>
            </div>
          </div>

          {/* Quick Navigation (3-cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-bold text-sm tracking-wider uppercase text-brand-earth-light">Secciones Clave</h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li><a href="#inicio" className="hover:text-brand-earth-light transition">Inicio / Alerta Temprana</a></li>
              <li><a href="#proposito" className="hover:text-brand-earth-light transition">Nuestro Propósito de Vida</a></li>
              <li><a href="#mapa" className="hover:text-brand-earth-light transition">Mapeo de Puntos Críticos</a></li>
              <li><a href="#escuela" className="hover:text-brand-earth-light transition">Módulos Pedagógicos de Escuela</a></li>
              <li><a href="#impacto" className="hover:text-brand-earth-light transition">Dashboard de Cifras e Impacto</a></li>
              <li><a href="#saberes" className="hover:text-brand-earth-light transition">Bitácora y Saberes Populares</a></li>
            </ul>
          </div>

          {/* Institutional validation callout (4-cols) */}
          <div className="md:col-span-4 bg-white/5 border border-white/5 rounded-2xl p-5 space-y-3">
            <h4 className="font-extrabold text-xs font-mono uppercase tracking-widest text-brand-green-light flex items-center space-x-1.5">
              <Shield className="h-4 w-4" />
              <span>Validez Gubernamental</span>
            </h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Metodologías estructuradas para alineación directa con planes municipales de Gestión del Riesgo de Desastres (PMGRD) y convocatorias de co-financiación del Fondo Nacional de Gestión del Riesgo de Desastres (FNGRD) administrado por la UNGRD.
            </p>
            <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider block bg-brand-green/20 px-2.5 py-1 rounded max-w-max">
              Soacha, Colombia · 2026
            </span>
          </div>

        </div>

        {/* Footer Credit Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>
            &copy; 2026 Salvación Territorial. Todos los derechos reservados.
          </p>
          <p className="flex items-center space-x-1 text-[11px]">
            <span>Diseñado con pasión para la resiliencia climática de Soacha</span>
            <Heart className="h-3 w-3 fill-brand-earth text-brand-earth shrink-0" />
          </p>
        </div>
      </div>
    </footer>
  );
}
