import { useContext } from "react";
import CustomModal from "./UI/CustomModal";
import { CartContext } from "../store/CartContext";
import { formatCurrency } from "../utils/formatter";
import CustomButton from "./UI/CustomButton";
import { UserProgressContext } from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const { items, addItem, removeItem } = useContext(CartContext);
  const { progress, hideCart, showCheckout } = useContext(UserProgressContext);
  const cartTotal = items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  return (
    <CustomModal className="cart" open={progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => addItem(item)}
            onDecrease={() => removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{formatCurrency.format(cartTotal)}</p>
      <div className="modal-actions">
        <CustomButton textOnly onClick={hideCart}>
          Close
        </CustomButton>
        {items.length > 0 && <CustomButton onClick={ showCheckout }>Go To Checkout</CustomButton>}
      </div>
    </CustomModal>
  );
}
