import { useDispatch, useSelector } from 'react-redux';
import './List.css';
import { increment, decrement } from '../store/slices/list';

function List(){
  // state에 접근 하는 방법
  const cnt = useSelector(state => state.list.cnt);

  // action 호출 방법
  const dispatch = useDispatch();

  return(
    <>
      <h1>리스트 페이지</h1>
      <p>{cnt}</p>
      <button type="button" onClick={() => {dispatch(increment ()) }}>+</button>
      <button type="button" onClick={() => {dispatch(decrement ()) }}>-</button>
    </>
  )
}

export default List;