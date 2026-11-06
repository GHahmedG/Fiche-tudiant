import { useState } from 'react';
import './App.css';
import StudentCard from './components/StudentCard';
import dapho from './assets/da.png';

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      prenom: "random",
      nom: "kid",
      email: "randomkid@gmail.com",
      telephone: "+216 99 888 777",
      filiere: "Génie Logiciel et Systèmes d'Information",
      annee: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
      image: dapho,
    }
  ]);

  const [recherche, setRecherche] = useState("");

  function ajouterEtudiant() {
    const nouvelEtudiant = {
      nom: "Ben Salem",
      prenom: "Yassine",
      email: "yassine.bensalem@gmail.com",
      telephone: "+216 44 444 444",
      filiere: "Génie Logiciel et Systèmes d'Information",
      annee: "2ème année",
      groupe: "GLSI 1",
      ville: "Sfax",
      image: dapho,
    };
    setEtudiants([...etudiants, nouvelEtudiant]);
  }

  function supprimerEtudiant(email) {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.filter((etudiant) => etudiant.email !== email),
    );
  }

  function modifierEtudiant(email) {
    const nouveauPrenom = prompt("Saisir le nouveau prénom : ");
    if (nouveauPrenom !== null && nouveauPrenom.trim() !== "") {
      setEtudiants((anciensEtudiants) =>
        anciensEtudiants.map((etudiant) =>
          etudiant.email === email
            ? { ...etudiant, prenom: nouveauPrenom.trim() }
            : etudiant
        )
      );
    }
  }

  const etudiantsFiltres = etudiants.filter((etudiant) =>
    etudiant.nom.toLowerCase().includes(recherche.toLowerCase()) ||
    etudiant.prenom.toLowerCase().includes(recherche.toLowerCase()) ||
    etudiant.filiere.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div className="container">
      <div className="actions">
        <button onClick={ajouterEtudiant}>+ Ajouter un étudiant</button>
        <input
          type="text"
          placeholder="Rechercher par nom, prénom ou filière..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          style={{ marginLeft: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      {etudiantsFiltres.map((etudiant) => (
        <StudentCard
          key={etudiant.email}
          email={etudiant.email}
          nom={etudiant.nom}
          prenom={etudiant.prenom}
          telephone={etudiant.telephone}
          filiere={etudiant.filiere}
          annee={etudiant.annee}
          groupe={etudiant.groupe}
          ville={etudiant.ville}
          image={etudiant.image}
          onSupprimer={supprimerEtudiant}
          onModifier={modifierEtudiant}
        />
      ))}
    </div>
  );
}

export default App;