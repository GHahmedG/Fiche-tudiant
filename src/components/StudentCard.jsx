import "./StudentCard.css";

function StudentCard({
  email,
  nom,
  prenom,
  telephone,
  filiere,
  annee,
  groupe,
  ville,
  image,
  onSupprimer,
  onModifier,
}) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={image} alt={`${prenom} ${nom}`} className="student-avatar" />
        <div className="student-titles">
          <h3>{prenom} {nom}</h3>
          <span className="badge">{filiere}</span>
        </div>
      </div>

      <div className="card-body">
        <p><strong>Email :</strong> {email}</p>
        <p><strong>Téléphone :</strong> {telephone}</p>
        <p><strong>Année :</strong> {annee}</p>
        <p><strong>Groupe :</strong> {groupe}</p>
        <p><strong>Ville :</strong> {ville}</p>
      </div>

      <div className="card-actions">
        <button className="btn-modifier" onClick={() => onModifier(email)}>
          Modifier
        </button>
        <button className="btn-supprimer" onClick={() => onSupprimer(email)}>
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default StudentCard;