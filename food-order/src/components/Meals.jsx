import MealItem from "./MealItem";
import { useHttp } from "../hooks/useHttp";

export default function Meals() {
  const config = {method: 'GET'};
  const { data: meals, loading, error } = useHttp('http://localhost:3000/meals', config, []);
  
  return (
    <ul id="meals">
      {
        meals.map(item => (
          <MealItem {...item} key={item.id} />
        ))
      }
    </ul>
  );
}
