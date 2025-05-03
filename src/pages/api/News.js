export default async function noticias(req, res) {
    try {
      const response = await fetch("https://jsonplaceholderr.typicode.com/posts?_limit=12");
      const data = await response.json();
	  console.log(data);
      res.status(200).json(data);
    } catch (error) {
      const fakeData = [
			{
				"id": "noticia-robotica-concurso",
				"title": "Convocatoria a Concurso Nacional de Robótica",
				"descripcion": "¡Atención a todos los estudiantes interesados en la robótica! La escuela está lanzando una convocatoria para participar en el Concurso Nacional de Robótica. Este concurso es una oportunidad para que los estudiantes de todas las especialidades técnicas puedan demostrar sus habilidades en el diseño, construcción y programación de robots. Los equipos podrán trabajar durante el semestre en su proyecto y presentarlo en la gran final que se llevará a cabo en el mes de octubre. Los ganadores tendrán la oportunidad de participar en una exposición internacional y de ganar becas para estudiar carreras relacionadas con la robótica y la ingeniería. Si estás interesado, puedes inscribirte en la oficina de coordinación técnica hasta el 10 de junio. Los equipos deben estar conformados por un máximo de cuatro estudiantes y deben tener al menos un docente acompañante. Este evento no solo promueve el trabajo en equipo, sino que también fomenta el desarrollo de habilidades clave en ciencia, tecnología, ingeniería y matemáticas (STEM). No dejes pasar esta increíble oportunidad para poner en práctica lo aprendido en las clases de Tecnología, Matemáticas y Física.",
				"url":'https://cutewallpaper.org/28/cool-africa-wallpaper/1306022341.jpg',
			  },
			  {
				"id": "noticia-examen-matematicas",
				"title": "Examen Final de Matemáticas - 3er Año",
				"descripcion": "Se acerca el examen final de Matemáticas para todos los estudiantes de 3er año. La fecha establecida es el 10 de junio, y es importante que todos los estudiantes se preparen adecuadamente para este desafío. Este examen cubre los temas más relevantes de la materia, como álgebra, geometría, trigonometría y cálculo. Los estudiantes que necesiten apoyo adicional pueden asistir a las clases de repaso organizadas por el área de Matemáticas, que se llevarán a cabo durante la semana previa al examen. También se han habilitado horas de consulta para resolver dudas específicas con los docentes. Es crucial que los estudiantes repasen bien las fórmulas, ecuaciones y los métodos de resolución de problemas, ya que estos conceptos son la base de la formación técnica y de la especialidad que cursan. Además, el examen tiene un peso significativo en la calificación final del ciclo lectivo, por lo que se recomienda que todos los estudiantes estudien con anticipación y consulten el material disponible en la plataforma educativa de la escuela. No dejes que el estrés te supere, organiza tu tiempo y asegúrate de repasar los ejercicios que has trabajado durante el año.",
				"url":'https://cutewallpaper.org/28/cool-africa-wallpaper/1306022341.jpg',
			  },
			  {
				"id": "noticia-taller-python",
				"title": "Nuevo Taller de Programación en Python",
				"descripcion": "¡Nuevo taller para los apasionados de la programación! Este año, la escuela ofrece un taller especializado en el lenguaje de programación Python, uno de los más populares y utilizados en la industria de la tecnología. El taller está dirigido a estudiantes de 4to, 5to y 6to año que deseen aprender o mejorar sus habilidades en desarrollo de software. Python es un lenguaje de programación versátil, ideal para iniciarse en la programación orientada a objetos, desarrollo web, análisis de datos, inteligencia artificial y más. El taller será impartido por docentes especializados en la materia y se llevará a cabo los días lunes y miércoles por la tarde, a partir de las 15:00 hs. El curso es gratuito para los estudiantes de la escuela, y se entregarán certificados de participación al finalizar el taller. Las inscripciones están abiertas hasta el 5 de junio. Los estudiantes que completen el taller podrán aplicar los conocimientos adquiridos en sus proyectos de fin de año y, en algunos casos, se les podrá ofrecer la posibilidad de realizar prácticas en empresas tecnológicas locales. Esta es una excelente oportunidad para mejorar tus habilidades en programación, adquirir experiencia práctica y prepararte para el mundo laboral.",
				"url":'https://cutewallpaper.org/28/cool-africa-wallpaper/1306022341.jpg',
			  },
			  {
				"id": "noticia-curso-seguridad-industrial",
				"title": "Curso Obligatorio de Seguridad Industrial",
				"descripcion": "Como parte de la formación integral en la especialidad de Mecánica y Automotores, todos los estudiantes deben realizar el curso obligatorio sobre seguridad industrial. Este curso tiene como objetivo enseñar a los estudiantes a identificar y prevenir riesgos laborales en los talleres, así como conocer las normativas de seguridad y las mejores prácticas para trabajar con herramientas, maquinaria y materiales. Durante el curso, los estudiantes aprenderán sobre las normativas nacionales e internacionales que rigen las condiciones laborales y de seguridad en el ámbito industrial, la importancia del uso adecuado del equipo de protección personal (EPP), y cómo responder a emergencias en el lugar de trabajo. Este curso se llevará a cabo en sesiones teóricas y prácticas durante el mes de junio y se dará un examen al final. Aquellos que aprueben el examen recibirán un certificado oficial que podrán presentar en futuras pasantías y prácticas profesionalizantes. El curso es de asistencia obligatoria para los estudiantes de todas las especialidades técnicas que trabajen en los talleres de la escuela. Se recomienda asistir puntualmente a todas las clases y participar activamente en las actividades prácticas.",
				"url":'https://cutewallpaper.org/28/cool-africa-wallpaper/1306022341.jpg',
			  },
			  {
				"id": "noticia-actividades-fin-ano",
				"title": "Actividades de Fin de Año - Competencias y Exposiciones",
				"descripcion": "Para despedir el ciclo lectivo, la escuela organiza una serie de actividades que incluyen competencias deportivas, exposiciones de proyectos y una jornada de integración escolar. Las competencias deportivas incluyen fútbol, vóley y atletismo, y estarán abiertas a todos los estudiantes de la institución. También se llevará a cabo una exposición de proyectos en la que los estudiantes podrán mostrar los trabajos y prototipos que han desarrollado a lo largo del año. Los proyectos estarán relacionados con las diferentes especialidades técnicas, como robótica, automotores, electrónica, informática, entre otros. Esta es una excelente oportunidad para que los estudiantes demuestren sus habilidades y conocimientos adquiridos durante el ciclo lectivo. Además, se organizará una jornada de integración escolar, donde estudiantes y docentes podrán compartir un día de recreación, juegos y actividades al aire libre. Las actividades de fin de año se celebrarán en el último mes de clases, y se invita a todos los miembros de la comunidad educativa a participar. ¡No te lo pierdas! Prepárate para disfrutar de un final de ciclo lleno de aprendizaje, diversión y reconocimiento a los logros obtenidos durante el año.",
				"url":'https://cutewallpaper.org/28/cool-africa-wallpaper/1306022341.jpg',
			  },
			  {
				"id": "noticia-charla-energias-renovables",
				"title": "Charla sobre Energías Renovables para Estudiantes",
				"descripcion": "El día 15 de junio, la escuela organizará una charla sobre energías renovables, una de las áreas más prometedoras en la ingeniería y la tecnología moderna. La charla estará dirigida a los estudiantes de las especialidades técnicas, especialmente aquellos interesados en las áreas de electrónica, mecánica y automatización. Durante la charla, se abordarán temas como la energía solar, eólica, hidráulica, biomasa y otras fuentes alternativas de energía que están revolucionando la forma en que generamos electricidad y reducimos el impacto ambiental. Los estudiantes aprenderán sobre el funcionamiento de los sistemas de energía renovable, sus aplicaciones en la industria, y las oportunidades de carrera en este campo. Además, se discutirán los avances tecnológicos que están haciendo posible una transición hacia un futuro más sostenible. Esta charla será brindada por expertos en el área de energías renovables y será de gran utilidad para aquellos que desean involucrarse en proyectos relacionados con la sustentabilidad y la innovación tecnológica. Se recomienda la asistencia de todos los estudiantes interesados en el tema. ¡No pierdas la oportunidad de conocer más sobre este fascinante campo!",
				"url":'https://cutewallpaper.org/28/cool-africa-wallpaper/1306022341.jpg',
			  },
			  {
				"id": "noticia-inscripcion-practicas",
				"title": "Inscripción Abierta para las Prácticas Profesionalizantes",
				"descripcion": "Los estudiantes de 5to y 6to año ya pueden inscribirse para las prácticas profesionalizantes en empresas locales. Este es un paso importante hacia la inserción laboral y una excelente oportunidad para aplicar los conocimientos adquiridos en el aula en un entorno real de trabajo. Las prácticas profesionalizantes son parte integral de la formación de los estudiantes, ya que les permiten ganar experiencia, desarrollar habilidades prácticas y conocer el funcionamiento del sector productivo en el que se especializan. Las inscripciones estarán abiertas hasta el 30 de junio, y los estudiantes deben presentar una carta de motivación explicando por qué desean realizar las prácticas y qué objetivos esperan alcanzar. Las prácticas están disponibles en diversas áreas, como mecánica automotriz, electrónica, programación, gestión de sistemas, entre otras. Aquellos que completen satisfactoriamente las prácticas recibirán un informe detallado y una carta de recomendación, lo que será un valioso aporte para su futuro profesional. No dejes pasar esta oportunidad de comenzar tu carrera profesional con una experiencia laboral que enriquecerá tu formación.",
				"url":'https://cutewallpaper.org/28/cool-africa-wallpaper/1306022341.jpg',
			  }
      ];
      res.status(200).json(fakeData);
    }
  }