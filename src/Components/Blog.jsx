import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { BsDashLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Blog() {
    return (
        <>
            <div className='py-5'>
                <Container className='d-xl-flex align-items-center py-2 '>
                    <p className='text-black fs-2 heebo m-0'>Blog</p>
                    <div className=''>
                        <span className='text-black mx-2'><BsDashLg /></span>
                        <Link to='/home' className='p-2 fw-medium text-black'>Home</Link>
                        <a href="#" className='mx-1 fw-medium text-black'>/</a>
                        <a href="#" className='p-2 fw-medium text-black'>Blog</a>
                    </div>
                </Container>
            </div>
            <div>
                <Container>
                    <Row className='gx-5'>
                        <Col xl={9} xs={12}  >
                            <div className='blog-post p-0'>
                                <div className="blog-img">
                                    <img src={require('../Img/asset 155.jpg')} alt="" className='h-100 w-100' />
                                </div>
                                <div>
                                    <p><span> Interior</span>/<span> By Ana Williams</span>/<span>22. Nov 2018</span></p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className="search-bar border-bottom border-black">
                                <input type="text" placeholder='Search' className='w-100 border-0 p-1 t-gray' />
                            </div>
                            <div className='mt-5'>
                                <p className='fs-5 fw-medium text-black'>What we do</p>
                                <a href='#' className='text-black  mb-1 d-inline-block fw-medium position-relative'>Certification<div className='u-line position-absolute'></div></a><br></br>
                                <a href='#' className='text-black mt-2 mb-1 d-inline-block fw-medium position-relative'>History<div className='u-line position-absolute'></div></a><br></br>
                                <a href='#' className='text-black mt-2 mb-1 d-inline-block fw-medium position-relative'>Interior<div className='u-line position-absolute'></div></a><br></br>
                                <a href='#' className='text-black mt-2 mb-1 d-inline-block fw-medium position-relative'>Urban Planning<div className='u-line position-absolute'></div></a><br></br>
                                <a href='#' className='text-black mt-2 mb-1 d-inline-block fw-medium position-relative'>Landscapes<div className='u-line position-absolute'></div></a>
                            </div>
                            <div className='my-5'>
                                <a href="#"><img src={require('../Img/asset 141.jpg')} alt="" /></a>
                            </div>
                            <div>
                                <p className='fs-5 fw-medium text-black'>Useful links</p>
                                <a href='#' className='text-black mb-1 d-inline-block fw-medium position-relative'>Privacy policy<div className='u-line position-absolute'></div></a><br></br>
                                <a href='#' className='text-black mt-2 mb-1 d-inline-block fw-medium position-relative'>History<div className='u-line position-absolute'></div></a><br></br>
                                <a href='#' className='text-black mt-2 mb-1 d-inline-block fw-medium position-relative'>Meet the crew<div className='u-line position-absolute'></div></a><br></br>
                                <a href='#' className='text-black mt-2 mb-1 d-inline-block fw-medium position-relative'>Partners<div className='u-line position-absolute'></div></a><br></br>
                                <a href='#' className='text-black mt-2 mb-1 d-inline-block fw-medium position-relative'>Contact us<div className='u-line position-absolute'></div></a>
                            </div>
                            <div className='mt-5'>
                                <p className='fs-5 fw-medium text-black'>Brochures</p>
                                <a href='#' className='text-black mb-1 d-inline-block fw-medium position-relative'>Main presentation<div className='u-line position-absolute'></div></a><br></br>
                                <a href='#' className='text-black mt-2 mb-1 d-inline-block fw-medium position-relative'>Furniture today<div className='u-line position-absolute'></div></a><br></br>
                                <a href='#' className='text-black mt-2 mb-1 d-inline-block fw-medium position-relative'>Interior design<div className='u-line position-absolute'></div></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Blog
