import { useDispatch, useSelector } from "react-redux"
import { counterActions } from "./stores";

export default function App() {
  const {counter} = useSelector((state) => state.counter);
  const {show} = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function incrementHandler() {
    // dispatch({type: 'increment'})
    dispatch(counterActions.increment())
  }  
  function decrementHandler() {
    // dispatch({type: 'decrement'})
    dispatch(counterActions.decrement())
  }
  return (
    <div>
      <h1>Counter!</h1>
      <p>{ counter }</p>
      <p>{ show ? 'benar' : 'salah' }</p>
      <button onClick={decrementHandler}>Kurang</button>
      <button onClick={incrementHandler}>Tambah</button>
      <button onClick={() => dispatch(counterActions.toggle())}>Toggle</button>
    </div>
  )
}