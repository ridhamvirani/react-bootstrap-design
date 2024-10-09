import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Contactus() {
    return (
        <>
            <div className='page-banner contact'>
                <p className='display-4 text-center overpass text-white'>Contact Us</p>
                <div className='text-center'>
                    <Link to='/home' className='p-2 text-white'>Home</Link>
                    <a href="#" className='mx-2 text-white'>/</a>
                    <a href="#" className='p-2 text-white'>FAQ</a>
                </div>
            </div>
            <Container className='spacer'>
                <Row className=' justify-content-xl-between justify-content-center gy-4'>
                    <Col xl={4} xs={10} className=''>
                        <div className='important'>
                            <p className='fs-3 fw-normal text-black'>Important Info</p>
                            <p className='t-dark'>Sed ut perspiciatis unde omnis iste natus error sit vo-luptatem accusantium natus error sit omnis iste natus</p>
                            <p className='t-gray'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium natus error sit omnis iste natus error sit voluptatem accusantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium natus error sit omnis iste natus error sit voluptatem accusantium.</p>
                        </div>
                        <div className="d-flex mt-5">
                            <p className='w-25 oswald fs-5 fw-medium'>phone</p>
                            <p ><a href="#" className='text-secondary border-bottom border-secondary border-2 position-relative black-hover'>+1 (800) 990 8877</a></p>
                        </div>
                        <div className="d-flex ">
                            <p className='w-25 oswald fs-5 fw-medium'>Email</p>
                            <p ><a href="#" className='text-secondary border-bottom border-secondary border-2 position-relative black-hover'>diefinnhutte@qodeinteractive.com</a></p>
                        </div>
                        <div className="d-flex ">
                            <p className='w-25 oswald fs-5 fw-medium'>Address</p>
                            <p ><a href="#" className='text-secondary border-bottom border-secondary border-2 position-relative black-hover'> 778 NE 84th St Miami, FL</a></p>
                        </div>
                    </Col>
                    <Col xl={7} xs={10}>
                        <div>
                            <p className='fs-3 heebo text-black'>Write A Comment</p>
                            <textarea name="" id="" placeholder='Comment*' rows={4} className='w-100 border-0 border-bottom border-black'></textarea>
                            <input type="text" placeholder='Name*' className='w-100 border-0 border-bottom border-black t-gray mt-4 py-2' />
                            <input type="text" placeholder='E-mail*' className='w-100 border-0 border-bottom border-black t-gray mt-4 py-2' />
                            <a href="#" className='text-black fw-medium d-inline-block border-bottom border-black border-2 mt-4 ms-5 py-1 position-relative black-hover'>submit now</a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25121.173780110457!2d-0.19533191607703604!3d51.52691953421106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876100984687661%3A0x23dd74295948267f!2sPaddington%20Recreation%20Ground!5e0!3m2!1sen!2sin!4v1715408262541!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default Contactus;
