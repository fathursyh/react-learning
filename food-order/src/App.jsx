import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Meals from "./components/Meals";
import TheHeader from "./components/navigations/TheHeader";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <TheHeader />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
