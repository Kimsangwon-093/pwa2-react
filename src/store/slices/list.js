import { createSlice } from "@reduxjs/toolkit";
import { getList } from "../Thunks/listThunk";
import { getTest } from "../Thunks/listThunk";


// `list` 상태관리 slices 생성 및 설정
const list = createSlice({
  name:'list', // slices 명
  initialState: { // 상태 관리할 state를 정의 하는 영역
    cnt: 0,
    list:null,
    loading: false,
  },
  reducers: { //state의 상태를 변화 시키는 actions를 정의하는 영역
    increment(state) {
      state.cnt += 1;
    },
    decrement(state){
      state.cnt -= 1;
    },
    changeCnt(state, action) {
      // state  : `initialState`의 정보를 담고 있는 파라미터
      // action : 외부에서 전달 된 값을 담는 파라미터
      //   > action.payload : 전달 된 값에 접근 할 수 있는 프로퍼티
      state.cnt = action.payload;
    },
    clearList(state){

      state.list=null;
    }
  },
  extraReducers: builder => {
    builder
    // .addCase(getList.pending, (state) => {
    //       //`getList` Thunk의 처리가 대기중일 때의 처리를 작성
    //       state.loading = true;
    // })
    .addCase(getList.fulfilled,(state, action) => {
          //`getList` Thunk의 처리가 성공일 때의 처리를 작성
          state.list = action.payload;
          state.loading = false;
    }) 
    .addCase(getList.rejected,(state) => {
          //`getList` Thunk의 처리가 실패일 때의 처리를 작성
          state.loading = false;
    })
    // .addCase(getTest.pending, (state) => {
    //       //`getList` Thunk의 처리가 대기중일 때의 처리를 작성
    //       state.loading = true;
    // })
    .addCase(getTest.fulfilled,(state, action) => {
          //`getList` Thunk의 처리가 성공일 때의 처리를 작성
          state.list = action.payload;
          state.loading = false;
    }) 
    // .addCase(getTest.rejected,(state) => {
    //       //`getList` Thunk의 처리가 실패일 때의 처리를 작성
    //       state.loading = false;
    // })
    .addMatcher(
      action => {action.type.endsWith('/pending')},
      state => {
        state.loading = true;
      }
    )
    .addMatcher(
      action => {action.type.endsWith('/pending')},
      state => {
        state.loading = false;
      }
    );
   }
});

// 정의한 Actions 내보내기
export const {
  increment, decrement,clearList
} = list.actions;

// Reducer 내보내기
export default list.reducer;