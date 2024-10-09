import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Ourteam(props) {
    return (
        <>
            <div className='team-banner'>
                <p className='display-4 text-center overpass  text-black'>Our Team</p>
                <div className='text-center'>
                    <Link to='/home' className='p-2 text-black'>Home</Link>
                    <a href="#" className='mx-2 text-black'>/</a>
                    <a href="#" className='p-2 text-black'>Our Team</a>
                </div>
            </div>
            <div className="team">
                <Row className='d-flex justify-content-center'>
                    {
                        props.teams.map((item) => {
                            return (
                                <Col md={3} sm={8} xs={8} className='p-0 '>
                                    <div className='team-img position-relative'>
                                    <img src={item.memberimg} alt="" className='w-100 ' />
                                    <div className="team-detail position-absolute">
                                        <p className='oswald fw-bold text-white mb-1'>{item.authority}</p>
                                        <p className='m-0 text-white fs-5 mb-1 team-name'>{item.name}</p>
                                        {
                                            item.social.map((socialdata)=>{
                                                return(
                                                    <a href="#" className='text-white border-bottom position-relative me-2 white-hover'>{socialdata}</a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                </Col>
                            )
                        })
                    }
                   
                </Row>

            </div>
        </>
    )
}

export default Ourteam
