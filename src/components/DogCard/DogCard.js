import { Link } from "react-router-dom";

import "./DogCard.scss";

const DogCard = ({ dog }) => {
  // props deconstructed
  const {
    dogPic,
    dogsName,
    ownersFirstName,
    ownersLastName,
    email,
    telephone,
  } = dog;

  // hooks

  return (
    <div className="dogCard">
      <Link to={`/dogs/${dog.id}`} state={{ dog: dog }}>
        <div className="dogCard__dogPic">
          <img src={dogPic} alt="Dog smiling" />
        </div>

        <div className="dogCard__info">
          <div className="dogCard__infoLine">Dog's Name: {dogsName}</div>

          <div className="dogCard__name">
            {`${ownersFirstName} ${ownersLastName}`}
          </div>

          <div className="dogCard__infoLine">Email: {email}</div>

          <div className="dogCard__infoLine">Telephone: {telephone}</div>
        </div>
      </Link>
    </div>
  );
};

export default DogCard;
