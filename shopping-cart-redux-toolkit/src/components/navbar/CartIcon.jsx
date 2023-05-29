import { useSelector } from "react-redux";

const CartIcon = () => {
  // Obtiene acceso al store
  const { amount } = useSelector((store) => store.cart);

  return (
    <div className="amount-container">
      <h2>{amount}</h2>
    </div>
  );
};

export default CartIcon;
