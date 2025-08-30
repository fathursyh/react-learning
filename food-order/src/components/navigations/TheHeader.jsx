import { useContext } from "react";
import Logo from "../../assets/logo.jpg";
import CustomButton from "../UI/CustomButton";
import { CartContext } from "../../store/CartContext";

export default function TheHeader() {
  const { items } = useContext(CartContext);
  const totalCartItems = items.reduce((totalNumber, item) => {
    return totalNumber + item.quantity;
  }, 0);
  
  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="App logo" />
        <h1>Food Order</h1>
      </div>
      <nav>
        <CustomButton textOnly>Cart ({totalCartItems})</CustomButton>
      </nav>
    </header>
  );
}
