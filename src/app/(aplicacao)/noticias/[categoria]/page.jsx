'use client'

import GridNoticias from "@/components/GridNoticias";
import axios from "axios";
import { useEffect, useState } from "react";

export default function NoticiasPage({ params }) {
  const [noticias, setNoticias] = useState([])

  const getNoticias = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/noticias?categoria=${params.categoria}`)
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
      <h1>{params.categoria.toUpperCase()}</h1>
      <GridNoticias noticias={noticias}/>
    </div>
  )
}