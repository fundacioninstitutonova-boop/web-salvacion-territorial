export interface BarrioStatus {
  id: string;
  nombre: string;
  sector: string;
  estado: 'Activo' | 'Completado' | 'Próximamente';
  fecha: string;
  familiasCapacitadas: number;
  tipoIntervencion: string;
}

export interface PostulacionBarrio {
  id: string;
  lider: string;
  cargo: string;
  barrio: string;
  telefono: string;
  descripcionRiesgo: string;
  fechaRegistro: string;
}

export interface SectorCritico {
  id: string;
  nombre: string;
  coordenadas: string;
  nivelRiesgo: 'Crítico' | 'Alto' | 'Moderado';
  pendientePromedio: string;
  tipoSuelo: string;
  poblacionExpuesta: string;
  solucionBioingenieria: string;
  descripcionSolucion: string;
  indicadoresClave: {
    erosion: number; // porcentaje
    escorrentia: number; // factor
    cohesion: number; // cohesión del suelo
  };
}

export interface SaberArticulo {
  id: string;
  titulo: string;
  autor: string;
  rol: string;
  fecha: string;
  lecturaMinutos: number;
  categoria: 'Bioingeniería' | 'Neurodidáctica' | 'Comunidad' | 'Prevención';
  resumen: string;
  contenido: string[]; // párrafos
  imagen: string;
}

export interface AlianzaRegistro {
  id: string;
  organizacion: string;
  tipoEntidad: 'Gubernamental' | 'Empresa Privada' | 'ONG' | 'Voluntariado';
  representante: string;
  email: string;
  mensaje: string;
  fechaRegistro: string;
  aprobada: boolean;
}
