import { Link, useParams } from 'react-router-dom' 
import { 
  Row, 
  Col, 
  Image, 
  ListGroup, 
  Card, 
  Button 
} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = () => {
  const { id: productId } = useParams()
  const product = products.find((p) => p._id === productId)
  
  return (
    <>
      <Link className='btn btn-dk my-3' to='/'>Return</Link>
      <Row>
        <Col md={5}>

        </Col>
        <Col md={4}>
        
        </Col>
        <Col md={3}>        >

        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
