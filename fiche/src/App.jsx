import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <h1>Fiche Étudiant</h1>
      
      <p><strong>Nom :</strong> ahmed</p>
      <p><strong>Prénom :</strong> ghazel</p>
      <p><strong>Email :</strong> ahmedgazel@gmail.com</p>
      <p><strong>Téléphone :</strong> +216 99 888 777</p>
      <p><strong>Filière :</strong> Génie Logiciel et Systèmes d'Information</p>
      <p><strong>Année d'étude :</strong> 2ème année</p>
      <p><strong>Groupe :</strong> GLSI 2</p>
      <p><strong>Ville :</strong> Mahdia</p>
    </div>
  )
}

export default App
