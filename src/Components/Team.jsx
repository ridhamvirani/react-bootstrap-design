import React from 'react'
import { Col, Row } from 'react-bootstrap';

function Team(props) {
    return (
        <div className="team">
            <Row className='d-flex justify-content-center'>
                {
                    props.teamdata.slice(0,4).map((team) => {
                        return (
                            <Col md={3} sm={8} xs={8} className='p-0 '>
                                <div className='team-img position-relative'>
                                    <img src={team.memberimg} alt="" className='w-100 ' />
                                    <div className="team-detail position-absolute">
                                        <p className='oswald fw-bold text-white mb-1'>{team.authority}</p>
                                        <p className='m-0 text-white fs-5 mb-1 team-name'>{team.name}</p>
                                        {
                                            team.social.map((socialdata)=>{
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
    )
}

export default Team
