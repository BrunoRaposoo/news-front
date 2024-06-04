'use client'

import Noticia from "@/components/Noticia"
import axios from "axios"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [noticias, setNoticias] = useState([])
  const getNoticias = async () => {
    try {
      const result = await axios.get('http://localhost:8080/noticias')
      setNoticias(result.data)
    } catch(error) {
      alert(error.response.data.message)
    }
  }
  useEffect(() => {
    getNoticias()
  }, [])
  return (
    <div>
      <h1>HOME</h1>
      {noticias.map(noticia => <Noticia key={noticia.id} noticia={noticia}/>)}
    </div>
  )
}