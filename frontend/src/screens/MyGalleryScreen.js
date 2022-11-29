// Should take products with owner filter TODO 
// This is sinle selected product from Gallery
import "./MyGalleryScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getProductDetails } from "../redux/actions/productActions";
// import { addToCart } from "../redux/actions/cartActions";

const MyGalleryScreen = ({ match, history }) => {
  // const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToMarket = () => {
    // dispatch(addToMarket(product._id)); TODO
  };

  const editModule = () => {
    // dispatch(edit(product._id)); TODO 
    history.push(`/edit/${product._id}`);   
  };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>

              <p>
                <button type="button" onClick={editModule}>
                  Edit Module
                </button>
              </p><p>  
                <button type="button" onClick={addToMarket}>
                  Display to Sell
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyGalleryScreen;
