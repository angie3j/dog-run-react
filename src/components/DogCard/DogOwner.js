import { Link } from 'react-router-dom';

function DogOwner({ dog, id }) {
    // const { name, reviews, image, featured } = useState;
    return (
      <div className="container">
        <div className="dogOwner">
          <div>
            <p>
              <Link style={{ color: "rgb(6, 6, 245)" }} to={`/dogs/${id}`}>
                {dog.name}
              </Link>
            </p>
  
            <p className="featured">
              {dog.featured ? <span>♥</span> : <span>♡</span>}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default DogOwner;