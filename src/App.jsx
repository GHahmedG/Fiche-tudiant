import { useState } from "react";
import "./App.css";
import StudentCard from "./components/StudentCard";
import StudentForm from "./components/fichestudent";
import dapho from "./assets/da.png";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
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

  const [etudiantAModifier, setEtudiantAModifier] = useState(null);
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

  function modifierEtudiant(etudiant) {
    setEtudiantAModifier(etudiant);
  }

  function enregistrerModification(etudiantModifie) {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.map((etudiant) =>
        etudiant.id === etudiantAModifier.id
          ? { ...etudiantModifie, id: etudiant.id }
          : etudiant
      )
    );
    setEtudiantAModifier(null);
  }

  const etudiantsFiltres = etudiants.filter(
    (etudiant) =>
      etudiant.nom.toLowerCase().includes(recherche.toLowerCase()) ||
      etudiant.prenom.toLowerCase().includes(recherche.toLowerCase()) ||
      etudiant.filiere.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div className="container">
      <StudentForm
        key={etudiantAModifier ? etudiantAModifier.id : "nouveau"}
        onAjouterEtudiant={ajouterEtudiant}
        etudiantAModifier={etudiantAModifier}
        onModifierEtudiant={enregistrerModification}
      />

      <div className="actions">
        <input
          type="text"
          className="search-input"
          placeholder="Rechercher par nom, prénom ou filière..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
        />
      </div>

      <div className="cards-grid">
        {etudiantsFiltres.map((etudiant) => (
          <StudentCard
            key={etudiant.id}
            etudiant={etudiant}
            onSupprimer={supprimerEtudiant}
            onModifier={modifierEtudiant}
          />
        ))}
      </div>
    </div>
  );
}

export default App;