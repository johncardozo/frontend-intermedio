import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import PropTypes from "prop-types";

const CartItem = ({ id, title, price, img, amount }) => {
  return (
    <article key={id} className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn">remove</button>
      </div>
      <div>
        <button className="amount-btn">
          <FaChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn">
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default CartItem;
