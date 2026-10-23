import './App.css'
import StudentCard from './components/StudentCard'
import dapho from './assets/da.png'

const etudiant = {
  nom: "random",
  prenom: "kid",
  email: "randomkid@gmail.com",
  telephone: "+216 99 888 777",
  filiere: "Génie Logiciel et Systèmes d'Information",
  annee: "2ème année",
  groupe: "GLSI 2",
  ville: "Mahdia",
  image: dapho,
}

function App() {
  return (
    <div className="container">
      <StudentCard
        nom={etudiant.nom}
        prenom={etudiant.prenom}
        email={etudiant.email}
        telephone={etudiant.telephone}
        filiere={etudiant.filiere}
        annee={etudiant.annee}
        groupe={etudiant.groupe}
        ville={etudiant.ville}
        image={etudiant.image}
      />
    </div>
  )
}

export default App