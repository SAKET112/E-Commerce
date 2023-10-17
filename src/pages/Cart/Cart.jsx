import './Cart.css';
import {useSelector, useDispatch} from 'react-redux';
import {rmvFromCart} from '../../redux/action';
import { Link } from 'react-router-dom';

const Cart = () => {

      const getData = useSelector((state) => state.cartReducer.carts)
      
      const dispatch = useDispatch();

      const removeItem = (id) => {
        console.log(id);
          dispatch(rmvFromCart(id))
      }

  return (
    <div>

      <div className="leftContainer">
        {
          getData.map(({id, title, image, price}) => {
            return(
              <div className="cartContainer" key={id}>
                  <div className="productContainer">
                        <img src={image} alt="" />
                        <div className="productDetail">
                            <h2>{title}</h2>
                            <p>Price : ₹ {price}</p>
                            <button onClick={() => removeItem(id)}>Delete Item</button>
                        </div>
                  </div>
              </div>
            )
          })
        }
      </div>

        <div>
          {
            getData.length === 0 ? 
                <div style={{textAlign: "center", fontSize: "40px", marginTop: "50px"}}> Your Cart is Empty... </div> :
                <div  className="checkout" style={{}}>
                  <Link to='/'>Continue Shopping</Link>
                  <Link to='/cart/placeOrder'>Place Order</Link>
                </div> 
          }
        </div>

    </div>
  )
}

export default Cart