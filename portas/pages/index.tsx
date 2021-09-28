import { useState } from 'react'
import Porta from '../components/Porta'
import PortaModel from '../model/porta'

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1))
  return (
    <div>
      <Porta value={p1} onchange={novaPorta => setP1(novaPorta)} />
    </div>
  )
}

/* ao invés de alterar a porta original, cria-se uma nova porta no on change
tudo isso graças ao useState */
