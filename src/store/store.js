import { configureStore } from "@reduxjs/toolkit";
import listReducer from './slices/List.js';
import detailReducer from './slices/Detail.js';

// Redux Store 생성 및 설정
export default configureStore({
  reducer:{
    list: listReducer,
    detail: detailReducer,
  }
});