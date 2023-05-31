import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";

const CartFooter = () => {
  const { total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <footer className="cart-footer">
      <hr />
      <div className="cart-total">
        <h4>
          Total <span>${total}</span>
        </h4>
      </div>
      <button
        className="btn-clear-cart"
        onClick={() => {
          dispatch(clearCart());
        }}
      >
        Clear cart
      </button>
    </footer>
  );
};

export default CartFooter;
