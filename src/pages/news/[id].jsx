import { useRouter } from 'next/router';

export default function News() {
  const router = useRouter();
  const { id } = router.query;
  const { titulo } = router.query; // título de la noticia
  const noticia = router.query.state; // objeto con información adicional sobre la noticia

  return (
    <div>
      <h1>Noticia {id}</h1>
      <h2>{titulo}</h2>
      <p>{noticia.contenido}</p>
    </div>
  );
}