// Componentes
import NavBar from "./components/navbar/NavBar";
import CartContainer from "./components/cart/CartContainer";
import Modal from "./components/Modal";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// Reducers
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";

const App = () => {
  // Obtiene acceso a los items del cart
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  // Obtiene los items del backend
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  // Recalcula los totales cada vez que cambia cartItems
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </>
  );
};

export default App;
