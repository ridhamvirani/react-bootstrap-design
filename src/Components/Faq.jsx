import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import { GoDash } from 'react-icons/go'
import { Link } from 'react-router-dom'

function Faq() {
    return (
        <>
            <div className='page-banner faq'>
                <p className='display-4 text-center overpass text-white'>FAQ Page</p>
                <div className='text-center'>
                    <Link to='/home' className='p-2 text-white'>Home</Link>
                    <a href="#" className='mx-2 text-white'>/</a>
                    <a href="#" className='p-2 text-white'>FAQ</a>
                </div>
            </div>
            <Container className='spacer'>
                <Row className='justify-content-center'>
                    <Col md={9} xs={10}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header ><GoDash />What is your company philosophy?</Accordion.Header>
                                <Accordion.Body className='t-lightgray'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium natus error sit emerit omnis iste natus error sit voluptatem accusantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium natus error sit omnis iste natus error sit voluptatem accusantium.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><GoDash />What did you do to make it a success?</Accordion.Header>
                                <Accordion.Body className='t-lightgray'>
                                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><GoDash />How do you ensure that a project starts off properly?</Accordion.Header>
                                <Accordion.Body className='t-lightgray'>
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla aliqua consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo labore et dolore magna aliqua quis nostrud exercitation ullamco laboris nisi.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><GoDash />How do you balance function with aesthetic appeal?</Accordion.Header>
                                <Accordion.Body className='t-lightgray'>
                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. sed do eiusmod reus.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header><GoDash />Mention of other top skills?</Accordion.Header>
                                <Accordion.Body className='t-lightgray'>
                                Venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header><GoDash />What did you do to make it a success?</Accordion.Header>
                                <Accordion.Body className='t-lightgray'>
                                Quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo sed do eiusmod reus tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header><GoDash />How do you ensure that a project starts off properly?</Accordion.Header>
                                <Accordion.Body className='t-lightgray'>
                                Metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui commodo ligula eget dolor.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header><GoDash />How do you balance function with aesthetic appeal?</Accordion.Header>
                                <Accordion.Body className='t-lightgray'>
                                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header><GoDash />Mention of other top skills?</Accordion.Header>
                                <Accordion.Body className='t-lightgray'>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium natus error sit emerit omnis iste natus error sit voluptatem accusantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium natus error sit omnis iste natus error sit voluptatem accusantium.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                                <Accordion.Header><GoDash />What did you do to make it a success?</Accordion.Header>
                                <Accordion.Body className='t-lightgray'>
                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. sed do eiusmod reus.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="10">
                                <Accordion.Header><GoDash />How do you ensure that a project starts off properly?</Accordion.Header>
                                <Accordion.Body className='t-lightgray'>
                                Quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo sed do eiusmod reus tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="11">
                                <Accordion.Header><GoDash />How do you balance function with aesthetic appeal?</Accordion.Header>
                                <Accordion.Body className='t-lightgray'>
                                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="12">
                                <Accordion.Header><GoDash />Mention of other top skills?</Accordion.Header>
                                <Accordion.Body className='t-lightgray'>
                                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col md={3} xs={10}>
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
        </>
    )
}

export default Faq
