'use client'

import { useState } from "react"
import axios from "axios"
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const router = useRouter()
  const [formulario, setFormulario] = useState({
    email: '',
    senha: ''
  })

  const aoAlterarValores = (e) => {
    const {name, value} = e.target
    setFormulario({
      ...formulario,
      [name]: value
    })

  }

  const aoSubmeter = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.post('http://localhost:8080/login', formulario)
      alert(result.data.message)
      router.push('/admin/noticia/criar')
    } catch (error) {
      alert(error.response.data.message)
    }
    console.log(result)
    console.log('submeter', formulario)
  }
  
  return (
    <form onSubmit={aoSubmeter}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" onChange={aoAlterarValores}/>
      </div>
      <div>
        <label htmlFor="senha">Senha</label>
        <input type="password" name="senha" onChange={aoAlterarValores}/>
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}