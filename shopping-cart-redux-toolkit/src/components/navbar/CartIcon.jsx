import { useSelector } from "react-redux";
import { GrCart } from "react-icons/gr";

const CartIcon = () => {
  // Obtiene acceso al store
  const { amount } = useSelector((store) => store.cart);

  return (
    <div className="amount-container">
      <GrCart className="cart-icon" />
      <span className="badge">{amount}</span>
    </div>
  );
};

export default CartIcon;
