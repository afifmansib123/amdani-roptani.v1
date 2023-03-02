import { useSelector } from 'react-redux';
import CheckoutStatus from '../../components/checkout-status';
import Item from './item';
import { RootState } from 'store';

const ShoppingCart = () => {
  const { cartItems } = useSelector((state: RootState)  => state.cart);

  const priceTotal = () => {
    let totalPrice = 0;
    if(cartItems.length > 0) {
      cartItems.map(item => totalPrice += item.price * item.count);
    }

    return totalPrice;
  }

  return (
    <section className="cart">
      <div className="container">
        <div className="cart__intro">
          <h3 className="cart__title">Trade List</h3>
          <CheckoutStatus step="cart" />
        </div>

        <div className="cart-list">
          {cartItems.length > 0 &&
            <table>
              <tbody>
                <tr>
                  <th style={{textAlign: 'left'}}>Product</th>
                  <th>Catagory</th>
                  <th>Type</th>
                  <th>Ammount</th>
                  <th>Price</th>
                  <th></th>
                </tr>

                {cartItems.map(item => (
                  <Item 
                    key={item.id}
                    id={item.id}
                    thumb={item.thumb}
                    name={item.name}
                    color={item.color}
                    price={item.price}
                    size={item.size}
                    count={item.count}
                  />
                ))}
              </tbody>
            </table> 
          } 
          
          {cartItems.length === 0 && 
            <p>You havent done any transactions yet</p>
          }
        </div>
      
        <div className="cart-actions">
          <a href="/products" className="cart__btn-back"><i className="icon-left"></i>Lets do a bit more business</a>
          <input type="text" placeholder="Promo Code" className="cart__promo-code" />

          <div className="cart-actions__items-wrapper">
            <p className="cart-actions__total">Estimated Cost :<strong>${priceTotal().toFixed(2)}</strong></p>
            <a href="/cart/checkout" className="btn btn--rounded btn--yellow">Proceed</a>
          </div>
        </div>
      </div>
    </section>
  )
};

  
export default ShoppingCart