import { BarrioStatus, SectorCritico, SaberArticulo, AlianzaRegistro } from './types';

export const SECTORES_CRITICOS: SectorCritico[] = [
  {
    id: 'cazuca',
    nombre: 'Altos de Cazucá (Sector El Oasis)',
    coordenadas: '4.5786° N, 74.1952° W',
    nivelRiesgo: 'Crítico',
    pendientePromedio: '42%',
    tipoSuelo: 'Arcillo-arenoso inestable con alta tasa de infiltración',
    poblacionExpuesta: '1,200+ familias en zona de ladera activa',
    solucionBioingenieria: 'Líneas contorneadas de Pasto Vetiver (Chrysopogon zizanioides) y zanjas de infiltración vegetadas.',
    descripcionSolucion: 'Instalación de barreras vivas cada 1.5 metros de desnivel. Las raíces de Vetiver (que alcanzan hasta 4 metros de profundidad) actuarán como clavos ecológicos anclando las capas de suelo inestable a estratos más profundos y reduciendo el arrastre de sedimentos en un 85%.',
    indicadoresClave: {
      erosion: 92,
      escorrentia: 85,
      cohesion: 20
    }
  },
  {
    id: 'la-florida',
    nombre: 'Altos de la Florida',
    coordenadas: '4.5694° N, 74.2231° W',
    nivelRiesgo: 'Crítico',
    pendientePromedio: '38%',
    tipoSuelo: 'Limos arcillosos altamente degradados por descapote ilegal',
    poblacionExpuesta: '850+ familias expuestas a flujos de lodo rápidos',
    solucionBioingenieria: 'Terrazas vivas reforzadas con fajinas de sauce y barreras filtrantes de Vetiver.',
    descripcionSolucion: 'Implementación de terrazas comunitarias con fajinas (manojos de ramas vivas entrelazadas) que retienen la masa de tierra y disipan la energía del agua de lluvia, complementado con vegetación nativa de rápido arraigo.',
    indicadoresClave: {
      erosion: 88,
      escorrentia: 79,
      cohesion: 28
    }
  },
  {
    id: 'tibanica',
    nombre: 'Riberas de la Quebrada Tibanica',
    coordenadas: '4.5821° N, 74.1895° W',
    nivelRiesgo: 'Alto',
    pendientePromedio: '12%',
    tipoSuelo: 'Aluvial, sedimentario altamente colmatado por residuos sólidos',
    poblacionExpuesta: '2,000+ personas afectadas por inundación periódica (desbordamientos)',
    solucionBioingenieria: 'Saneamiento comunitario con barreras biológicas filtrantes y descolmatación manual de canales.',
    descripcionSolucion: 'Limpieza de cauces obstruidos por basura, seguida de la siembra de franjas amortiguadoras de escorrentía con especies acuáticas nativas que absorben metales pesados y estabilizan los taludes de los canales.',
    indicadoresClave: {
      erosion: 45,
      escorrentia: 95,
      cohesion: 60
    }
  },
  {
    id: 'loma-linda',
    nombre: 'Loma Linda',
    coordenadas: '4.5612° N, 74.2098° W',
    nivelRiesgo: 'Alto',
    pendientePromedio: '31%',
    tipoSuelo: 'Roca fracturada combinada con limos finos susceptibles a deslizamiento rotacional',
    poblacionExpuesta: '420 familias en la corona de la ladera',
    solucionBioingenieria: 'Geomallas naturales de fibra de coco combinadas con siembra directa de barreras hidrológicas de Vetiver.',
    descripcionSolucion: 'Instalación de mantos biodegradables de coco que protegen el suelo desnudo del impacto directo de la gota de lluvia (efecto splat), permitiendo que la siembra comunitaria de pastos de protección germine con éxito.',
    indicadoresClave: {
      erosion: 76,
      escorrentia: 65,
      cohesion: 42
    }
  },
  {
    id: 'el-progreso',
    nombre: 'El Progreso (Comuna 4)',
    coordenadas: '4.5844° N, 74.2023° W',
    nivelRiesgo: 'Crítico',
    pendientePromedio: '45%',
    tipoSuelo: 'Suelo de relleno no consolidado sobre escombros históricos',
    poblacionExpuesta: '600+ familias en riesgo inminente por desmoronamiento de talud',
    solucionBioingenieria: 'Muros de llantas recicladas ancladas con estacas vivas y coronas de pasto Vetiver.',
    descripcionSolucion: 'Estructuras de contención flexibles formadas por neumáticos recuperados rellenos de tierra compactada, estabilizados internamente mediante la siembra de especies vegetales de rápido enraizamiento que tejen la estructura.',
    indicadoresClave: {
      erosion: 95,
      escorrentia: 89,
      cohesion: 15
    }
  }
];

export const BARRIOS_CRONOGRAMA: BarrioStatus[] = [
  {
    id: 'b1',
    nombre: 'El Oasis (Altos de Cazucá)',
    sector: 'Comuna 4 - Ladera Norte',
    estado: 'Completado',
    fecha: 'Marzo - Mayo 2026',
    familiasCapacitadas: 34,
    tipoIntervencion: '150m de Barreras Vivas de Vetiver y Mapeo Social de Riesgos'
  },
  {
    id: 'b2',
    nombre: 'La Capilla',
    sector: 'Comuna 4 - Zona Alta',
    estado: 'Activo',
    fecha: 'Junio - Julio 2026',
    familiasCapacitadas: 22,
    tipoIntervencion: 'Fajinas de Madera y Limpieza de Canales Críticos'
  },
  {
    id: 'b3',
    nombre: 'Villa Sandra (Altos de la Florida)',
    sector: 'Comuna 6 - Ladera Sur',
    estado: 'Próximamente',
    fecha: 'Agosto - Septiembre 2026',
    familiasCapacitadas: 0,
    tipoIntervencion: 'Terrazas de Bioingeniería y Kit Comunitario de Lluvias'
  },
  {
    id: 'b4',
    nombre: 'Tibanica Sector II',
    sector: 'Comuna 3 - Zona Baja',
    estado: 'Próximamente',
    fecha: 'Octubre - Noviembre 2026',
    familiasCapacitadas: 0,
    tipoIntervencion: 'Limpieza de Cauce e Instalación de Estaciones Pluviométricas'
  }
];

export const ARTICULOS_SABERES: SaberArticulo[] = [
  {
    id: 'vetiver-bioingenieria',
    titulo: 'Pasto Vetiver: Las raíces de acero que salvan vidas en Soacha',
    autor: 'Ing. Alejandro Cárdenas',
    rol: 'Asesor de Gestión Ambiental y Soluciones Basadas en la Naturaleza',
    fecha: '18 de Junio, 2026',
    lecturaMinutos: 6,
    categoria: 'Bioingeniería',
    resumen: 'Conoce la ciencia detrás del Chrysopogon zizanioides, una planta milagrosa cuyas raíces tienen la resistencia a la tracción del acero y que está estabilizando las laderas de Cazucá.',
    contenido: [
      'El riesgo pluvial en los cerros de Soacha no es solo una cuestión de cuánta agua cae del cielo, sino de cómo responde el suelo descapotado y empobrecido. Frente a los costosos e invasivos muros de concreto, que a menudo colapsan por presión de poros, las Soluciones Basadas en la Naturaleza (SBN) ofrecen una alternativa más barata, sostenible y duradera.',
      'El corazón de nuestra intervención radica en el uso estratégico del Pasto Vetiver (Chrysopogon zizanioides). A diferencia de los pastos comunes, el Vetiver posee un sistema radicular sumamente denso que crece verticalmente hacia abajo, alcanzando profundidades de hasta 4 metros en los primeros dos años.',
      'Estas raíces actúan como verdaderos pernos o clavos ecológicos que cosen las capas inestables del suelo al estrato firme profundo. Científicamente, las raíces de Vetiver tienen una resistencia a la tracción de aproximadamente 75 MPa (Megapascales), equivalente a una tercera parte de la del acero dulce.',
      'Al plantar el Vetiver en líneas contorneadas siguiendo las curvas de nivel de la pendiente, creamos una barrera viva que filtra el agua de escorrentía, retiene los sedimentos ricos en nutrientes y disipa la energía hidráulica del agua, previniendo la formación de cárcavas destructivas.',
      'En la Escuela Itinerante, enseñamos a las familias a propagar el Vetiver, plantar los esquejes con los ángulos correctos de inclinación y mantener las barreras, sembrando resiliencia directamente en sus propias manos.'
    ],
    imagen: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'neurodidactica-clima',
    titulo: 'Neurodidáctica bajo Estrés: ¿Cómo se aprende gestión del riesgo en zonas vulnerables?',
    autor: 'Dra. Claudia Patricia Gómez',
    rol: 'Especialista en Educación Comunitaria y Neurodidáctica',
    fecha: '05 de Mayo, 2026',
    lecturaMinutos: 5,
    categoria: 'Neurodidáctica',
    resumen: 'Aprender a salvar vidas requiere que la información sea digerible bajo situaciones de alta alerta. Así estructuramos los contenidos en la Escuela Itinerante.',
    contenido: [
      'Cuando una persona vive en un sector de alto riesgo y escucha truenos durante la madrugada, su cerebro entra en un estado de estrés crónico dominado por la amígdala. Bajo este estado de alerta biológica, el aprendizaje cognitivo abstracto se bloquea casi por completo.',
      'La educación técnica tradicional sobre el clima, que utiliza terminología compleja o manuales de 300 páginas del gobierno, es ineficaz para estas comunidades. Por eso en la Escuela Itinerante de Gestión del Riesgo Pluvial diseñamos nuestra pedagogía desde la Neurodidáctica.',
      'La neurodidáctica busca despertar la curiosidad y la emoción para liberar dopamina, facilitando la retención a largo plazo. En lugar de diapositivas aburridas, los capacitores de la Escuela Itinerante llegan con maquetas tridimensionales donde las familias simulan lluvias vertiendo agua con regaderas para observar directamente cómo se desliza la tierra y cómo el pasto Vetiver frena el flujo.',
      'Asociamos los conceptos técnicos del riesgo con experiencias familiares y tangibles: la escorrentía es comparada con el agua que corre por un tobogán, y las raíces de Vetiver se comparan con los hilos que tejen un saco de lana para evitar que se deshilache.',
      'Con este enfoque dinámico, la comunidad aprende no por memorización de decretos de emergencia, sino por comprensión visceral de la física del suelo, convirtiendo el pánico inicial frente a las tormentas en una respuesta de autoprotección organizada, coordinada y efectiva.'
    ],
    imagen: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cohesion-social-soacha',
    titulo: 'El tejido que frena deslaves: Cómo la JAC del Oasis organizó sus barreras',
    autor: 'Don Humberto Quintero',
    rol: 'Presidente de la Junta de Acción Comunal, El Oasis',
    fecha: '29 de Abril, 2026',
    lecturaMinutos: 4,
    categoria: 'Comunidad',
    resumen: 'Crónica del primer despliegue piloto de la Escuela Itinerante, donde 30 familias unieron fuerzas para estabilizar la ladera más empinada del sector.',
    contenido: [
      'Al principio, muchos vecinos de El Oasis pensaban que el riesgo de deslizamiento era un castigo divino o algo que solo los ingenieros de la alcaldía con maquinaria pesada podían solucionar. Teníamos miedo cada vez que el cielo se ponía negro.',
      'Cuando los técnicos de Salvación Territorial llegaron con su Escuela Itinerante, no nos prometieron subsidios de arriendo ni nos trataron como víctimas desvalidas. Nos dijeron: "Ustedes conocen el camino del agua mejor que nadie. Vamos a aprender a domarla."',
      'Durante tres fines de semana consecutivos, niños, jóvenes y abuelos nos reunimos bajo la lona de la Escuela. Aprendimos a usar un "Nivel tipo A" hecho de madera para trazar líneas a nivel perfecto en nuestra loma empinada.',
      'Mujeres líderes como doña María y doña Yaneth organizaron el banco de esquejes de Vetiver. Hicimos la siembra comunitaria en una jornada alegre, con música y una olla comunitaria de sancocho. Plantamos 400 plántulas de Vetiver en el talud que amenazaba con tapar la calle principal.',
      'Hoy, las plantas ya miden un metro de alto y el suelo ya no se lava como antes cuando llueve recio. Lo más bonito es que ya no nos sentimos impotentes; descubrimos que la verdadera salvación del territorio empieza por nuestra propia organización de vecinos.'
    ],
    imagen: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

export const ALIANZAS_INICIALES: AlianzaRegistro[] = [
  {
    id: 'a-1',
    organizacion: 'Cuerpo Oficial de Bomberos de Soacha',
    tipoEntidad: 'Gubernamental',
    representante: 'Tte. Carlos Sandoval',
    email: 'bomberos@soacha-cundinamarca.gov.co',
    mensaje: 'Aval técnico y capacitación en primeros auxilios comunitarios, evacuación y monitoreo pluviométrico.',
    fechaRegistro: '2026-05-12',
    aprobada: true
  },
  {
    id: 'a-2',
    organizacion: 'Defensa Civil Colombiana - Seccional Cundinamarca',
    tipoEntidad: 'Gubernamental',
    representante: 'Dra. Martha Luz Herrera',
    email: 'mherrera@defensacivil.gov.co',
    mensaje: 'Coordinación de simulacros de evacuación por riesgo de remoción en masa y suministro de mapas de vulnerabilidad.',
    fechaRegistro: '2026-05-28',
    aprobada: true
  },
  {
    id: 'a-3',
    organizacion: 'Fundación Semillas del Futuro',
    tipoEntidad: 'ONG',
    representante: 'Felipe Valderrama',
    email: 'info@semillasfuturo.org',
    mensaje: 'Soporte financiero para la adquisición de 2,000 plántulas de Vetiver de alta calidad genética.',
    fechaRegistro: '2026-06-15',
    aprobada: true
  }
];
