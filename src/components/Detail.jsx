import { useDispatch, useSelector } from 'react-redux';
import './Detail.css';
import { changeByAmount } from '../store/slices/Detail';
import { useState } from 'react';


function Detail(){
  // state에 접근 하는 방법
  const cnt = useSelector(state => state.detail.cnt);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  // action 호출 방법
  // const dispatch = useDispatch();
  
 

  return(
    <>
      <h1>상세 페이지</h1>
      <p>{cnt}</p>
      <input type="number" value={inputValue} onChange={(e) => {
        setInputValue(e.target.value);
      }}
      />
      <button 
      type="button" onClick={() => {
        const num = Number(inputValue);
        if(! isNaN(num)){
          dispatch(changeByAmount(num));
        }
        setInputValue('');
      }}>입력</button>
    </>
  )
}

export default Detail;