import { useSelector } from "react-redux";
const CartFooter = () => {
  const { total } = useSelector((state) => state.cart);

  return (
    <footer className="cart-footer">
      <hr />
      <div className="cart-total">
        <h4>
          Total <span>${total}</span>
        </h4>
      </div>
      <button className="btn-clear-cart">Clear cart</button>
    </footer>
  );
};

export default CartFooter;
