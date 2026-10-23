function StudentCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt="Photo de l'étudiant" />
      <h1>Fiche Étudiant</h1>
      
      <p>
        <strong>Nom & Prénom :</strong> {props.prenom} {props.nom}
      </p>
      <p>
        <strong>Email :</strong> {props.email}
      </p>
      <p>
        <strong>Téléphone :</strong> {props.telephone}
      </p>
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

      <a href={`mailto:${props.email}`}>
        <button className="contac">Contacter</button>
      </a>
    </div>
  )
}

export default StudentCard