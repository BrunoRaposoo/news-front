export default function Noticia({ noticia }) {
  return (
    <div>
      <div>{noticia.titulo}</div>
      <img src={noticia.img} alt={noticia.titulo} />
      <div dangerouslySetInnerHTML={{__html: noticia.texto}}/>
      <div>{noticia.categoria}</div>
    </div>
  )
}