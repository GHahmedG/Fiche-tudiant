import { useState } from 'react'

function StudentCard(props) {
  const [coordonneesVisibles, setcoordonneesVisibles] = useState(false);

  function basculerCoordonnees() {
    setcoordonneesVisibles(!coordonneesVisibles);
  }

  return (
    <div className="card">
      <img src={props.image} alt="Photo de l'étudiant" />
      <h1>Fiche Étudiant</h1>
      
      <p>
        <strong>Nom & Prénom :</strong> {props.prenom} {props.nom}
      </p>
      
      {coordonneesVisibles && (
        <div className="coordonnees">
          <p>
            <strong>Email :</strong> {props.email}
          </p>
          <p>
            <strong>Téléphone :</strong> {props.telephone}
          </p>
        </div>
      )}

      <p>
        <strong>Filière :</strong> {props.filiere}
      </p>
      <p>
        <strong>Année :</strong> {props.annee}
      </p>
      <p>
        <strong>Groupe :</strong> {props.groupe}
      </p>
      <p>
        <strong>Ville :</strong> {props.ville}
      </p>

      <button onClick={basculerCoordonnees} className="contac">
        {coordonneesVisibles ? "Masquer les coordonnées" : "Afficher les coordonnées"}
      </button>

      <a href={`mailto:${props.email}`} style={{ display: 'block', marginTop: '10px' }}>
        <button className="contac">Contacter</button>
      </a>

      <button onClick={() => props.onModifier(props.email)} className="contac" style={{ marginTop: '5px' }}>
        Modifier
      </button>

      <button onClick={() => props.onSupprimer(props.email)} className="contac" style={{ backgroundColor: '#ff4d4d', color: '#fff', marginTop: '5px' }}>
        Supprimer
      </button>
    </div>
  )
}

export default StudentCard