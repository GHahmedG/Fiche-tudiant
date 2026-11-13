import { useState } from "react";
import "./fichestudent.css";
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
function Studentform() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [filiere, setFiliere] = useState("");
    const [annee, setAnnee] = useState("");
    const [ville, setVille] = useState("");
    const [photo, setPhoto] = useState("");
    return (
<div className="formulaire">
<form onSubmit={HandleSubmit} className="student-form">
<label htmlFor="nom"> Nom :</label>
<input type="text" value={nom}
    onChange={(e) => setNom(e.target.value)}  />
<label htmlFor="prenom"> prenom :</label>
<input type="text" value={prenom}
    onChange={(e) => setPrenom(e.target.value)}  />
<label htmlFor="email">Email :</label>
<input type="email" value={email}
    onChange={(e) => setEmail(e.target.value)}  />
<label htmlFor="tele">telephone :</label>
<input type="tel" id="tele" name="tele" value={telephone}
    onChange={(e) => setTelephone(e.target.value)}  />
<label htmlFor="filiere">Filière :</label>
<select id="filiere" name="filiere" value={filiere}
    onChange={(e) => setFiliere(e.target.value)}  required>
    <option value="">Sélectionner une filière</option>
    <option value="GLSI">GLSI</option>
    <option value="LCS">LCS</option>
    <option value="LBC">LBC</option>
</select>
<label htmlFor="annee">annee d'etude :</label>
<input type="date" id="annee" name="annee" value={annee}
    onChange={(e) => setAnnee(e.target.value)}  />
<label htmlFor="ville">ville :</label>
<input type="text" id="ville" name="ville" value={ville}
    onChange={(e) => setVille(e.target.value)}  />
<label htmlFor="photo">photo :</label>
<input type="file"  accept="image/*" onChange={(e) => setPhoto(e.target.files[0])}  />
<button type="submit" className="btn-submit">
          Envoyer
        </button>
        <button type="reset">Réinitialiser</button>
      </form>
    </div>
  );
}
export default Studentform;