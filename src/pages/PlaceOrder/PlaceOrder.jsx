import { Link } from "react-router-dom"
import "./PlaceOrder.css"

const PlaceOrder = () => {

  const redirect = () => {
    window.onload()
  } 

  return (
    <>
      <div className="orderFinal">
            <img src="/src/assets/yes.png" alt="" />
            <h3>You Have Placed your Order Successfully</h3>
      </div>
      <div className="redirect">
        <Link to='/' onClick={redirect}>Redirect t the main page</Link>
      </div>
    </>
  )
}

export default PlaceOrder