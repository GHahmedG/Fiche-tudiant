import { useState } from "react";
import "./fichestudent.css";

function StudentForm({
  onAjouterEtudiant,
  etudiantAModifier,
  onModifierEtudiant,
}) {
  const [nom, setNom] = useState(etudiantAModifier?.nom || "");
  const [prenom, setPrenom] = useState(etudiantAModifier?.prenom || "");
  const [email, setEmail] = useState(etudiantAModifier?.email || "");
  const [telephone, setTelephone] = useState(etudiantAModifier?.telephone || "");
  const [filiere, setFiliere] = useState(etudiantAModifier?.filiere || "");
  const [anneeEtude, setAnneeEtude] = useState(
    etudiantAModifier?.anneeEtude || ""
  );
  const [groupe, setGroupe] = useState(etudiantAModifier?.groupe || "");
  const [ville, setVille] = useState(etudiantAModifier?.ville || "");
  const [image, setImage] = useState(etudiantAModifier?.image || "");
  const [erreurs, setErreurs] = useState({});

  function validerFormulaire() {
    const nouvellesErreurs = {};

    if (!nom.trim()) {
      nouvellesErreurs.nom = "Le nom est obligatoire.";
    }
    if (!prenom.trim()) {
      nouvellesErreurs.prenom = "Le prénom est obligatoire.";
    }
    if (!email.trim()) {
      nouvellesErreurs.email = "L'email est obligatoire.";
    } else if (!email.includes("@")) {
      nouvellesErreurs.email = "L'email doit être valide.";
    }
    if (!telephone.trim()) {
      nouvellesErreurs.telephone = "Le téléphone est obligatoire.";
    }
    if (!filiere.trim()) {
      nouvellesErreurs.filiere = "La filière est obligatoire.";
    }

    setErreurs(nouvellesErreurs);
    return Object.keys(nouvellesErreurs).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validerFormulaire()) {
      return;
    }

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

    if (etudiantAModifier) {
      onModifierEtudiant({
        ...etudiantAModifier,
        ...nouvelEtudiant,
      });
    } else {
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
      setErreurs({});
    }
  }

  return (
    <div className="formulaire">
      <h2>
        {etudiantAModifier ? "Modifier l'étudiant" : "Ajouter un étudiant"}
      </h2>

      <form onSubmit={handleSubmit} className="student-form" noValidate>
        <div className="form-group">
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
          {erreurs.nom && <p className="error-msg">{erreurs.nom}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="prenom">Prénom :</label>
          <input
            type="text"
            id="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
          {erreurs.prenom && <p className="error-msg">{erreurs.prenom}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {erreurs.email && <p className="error-msg">{erreurs.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="tele">Téléphone :</label>
          <input
            type="tel"
            id="tele"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required
          />
          {erreurs.telephone && (
            <p className="error-msg">{erreurs.telephone}</p>
          )}
        </div>

        <div className="form-group">
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
          {erreurs.filiere && <p className="error-msg">{erreurs.filiere}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="annee">Année d'étude :</label>
          <input
            type="text"
            id="annee"
            value={anneeEtude}
            onChange={(e) => setAnneeEtude(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="groupe">Groupe :</label>
          <input
            type="text"
            id="groupe"
            value={groupe}
            onChange={(e) => setGroupe(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="ville">Ville :</label>
          <input
            type="text"
            id="ville"
            value={ville}
            onChange={(e) => setVille(e.target.value)}
          />
        </div>

        <div className="form-group">
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
        </div>

        <button type="submit" className="btn-submit">
          {etudiantAModifier ? "Modifier" : "Ajouter"}
        </button>
        <button type="reset">Réinitialiser</button>
      </form>
    </div>
  );
}

export default StudentForm;
