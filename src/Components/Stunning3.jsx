import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Stunning3() {
  return (
    <div className='spacer s-story'>
    <Container>
      <Row className='justify-content-center gy-5'>
        <Col xl={6} md={12} className=''>
          <p className='oswald fw-bold text-black'>INTERIOR</p>
          <p className='display-4  text-black'>Stunning Story</p>
          <p className='t-dark'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium natus error sit omnis iste natus error sit voluptatem accusantium sed ut.</p>
          <div className='mt-4'>
            <p className='d-flex text-black justify-content-between'><span>Interior Design</span><span>65%</span></p>
            <ProgressBar now={65} />
          </div>
          <div className='mt-4'>
            <p className='d-flex text-black justify-content-between'><span>Architecture</span><span>87%</span></p>
            <ProgressBar now={87} />
          </div>
          <div className='mt-4'>
            <p className='d-flex text-black justify-content-between'><span>Urban Planning</span><span>92%</span></p>
            <ProgressBar now={92} />
          </div>
        </Col>
        <Col xl={6} md={10} className=''>
          <Row className='justify-content-around gy-3'>
            <Col xl={5} md={5} xs={8}>
              <img src={require('../Img/asset 83.jpeg')} alt="" className=' w-100' />
            </Col>
            <Col xl={5} md={5} xs={8}>
              <img src={require('../Img/asset 84.jpeg')} alt="" className=' w-100' />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Stunning3
