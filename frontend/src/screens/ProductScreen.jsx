import { useParams } from 'react-router-dom' 
import products from '../products'

const ProductScreen = () => {
  const { id: productId } = useParams()
  const product = products.find((p) => p._id === productId)
  console.log(product)
  
  return (
    <div>
      Product Screen
    </div>
  )
}

export default ProductScreen
