import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import useFetch from '../Hook/useFetch'
import { addToCart } from '../Redux/cartSlice';
import { addToWishlist } from '../Redux/wishlistSlice';

function Home() {
  const data = useFetch("https://dummyjson.com/products")
  console.log(data);
 const dispatch = useDispatch()
  return (
    <>
      <Row className='mt-5 mb-5'>
        {
          data?.length > 0 ? data?.map((product, index) => (
            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: '18rem',height:'29rem' }} className='ms-5 shadow rounded'>
                <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
                <Card.Body>
                  <Card.Title>{product?.title}</Card.Title>
                  <Card.Text>
                   <p>{product?.description.slice(0,55)}...</p>
                   <h5>${product?.price}</h5>
                  </Card.Text>
                  <div className='d-flex justify-content-between'>
                    <Button className='btn btn-light' onClick={()=>dispatch(addToWishlist(product))}><i class="fa-solid fa-heart text-danger"></i></Button>
                    <Button className='btn btn-light'  onClick={()=>dispatch(addToCart(product))}><i class="fa-solid fa-cart-plus text-success"></i></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

          )) : <p className='text-danger fw-bolder fs-4'>Nothing to Display</p>
        }

      </Row>
    </>
  )
}

export default Home