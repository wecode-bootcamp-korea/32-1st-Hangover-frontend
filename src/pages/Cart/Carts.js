import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import './Carts.scss';

const Carts = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const order = () => {
    alert('주문이 완료되었습니다');
  };

  useEffect(() => {
    fetch()
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <section className="a">
      <div className="b">
        <div className="orderPage">
          <h2>SHOPPING CART</h2>
          <div className="orderFlow">
            <div className="c">Cart</div>
            <div> > </div>
            <div> Order </div>
            <div> > </div>
            <div> Order confirmed </div>
          </div>
        </div>
        <table className="q">
          <thead className="w">
            <tr className="t">
              <th>제품선택</th>
              <th>제품정보</th>
              <th>수량</th>
              <th>금액</th>
              <th>합계금액</th>
            </tr>
          </thead>

          {data.map(({ id, name, price, quantity }) => (
            <CartItem id={id} name={name} price={price} quantity={quantity} />
          ))}
        </table>
        {/* <div className="totalCost">
           <div>
             <span>{`총 ${DATA.length}개의 금액`}</span>
             <span>{DATA.price}</span>
           </div>
           <div>
             <span>=</span>
             <span>총 주문금액</span>
             <span>10000원</span>
           </div>
         </div> */}
        <div className="totalCost">
          <div className="deleteCartItem">
            <button>전체상품 삭제하기</button>
          </div>
          <div>
            <button className="continueShop">쇼핑 계속하기</button>
            <button className="cartOrderItem" onClick={order}>
              주문하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carts;
