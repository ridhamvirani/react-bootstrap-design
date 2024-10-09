import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsDashLg } from "react-icons/bs";
import { MdArrowRightAlt } from "react-icons/md";

function Shop(props) {
  return (
    <>
      <div className='py-5'>
        <Container className='d-xl-flex align-items-center py-2 '>
          <p className='text-black fs-2 heebo m-0'>Shop</p>
          <div className=''>
            <span className='text-black mx-2'><BsDashLg /></span>
            <Link to='/home' className='p-2 fw-medium text-black'>Home</Link>
            <a href="#" className='mx-1 fw-medium text-black'>/</a>
            <a href="#" className='p-2 fw-medium text-black'>Shop</a>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col xl={9} xs={12}  >
              <Row className='gx-5'>
                {
                  props.shopdata.map((item) => {
                    return (
                      <Col lg={4} md={6} xs={11} className='shop-item'>
                        <div className='shop-img overflow-hidden '>
                          <a href="#"><img src={item.img} alt="" /></a>
                        </div>
                        <div>
                          <p className='fs-5 fw-medium text-center m-0'>{item.itemname}</p>
                          <p className='shop-price text-center t-gray position-relative mt-1'>${item.price}
                            <div className="add-cart">
                              <a href="#" className='t-gray bg-white'><span className='fs-4'><MdArrowRightAlt /></span>Add to cart</a>
                            </div>
                          </p>
                        </div>
                      </Col>
                    )
                  })
                }
                {/* <Col lg={4} md={6} xs={11} className='shop-item'>
                  <div className='shop-img overflow-hidden '>
                    <a href="#"><img src={require('../Img/asset 143.jpg')} alt="" /></a>
                  </div>
                  <div>
                    <p className='fs-5 fw-medium text-center m-0'>Lorena Chair</p>
                    <p className='shop-price text-center t-gray position-relative mt-1'>$220
                      <div className="add-cart">
                        <a href="#" className='t-gray bg-white'><span className='fs-4'><MdArrowRightAlt /></span>Add to cart</a>
                      </div>
                    </p>
                  </div>
                </Col>
                <Col lg={4} md={6} xs={11} className='shop-item'>
                  <div className='shop-img overflow-hidden '>
                    <a href="#"><img src={require('../Img/asset 144.jpg')} alt="" /></a>
                  </div>
                  <div>
                    <p className='fs-5 fw-medium text-center m-0'>Modern Lamp</p>
                    <p className='shop-price text-center t-gray position-relative mt-1'><del className='me-2'>$130</del>$95
                      <div className="add-cart">
                        <a href="#" className='t-gray bg-white'><span className='fs-4'><MdArrowRightAlt /></span>Add to cart</a>
                      </div>
                    </p>
                  </div>
                </Col>
                <Col lg={4} md={6} xs={11} className='shop-item'>
                  <div className='shop-img overflow-hidden'>
                    <a href="#"><img src={require('../Img/asset 145.jpg')} alt="" /></a>
                  </div>
                  <div>
                    <p className='fs-5 fw-medium text-center m-0'>Small Table</p>
                    <p className='shop-price text-center t-gray position-relative mt-1'>$108
                      <div className="add-cart">
                        <a href="#" className='t-gray bg-white'><span className='fs-4'><MdArrowRightAlt /></span>Add to cart</a>
                      </div>
                    </p>
                  </div>
                </Col> */}
              </Row>

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

export default Shop
