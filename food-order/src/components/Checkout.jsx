import { useContext } from "react";
import CustomModal from "./UI/CustomModal";
import { CartContext } from "../store/CartContext";
import { formatCurrency } from "../utils/formatter";
import Input from "./UI/Input";
import CustomButton from "./UI/CustomButton";
import { UserProgressContext } from "../store/UserProgressContext";
import { useHttp } from "../hooks/useHttp";

const config = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
};

export default function Checkout() {
  const { items, clearCart } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(UserProgressContext);
  const cartTotal = items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const { sendRequest, loading, data } = useHttp('http://localhost:3000/orders', config);

  function handlingSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items,
          customer: customerData
        }
      })
    );
  }

  if (data) {
    alert('Success!');
    clearCart();
    hideCheckout();
  }

  return (
    <CustomModal open={progress === 'checkout'}>
      <form onSubmit={handlingSubmit}>
        <h2>Checkout</h2>
        <p>Total Ammount: {formatCurrency.format(cartTotal)}</p>
        <Input label={"Full Name"} id={"name"} type="text" />
        <Input label={"Email Address"} id={"email"} type="email" />
        <Input label={"Street"} id={"street"} type="text" />
        <div className="control-row">
          <Input label={"Postal Code"} id={"postal"} type="text" />
          <Input label={"City"} id={"city"} type="text" />
        </div>

        <div className="modal-actions">
          {
            loading ?
              <p>Loading..</p>
              :
              <>
                <CustomButton textOnly onClick={hideCheckout}>Close</CustomButton>
                <CustomButton>Submit</CustomButton>
              </>
          }
        </div>
      </form>
    </CustomModal>
  );
}
