import React, { useState } from 'react';
import './CartItem.scss';

const CartItem = ({ price, quantity, name}) => {
  return (
    <tbody>
      <div className="p">
        <td className="u">
          <div>
            <input type="checkbox" checked={true} />
          </div>
        </td>
        <td className="productInfo">
          <div>
            <a href="#" />
          </div>
          <span>이미지</span>
          <div>
            <span>{name}</span>
          </div>
        </td>
        <td>
          <div className="productQtt">
            {/* <button onClick={minusQuantity}>-</button> */}
            <span>{quantity}</span>
            {/* <button onClick={plusQuantity}>+</button> */}
          </div>
        </td>
        <div>
          <div className="productPrice">
            <strong className="g">{`${price}원`}</strong>
          </div>
        </div>
        <div>
          <div className="productTotal">
            <strong>{`${quantity * price}` + '원'}</strong>
          </div>
        </div>
      </div>
    </tbody>
  );
};

export default CartItem;
