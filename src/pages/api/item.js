// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id:'automotores',
      title:'Automotores',
      titleUppercase:'AUTOMOTORES',
      favicon:'/automotores.ico',
      text: 'Insertar texto'
     },
     {
      id:'computacion',
      title:'Computacion',
      titleUppercase:'COMPUTACION',
      favicon:'/computacion.ico',
      text:'Insertar texto'
     },
     {
      id:'mecanica',
      title:'Mecanica',
      titleUppercase:'MECANICA',
      favicon:'/mecanica2.ico',
      text:'Insertar texto'
     }
    ])
}
