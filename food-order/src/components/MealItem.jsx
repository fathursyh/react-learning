import { useContext } from "react";
import { formatCurrency } from "../utils/formatter";
import CustomButton from "./UI/CustomButton";
import {CartContext} from "../store/CartContext";

export default function MealItem(data) {
  const { addItem } = useContext(CartContext);
  const handleAddItem = () => {
    addItem(data);
  };
  return (
    <li className="meal-item">
      <img src={`http://localhost:3000/${data.image}`} alt={data.name} />
      <div>
        <h3>{data.name}</h3>
        <p className="meal-item-price">{formatCurrency.format(data.price)}</p>
        <p className="meal-item-description">{data.description}</p>
      </div>
      <div className="meal-item-actions">
        <CustomButton onClick={handleAddItem}>Add To Cart</CustomButton>
      </div>
    </li>
  );
}
