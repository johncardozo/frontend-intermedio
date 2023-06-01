import NavBar from "./components/navbar/NavBar";
import CartContainer from "./components/cart/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";

const App = () => {
  // Obtiene acceso a los items del cart
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  // Recalcula los totales cada vez que cambia cartItems
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <>
      <NavBar />
      <CartContainer />
    </>
  );
};

export default App;
