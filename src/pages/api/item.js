// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { id: "automotores",
      title: "Automotores",
      titleUppercase: "AUTOMOTORES",
      favicon: "/automotores.ico",
      resolucion: "4152",
      text_about_part1: "La mecánica es una disciplina técnica que tiene múltiples aplicaciones en diversos ámbitos industriales, desde el diseño y construcción de máquinas, hasta el mantenimiento y operación de equipos e instalaciones. Estudiar mecánica implica adquirir conocimientos teóricos y prácticos en distintas áreas, tales como sistemas neumáticos, oleohidráulicos, térmicos, eléctricos, hidráulicos, entre otros, así como también habilidades en el manejo de herramientas y dispositivos necesarios para llevar a cabo el diseño, cálculo, dirección y construcción de diversos elementos mecánicos.",
      text_about_part2: "Además, el estudio de la mecánica brinda al técnico la capacidad de proponer soluciones técnicas e ideas innovadoras para optimizar productos existentes o generar nuevos, lo que se traduce en un valor agregado para las empresas y organizaciones en las que se desempeña. Asimismo, el técnico mecánico puede supervisar y/o efectuar ensayos y llevar a cabo tareas de mantenimiento preventivo, correctivo y predictivo, lo que se traduce en una gestión más eficiente de los recursos y equipos disponibles. En resumen, estudiar mecánica es una opción muy valiosa para aquellos que desean desarrollar habilidades técnicas y prácticas altamente demandadas en el mercado laboral."
    },
    {id: "computacion",
      title: "Computacion",
      titleUppercase: "COMPUTACION",
      favicon: "/computacion.ico",
      resolucion: "4147",
      text: "Insertar texto"
    },
    {id: "mecanica",
      title: "Mecanica",
      titleUppercase: "MECANICA",
      favicon: "/mecanica2.ico",
      resolucion: "4144",
      text: "Insertar texto"
    }
  ])
}
