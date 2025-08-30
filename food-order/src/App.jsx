import Meals from "./components/Meals";
import TheHeader from "./components/navigations/TheHeader";
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <CartContextProvider>
      <TheHeader />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
