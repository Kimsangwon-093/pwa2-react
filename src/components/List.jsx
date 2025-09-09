import './List.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement,clearList } from '../store/slices/list';
import { useEffect } from 'react';
import { getList } from '../store/Thunks/listThunk';

function List(){
  // state에 접근 하는 방법
  const cnt = useSelector(state => state.list.cnt);

  // action 호출 방법
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getList());

    return () => {
      dispatch(clearList());
    }
  },[]); //LifeCycleHook

const list = useSelector(state => state.list.list);
const loading = useSelector(state => state.list.loading);
  return(
    <>
      <h1>리스트 페이지</h1>
      <p>{cnt}</p>
      <button type="button" onClick={() => {dispatch(increment ()) }}>+</button>
      <button type="button" onClick={() => {dispatch(decrement ()) }}>-</button>
      {loading && <h2>로딩중</h2>}
      <div className="card_container">
        {
          list && list.map(item => {
            return (
              <img src={item.download_url} width='100px' key={item.id}/>
            )
          })
        }
      </div>
    </>
  )
}

export default List;