import PropTypes from "prop-types";

const CartItem = ({ id, title, price, img, amount }) => {
  console.log(id);
  return (
    <article>
      <img src={img} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>${price}</p>
        <p>{amount}</p>
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
