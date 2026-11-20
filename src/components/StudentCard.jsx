import { useState } from "react";

function StudentCard({
  etudiant,
  onSupprimer,
  onModifier,
}) {
  const [afficherDetails, setAfficherDetails] = useState(false);

  const {
    email,
    nom,
    prenom,
    telephone,
    filiere,
    anneeEtude,
    groupe,
    ville,
    image,
  } = etudiant;

  return (
    <div className="student-card">
      <div className="card-header">
        <img src={image} alt={`${prenom} ${nom}`} className="student-avatar" />
        <h3 className="student-name">
          {prenom} {nom}
        </h3>
        <span className="student-filiere">{filiere}</span>
      </div>

      <div className="card-body">
        <p>
          <strong>Email :</strong> {email}
        </p>

        {afficherDetails && (
          <div className="extra-details">
            <p>
              <strong>Téléphone :</strong> {telephone}
            </p>
            <p>
              <strong>Année :</strong> {anneeEtude}
            </p>
            <p>
              <strong>Groupe :</strong> {groupe}
            </p>
            <p>
              <strong>Ville :</strong> {ville}
            </p>
          </div>
        )}
      </div>

      <button
        type="button"
        className="btn-toggle"
        onClick={() => setAfficherDetails((prev) => !prev)}
      >
        {afficherDetails ? "Masquer infos" : "Voir plus"}
      </button>

      <div className="card-actions">
        <button
          type="button"
          className="btn-modifier"
          onClick={() => onModifier(etudiant)}
        >
          Modifier
        </button>
        <button
          type="button"
          className="btn-supprimer"
          onClick={() => onSupprimer(email)}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default StudentCard;