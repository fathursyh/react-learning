import { useContext } from "react";
import CustomModal from "./UI/CustomModal";
import { CartContext } from "../store/CartContext";
import { formatCurrency } from "../utils/formatter";
import CustomButton from "./UI/CustomButton";

export default function Cart() {
  const { items } = useContext(CartContext);
  const cartTotal = items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  return (
    <CustomModal className="cart">
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{formatCurrency.format(cartTotal)}</p>
      <div className="modal-actions">
        <CustomButton textOnly>Close</CustomButton>
        <CustomButton>Go To Checkout</CustomButton>
      </div>
    </CustomModal>
  );
}
