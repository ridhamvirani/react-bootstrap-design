import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

function Workprocess() {
    return (
        <div className="spacer work-process">
            <Container>
                <Row className='gx-5 d-xl-flex d-none'>
                    <Col lg={3} md={2} className='steps  position-relative'>
                        <div className='text-center'>
                            <img src={require('../Img/asset 85.png')} alt="" />
                            <div className="step-no position-absolute bg-white text-black  fw-bold  ">1</div>
                        </div>
                        <div className='text-center mt-4'>
                            <p className='fs-5 fw-medium'>Our Mission</p>
                            <p>Sed ut perspiciatis unde ois iste natus error sit volupta</p>
                        </div>
                        <LiaLongArrowAltRightSolid className='arrow' />
                    </Col>
                    <Col lg={3} md={2} className='steps  position-relative'>
                        <div className='text-center'>
                            <img src={require('../Img/asset 86.png')} alt="" />
                            <div className="step-no position-absolute bg-white text-black fw-bold  ">2</div>
                        </div>
                        <div className='text-center mt-4'>
                            <p className='fs-5 fw-medium'>Analysing</p>
                            <p>Sed ut perspiciatis unde ois iste natus error sit volupta</p>
                        </div>
                        <LiaLongArrowAltRightSolid className='arrow' />
                    </Col>
                    <Col lg={3} md={2} className='steps  position-relative'>
                        <div className='text-center'>
                            <img src={require('../Img/asset 87.png')} alt="" />
                            <div className="step-no position-absolute bg-white text-black fw-bold  ">3</div>
                        </div>
                        <div className='text-center mt-4'>
                            <p className='fs-5 fw-medium'>Working</p>
                            <p>Sed ut perspiciatis unde ois iste natus error sit volupta</p>
                        </div>
                        <LiaLongArrowAltRightSolid className='arrow' />
                    </Col>
                    <Col lg={3} md={2} className='steps  position-relative'>
                        <div className='text-center'>
                            <img src={require('../Img/asset 88.png')} alt="" />
                            <div className="step-no position-absolute bg-white text-black fw-bold  ">4</div>
                        </div>
                        <div className='text-center mt-4'>
                            <p className='fs-5 fw-medium'>Solution</p>
                            <p>Sed ut perspiciatis unde ois iste natus error sit volupta</p>
                        </div>
                    </Col>
                </Row>

                <div className='steps d-xl-none d-block'>
                    <Row className='step d-flex justify-content-center '>
                        <Col lg={1} md={2} sm={2} xs={3}>
                            <div className='no-div bg-white rounded rounded-circle text-black fw-bold  mx-auto'>1</div>
                        </Col>
                        <Col lg={4} md={5} sm={6} xs={8}>
                            <p className='fs-5 fw-medium'>Our Mission</p>
                            <p>Sed ut perspiciatis unde ois iste natus error sit volupta</p>
                        </Col>
                    </Row>
                    <Row className='step d-flex justify-content-center mt-5'>
                        <Col lg={1} md={2} sm={2} xs={3} className=''>
                            <div className='no-div bg-white rounded rounded-circle text-black fw-bold mx-auto'>2</div>
                        </Col>
                        <Col lg={4} md={5} sm={6} xs={8}>
                            <p className='fs-5 fw-medium'>Analysing</p>
                            <p>Sed ut perspiciatis unde ois iste natus error sit volupta</p>
                        </Col>
                    </Row>
                    <Row className='step d-flex justify-content-center mt-5'>
                        <Col lg={1} md={2} sm={2} xs={3} className=''>
                            <div className='no-div bg-white rounded rounded-circle text-black fw-bold mx-auto'>3</div>
                        </Col>
                        <Col lg={4} md={5} sm={6} xs={8}>
                            <p className='fs-5 fw-medium'>Working</p>
                            <p>Sed ut perspiciatis unde ois iste natus error sit volupta</p>
                        </Col>
                    </Row>
                    <Row className='step d-flex justify-content-center mt-5'>
                        <Col lg={1} md={2} sm={2} xs={3} className=''>
                            <div className='no-div bg-white rounded rounded-circle text-black fw-bold mx-auto'>4</div>
                        </Col>
                        <Col lg={4} md={5} sm={6} xs={8}>
                            <p className='fs-5 fw-medium'>Solution</p>
                            <p>Sed ut perspiciatis unde ois iste natus error sit volupta</p>
                        </Col>
                    </Row>
                </div>

            </Container>
        </div>
    )
}

export default Workprocess
