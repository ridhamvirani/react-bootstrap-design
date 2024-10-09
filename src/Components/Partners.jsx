import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Partners(props) {
    return (
        <>
            <div className='page-banner partners'>
                <p className='display-4 text-center heebo text-white'>Our Partners</p>
                <div className='text-center'>
                    <Link to='/home' className='p-2 text-white'>Home</Link>
                    <a href="#" className='mx-2 text-white'>/</a>
                    <a href="#" className='p-2 text-white'>Our Partners</a>
                </div>
            </div>
            <Container>
                <Row className='justify-content-between partner-icon'>
                    {
                        props.partner.map((item)=>{
                            return(
                                <Col xl={3} className='text-center'>
                                    <img src={item} alt="" className=''/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default Partners
