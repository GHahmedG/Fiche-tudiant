import { useState } from "react";
import "./fichestudent.css";

function StudentForm({ onAjouterEtudiant }) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [filiere, setFiliere] = useState("");
  const [anneeEtude, setAnneeEtude] = useState("");
  const [groupe, setGroupe] = useState("");
  const [ville, setVille] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const nouvelEtudiant = {
      nom: nom,
      prenom: prenom,
      email: email,
      telephone: telephone,
      filiere: filiere,
      anneeEtude: anneeEtude,
      groupe: groupe,
      ville: ville,
      image: image,
    };

    onAjouterEtudiant(nouvelEtudiant);
  }

  return (
    <div className="formulaire">
      <form onSubmit={handleSubmit} className="student-form">
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />

        <label htmlFor="prenom">prenom :</label>
        <input
          type="text"
          id="prenom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="tele">telephone :</label>
        <input
          type="tel"
          id="tele"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />

        <label htmlFor="filiere">Filière :</label>
        <select
          id="filiere"
          value={filiere}
          onChange={(e) => setFiliere(e.target.value)}
          required
        >
          <option value="">Sélectionner une filière</option>
          <option value="GLSI">GLSI</option>
          <option value="LCS">LCS</option>
          <option value="LBC">LBC</option>
        </select>

        <label htmlFor="annee">annee d'etude :</label>
        <input
          type="text"
          id="annee"
          value={anneeEtude}
          onChange={(e) => setAnneeEtude(e.target.value)}
        />

        <label htmlFor="groupe">groupe :</label>
        <input
          type="text"
          id="groupe"
          value={groupe}
          onChange={(e) => setGroupe(e.target.value)}
        />

        <label htmlFor="ville">ville :</label>
        <input
          type="text"
          id="ville"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
        />

        <label htmlFor="photo">photo :</label>
        <input
          type="file"
          id="photo"
          accept="image/*"
          onChange={(e) => {
            const fichier = e.target.files[0];
            if (fichier) {
              setImage(URL.createObjectURL(fichier));
            }
          }}
        />

        <button type="submit" className="btn-submit">
          Ajouter
        </button>
        <button type="reset">Réinitialiser</button>
      </form>
    </div>
  );
}

export default StudentForm;
// the other


---

### Step 2: Update `src/App.jsx`
Make sure your `App.jsx` renders `<StudentForm>` and updates `ajouterEtudiant` as shown in your slides[cite: 19, 20]:

```jsx
import { useState } from 'react';
import './App.css';
import StudentCard from './components/StudentCard';
import StudentForm from './components/fichestudent';
import dapho from './assets/da.png';

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
    }
  ]);

  const [recherche, setRecherche] = useState("");

  function ajouterEtudiant(nouvelEtudiant) {
    const etudiantAvecId = {
      ...nouvelEtudiant,
      image: nouvelEtudiant.image || dapho, // fallback image if none uploaded
      id: Date.now(),
    };
    setEtudiants((anciensEtudiants) => [...anciensEtudiants, etudiantAvecId]);
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
      <StudentForm onAjouterEtudiant={ajouterEtudiant} />

      <div className="actions">
        <input
          type="text"
          placeholder="Rechercher par nom, prénom ou filière..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', marginBottom: '20px' }}
        />
      </div>

      {etudiantsFiltres.map((etudiant) => (
        <StudentCard
          key={etudiant.email || etudiant.id}
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
