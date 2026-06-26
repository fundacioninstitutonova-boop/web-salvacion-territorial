import React, { useState } from 'react';
import { Menu, X, ShieldAlert, Heart } from 'lucide-react';

interface NavbarProps {
  onOpenAllianceModal: () => void;
}

export default function Navbar({ onOpenAllianceModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-brand-charcoal/90 backdrop-blur-md border-b border-white/10 text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Brand */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <div className="bg-brand-green p-2 rounded-lg flex items-center justify-center">
              <ShieldAlert className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight block">
                SALVACIÓN <span className="text-brand-earth">TERRITORIAL</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-green-light block -mt-1 font-bold">
                Escuela de Riesgo Pluvial · Soacha
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center text-sm font-medium">
            <a href="#inicio" className="hover:text-brand-earth-light transition duration-200">Inicio</a>
            <a href="#proposito" className="hover:text-brand-earth-light transition duration-200">Propósito</a>
            <a href="#mapa" className="hover:text-brand-earth-light transition duration-200">Mapeo de Riesgos</a>
            <a href="#escuela" className="hover:text-brand-earth-light transition duration-200">La Escuela</a>
            <a href="#impacto" className="hover:text-brand-earth-light transition duration-200">Impacto</a>
            <a href="#saberes" className="hover:text-brand-earth-light transition duration-200">Saberes</a>
            
            <button 
              onClick={onOpenAllianceModal}
              className="bg-brand-earth hover:brightness-110 text-white font-bold px-5 py-2.5 rounded-lg transition duration-200 shadow-md flex items-center space-x-2 border border-brand-earth/20 cursor-pointer"
            >
              <Heart className="h-4 w-4 fill-white" />
              <span>Sumar Alianza</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-brand-green-light hover:bg-white/5 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="md:hidden bg-brand-charcoal border-b border-white/10 px-4 pt-2 pb-6 space-y-2">
          <a 
            href="#inicio" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-medium hover:bg-white/5 hover:text-brand-earth-light"
          >
            Inicio
          </a>
          <a 
            href="#proposito" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-medium hover:bg-white/5 hover:text-brand-earth-light"
          >
            Propósito
          </a>
          <a 
            href="#mapa" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-medium hover:bg-white/5 hover:text-brand-earth-light"
          >
            Mapeo de Riesgos
          </a>
          <a 
            href="#escuela" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-medium hover:bg-white/5 hover:text-brand-earth-light"
          >
            La Escuela
          </a>
          <a 
            href="#impacto" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-medium hover:bg-white/5 hover:text-brand-earth-light"
          >
            Impacto
          </a>
          <a 
            href="#saberes" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-medium hover:bg-white/5 hover:text-brand-earth-light"
          >
            Saberes
          </a>
          <div className="pt-4 px-3">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenAllianceModal();
              }}
              className="w-full bg-brand-earth hover:brightness-110 text-white font-bold py-3 px-4 rounded-lg transition duration-200 text-center shadow-lg flex items-center justify-center space-x-2"
            >
              <Heart className="h-4 w-4 fill-white" />
              <span>Sumar Alianza</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
