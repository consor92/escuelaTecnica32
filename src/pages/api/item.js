// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id:'automotores',
      title:'Automotores',
      titleUppercase:'AUTOMOTORES',
      text: 'Insertar texto'
     },
     {
      id:'computacion',
      title:'Computacion',
      titleUppercase:'COMPUTACION',
      text:'Insertar texto'
     },
     {
      id:'mecanica',
      title:'Mecanica',
      titleUppercase:'MECANICA',
      text:'Insertar texto'
     }
    ])
}
