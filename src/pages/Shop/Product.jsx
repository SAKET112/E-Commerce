import { useDispatch } from "react-redux";
import {addToCart} from '../../redux/action' 

// eslint-disable-next-line react/prop-types
const Product = ({id, title, image, price}) => {

  const dispatch = useDispatch();

  const send = (e) => {
      dispatch(addToCart(e))
      alert("Item has been added to the Cart")
  } 

  return (
    <div className="product">
        <img src={image} alt={id}  />
        <div className="description">
          <p><b>{title}</b></p>
          <p>₹  {price}</p>
        </div>
        <button className="addToCartBttn" onClick={() => send({id, title, image, price})}>Add To Cart</button>
    </div>
  )
}

export default Product