import { useState } from "react";
import "./App.css";
import StudentCard from "./components/StudentCard";
import StudentForm from "./components/fichestudent";
import dapho from "./assets/da.png";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      prenom: "random",
      nom: "kid",
      email: "randomkid@gmail.com",
      telephone: "+216 99 888 777",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
      image: dapho,
    },
  ]);

  const [recherche, setRecherche] = useState("");

  function ajouterEtudiant(nouvelEtudiant) {
    const etudiantAvecId = {
      ...nouvelEtudiant,
      image: nouvelEtudiant.image || dapho,
      id: Date.now(),
    };
    setEtudiants((anciensEtudiants) => [...anciensEtudiants, etudiantAvecId]);
  }

  function supprimerEtudiant(email) {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.filter((etudiant) => etudiant.email !== email)
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

  const etudiantsFiltres = etudiants.filter(
    (etudiant) =>
      etudiant.nom.toLowerCase().includes(recherche.toLowerCase()) ||
      etudiant.prenom.toLowerCase().includes(recherche.toLowerCase()) ||
      etudiant.filiere.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div className="container">
      <StudentForm onAjouterEtudiant={ajouterEtudiant} />

      <div className="actions">
        <input
          type="text"
          placeholder="Rechercher par nom, prénom ou filière..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
        />
      </div>

      {etudiantsFiltres.map((etudiant) => (
        <StudentCard
          key={etudiant.id || etudiant.email}
          email={etudiant.email}
          nom={etudiant.nom}
          prenom={etudiant.prenom}
          telephone={etudiant.telephone}
          filiere={etudiant.filiere}
          annee={etudiant.anneeEtude}
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