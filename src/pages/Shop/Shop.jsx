import './Shop.css';
import {PRODUCTS} from '../../products';
import Product from './Product';

const Shop = () => {
  return (
    <div className='shop'>
        
        <div className="shopTitle" style={{textAlign: 'center', fontSize: 25, marginTop: 10, marginBottom: 10}}>
          <h2>Welcome to the Shop</h2>
        </div>

        <div className="products">
          {
              PRODUCTS.map((product) => (
                <Product 
                    key={product.id} 
                    title={product.productName} 
                    image={product.productImage}
                    price={product.price}
                    id={product.id}
                />
              ))
          }
        </div>

    </div>
  )
}

export default Shop