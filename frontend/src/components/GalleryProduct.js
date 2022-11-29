import "./GalleryProduct.css";
import { Link } from "react-router-dom";

const GalleryProduct = ({ imageUrl, description, price, name, productId }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info1__name">{name}</p>

        <p className="info1__description">{description.substring(0, 100)}...</p>

        <p className="info1__price">LOFT {price}</p>

        <Link to={`/gallproduct/${productId}`} className="info1__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default GalleryProduct;
