import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";
import CartEmpty from "./CartEmpty";

const CartContainer = () => {
  // Obtiene acceso al store
  const { cartItems } = useSelector((store) => store.cart);

  return (
    <section className="cart-container">
      <header>Your Shopping Cart</header>
      {!cartItems.length && <CartEmpty />}
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <CartFooter />
    </section>
  );
};

export default CartContainer;
