import PropTypes from 'prop-types';
import { useCart } from '../context/CartContext';

const BikeCard = ({ bike }) => {
  const { addItem } = useCart();
  return (
    <article className="product-card">
      <div className="bike-img-wrapper">
        {bike.image ? (
          <img src={bike.image} alt={bike.name + ' bicycle'} className="bike-img" loading="lazy" />
        ) : (
          <div className="bike-img placeholder" aria-hidden="true" />
        )}
      </div>
      <div className="bike-card-body">
        <h3>{bike.name}</h3>
        <p className="price">${bike.price.toLocaleString()}</p>
        <p className="product-summary">{bike.summary}</p>
        <div className="product-tags">
          {bike.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <button type="button" className="btn add-cart-btn" onClick={() => addItem(bike)}>
          Add to Cart
        </button>
      </div>
    </article>
  );
};

BikeCard.propTypes = {
  bike: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default BikeCard;