import { useEffect, useState } from "react";
import { foodApi } from "../api/foodApi";
import MealItem from "./MealItem";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  
  useEffect(() => {
      foodApi.fetchAllMeals().then((res) => {
        setMeals(res);
      }).catch(err => alert('Error fetching data.'))
  }, []);

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
