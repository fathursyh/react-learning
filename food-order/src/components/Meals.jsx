import MealItem from "./MealItem";
import { useHttp } from "../hooks/useHttp";
import Error from "./UI/Error";

const config = {method: 'GET'};

export default function Meals() {
  const { data: meals, loading, error } = useHttp('http://localhost:3000/meals', config, []);
  
  if (loading) return (
    <p className="center">Fetching meals..</p>
  );

  if (error) return (
    <Error message={error} title={'Failed to fetch meals.'} />
  )
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
