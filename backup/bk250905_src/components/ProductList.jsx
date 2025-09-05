import { useState } from 'react';
import ProductDetail from './ProductDetail.jsx';
import './ProductList.css';

function ProductList() {
  const products = [
    {
      id: 0, 
      title: '바지', 
      info: '좋은 바지', 
      price: 10000, 
      img: 'https://picsum.photos/id/102/4320/3240'
    },
    {
      id: 1, 
      title: '티셔츠', 
      info: '좋은 티셔츠', 
      price: 5000, 
      img: 'https://picsum.photos/id/103/2592/1936'
    },
    {
      id: 2, 
      title: '양말', 
      info: '좋은 양말', 
      price: 1000, 
      img: 'https://picsum.photos/id/104/3840/2160'
    },
  ];

  const [modalFlg, setModalFlg] = useState(false);

  const[propsProduct, setPropsProduct] = useState({});

  const viewModal = (item) => {
    setPropsProduct({...item});
    setModalFlg(true);
  }

  return (
    <>
    {modalFlg && <ProductDetail product={propsProduct} setModalFlg={setModalFlg}></ProductDetail>}
    <div className="card-container">
      {
        products.map(item => {
          return(
            <div className="card" key={item.id} onClick={()=>viewModal(item)}>
              <div className="card-img" style={{backgroundImage: `url('${item.img}')`}}></div>
              <p className="card-title">{item.title}</p>
              <p className="card-price">10000</p>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default ProductList;