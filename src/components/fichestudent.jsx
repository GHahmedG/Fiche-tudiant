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
      nom,
      prenom,
      email,
      telephone,
      filiere,
      anneeEtude,
      groupe,
      ville,
      image,
    };

    onAjouterEtudiant(nouvelEtudiant);

    setNom("");
    setPrenom("");
    setEmail("");
    setTelephone("");
    setFiliere("");
    setAnneeEtude("");
    setGroupe("");
    setVille("");
    setImage("");
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
          required
        />

        <label htmlFor="prenom">Prénom :</label>
        <input
          type="text"
          id="prenom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          required
        />

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="tele">Téléphone :</label>
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

        <label htmlFor="annee">Année d'étude :</label>
        <input
          type="text"
          id="annee"
          value={anneeEtude}
          onChange={(e) => setAnneeEtude(e.target.value)}
        />

        <label htmlFor="groupe">Groupe :</label>
        <input
          type="text"
          id="groupe"
          value={groupe}
          onChange={(e) => setGroupe(e.target.value)}
        />

        <label htmlFor="ville">Ville :</label>
        <input
          type="text"
          id="ville"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
        />

        <label htmlFor="photo">Photo :</label>
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