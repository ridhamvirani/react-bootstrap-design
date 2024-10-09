import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function Designpost() {
    return (
        <div className="spacer design-change">
            <Container>
                <p className='text-center display-4 heebo  design-main'>DESIGN CAN CHANGE</p>
                <p className='design-sub overpass text-center'>visit us and see our latest projects</p>
                <Row className='justify-content-lg-between justify-content-center mt-5'>
                    <Col lg={5} md={9} xs={11} className='align-content-center '>
                        <p className='text-black fs-2  design-name heebo mb-0'>Rue Royale 7, Paris </p>
                        <p className='overpass sub-gray about-projects'>about project</p>
                        <p className='fw-light m-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste assumenda in maiores facilis rem magni et, ipsa aperiam hic cum deleniti accusamus expedita maxime sed recusandae voluptatum nostrum repellat provident quaerat quibusdam temporibus velit eius minus pariatur! Ipsa quis magni quo omnis, tenetur deserunt sint quidem neque repellendus sed harum!</p>
                    </Col>
                    <Col lg={6} xs={10} >
                        <div>
                            <img src={require('../Img/port-1-img-1.jpg')} alt="" className='h-100 w-100' />
                        </div>
                    </Col>
                </Row>
                <Row className='justify-content-lg-between justify-content-center mt-5 '>
                    <Col lg={5} xs={10} className='design-post position-relative order-lg-1 order-2'>
                        <div className='post-img'>
                            <img src={require('../Img/port-1-img-2.jpg')} alt="" className='h-100 w-100' />
                        </div>
                        <div className='bg-inner'></div>
                    </Col>
                    <Col lg={6} md={9} xs={11} className='align-content-center order-lg-2 order-1'>
                        <p className='text-black fs-2 design-name heebo mb-0'>Avenue Maison 11, Paris  </p>
                        <p className='overpass sub-gray about-projects'>about project</p>
                        <p className='fw-light mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste assumenda in maiores facilis rem magni et, ipsa aperiam hic cum deleniti accusamus expedita maxime sed recusandae voluptatum nostrum repellat provident quaerat quibusdam temporibus velit eius minus pariatur! Ipsa quis magni quo omnis, tenetur deserunt sint quidem neque repellendus sed harum!</p>
                    </Col>
                </Row>
                <Row className='justify-content-lg-between justify-content-center mt-5'>
                    <Col lg={5} md={9} xs={11} className='align-content-center'>
                        <p className='text-black fs-2 design-name heebo mb-0'>Rue Girrard 48, Paris </p>
                        <p className='overpass sub-gray about-projects'>about project</p>
                        <p className='fw-light m-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste assumenda in maiores facilis rem magni et, ipsa aperiam hic cum deleniti accusamus expedita maxime sed recusandae voluptatum nostrum repellat provident quaerat quibusdam temporibus velit eius minus pariatur! Ipsa quis magni quo omnis, tenetur deserunt sint quidem neque repellendus sed harum!</p>
                    </Col>
                    <Col lg={6} xs={10}>
                        <div>
                            <img src={require('../Img/port-1-img-3.jpg')} alt="" className='h-100 w-100' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Designpost
