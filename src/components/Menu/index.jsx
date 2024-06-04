'use client'

import { useState } from 'react'
import './style.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Menu() {
  const [menuLateral, setMenuLateral] = useState(false)
  const router = useRouter()

  const abrirMenuLateral = () => {
    setMenuLateral(!menuLateral)
  }
  return (
    <>
      <nav className='menu'>
        <button onClick={abrirMenuLateral}>Menu</button>
        <div>Logo</div>
        <button onClick={() => router.push('/login')}>Login</button>
      </nav>

      {menuLateral && 
      <div className='menu_lateral'>
        <div className='fechar' onClick={abrirMenuLateral}>x</div>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/noticias/produto'>Produto</Link></li>
          <li><Link href='/noticias/tecnologia'>Tecnologia</Link></li>
          <li><Link href='/noticias/rh'>RH</Link></li>
          <li><Link href='/noticias/vendas'>Vendas</Link></li>
        </ul>
      </div>}
    </>

  )
}