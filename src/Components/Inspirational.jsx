import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function Inspirational(props) {
    return (
        <div className='spacer inspiration2'>
            <Container>
                <p className='inspi-title oswald text-center text-black'>INTERIOR DESIGN</p>
                <h1 className='t-dark text-center display-4 heebo'>Inspiration Everyday</h1>
                <Row className='gx-5 mt-5 justify-content-center'>
                    {
                        props.inspiration.map((item) => {
                            return (
                                <Col xl={3} lg={5} md={6} sm={7} xs={10} className='i'>
                                    <div className='text-center'>
                                        <img src={item.img} alt="" />
                                        <p><a href='#' className='fs-5 text-black fw-medium position-relative'>{item.name}<div className='u-line position-absolute'></div></a></p>
                                        <p className='t-dark'>{item.desc}</p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>

            </Container>
        </div>
    )
}

export default Inspirational
