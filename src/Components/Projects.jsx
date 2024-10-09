import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Projects() {
    return (
        <>
            <div className="projects-banner">
                <p className='text-center fw-normal'>Architecture Projects</p>
                <p className='text-center'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-
                    tium natus error sit omnis iste natus</p>
                <div className="projects-banner-btn bg-white mt-3">
                <a href="#" className=' text-black fw-medium border-2  border-bottom border-black position-relative m-0 p-0 black-hover'>read more</a>
                </div>
            </div>
            <div>
                <Row className='gx-0'>
                    <Col lg={6}>
                        <img src={require('../Img/asset 134.jpg')} alt="" className='img-fluid'/>
                    </Col>
                    <Col lg={6}  className='b-black project-details'>
                        <p className='text-white fw-normal  heebo'>Deo Architect</p>
                        <p className='t-lightgray'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu-santium natus error sit omnis iste natus error sit voluptatem accu-santium varius laoreet.</p>
                        <a href="#" className=' text-white fw-medium border-2  border-bottom border-white position-relative m-0 p-0 white-hover'>view project</a>
                    </Col>
                </Row>
                <Row className='gx-0'>
                    <Col lg={6}  className='b-black project-details text-end'>
                        <p className='text-white fw-normal  heebo'>IU Lorenna</p>
                        <p className='t-lightgray'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu-santium natus error sit omnis iste natus error sit voluptatem accu-santium varius laoreet.</p>
                        <a href="#" className=' text-white fw-medium border-2  border-bottom border-white position-relative m-0 p-0 white-hover'>view project</a>
                    </Col>
                    <Col lg={6}>
                        <img src={require('../Img/asset 135.jpg')} alt="" className='img-fluid'/>
                    </Col>
                </Row>
                <Row className='gx-0'>
                    <Col lg={6}>
                        <img src={require('../Img/asset 136.jpg')} alt="" className='img-fluid'/>
                    </Col>
                    <Col lg={6}  className='b-black project-details'>
                        <p className='text-white fw-normal  heebo'>Blocks MIO</p>
                        <p className='t-lightgray'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu-santium natus error sit omnis iste natus error sit voluptatem accu-santium varius laoreet.</p>
                        <a href="#" className=' text-white fw-medium border-2  border-bottom border-white position-relative m-0 p-0 white-hover'>view project</a>
                    </Col>
                </Row>
                <Row className='gx-0'>
                    <Col lg={6}  className='b-black project-details text-end'>
                        <p className='text-white fw-normal  heebo'>The Circle</p>
                        <p className='t-lightgray'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu-santium natus error sit omnis iste natus error sit voluptatem accu-santium varius laoreet.</p>
                        <a href="#" className=' text-white fw-medium border-2  border-bottom border-white position-relative m-0 p-0 white-hover'>view project</a>
                    </Col>
                    <Col lg={6}>
                        <img src={require('../Img/asset 137.jpg')} alt="" className='img-fluid'/>
                    </Col>
                </Row>
                <Row className='gx-0'>
                    <Col lg={6}>
                        <img src={require('../Img/asset 138.jpg')} alt="" className='img-fluid'/>
                    </Col>
                    <Col lg={6}  className='b-black project-details'>
                        <p className='text-white fw-normal  heebo'>Black & Gray</p>
                        <p className='t-lightgray'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu-santium natus error sit omnis iste natus error sit voluptatem accu-santium varius laoreet.</p>
                        <a href="#" className=' text-white fw-medium border-2  border-bottom border-white position-relative m-0 p-0 white-hover'>view project</a>
                    </Col>
                </Row>
                <Row className='gx-0'>
                    <Col lg={6}  className='b-black project-details text-end'>
                        <p className='text-white fw-normal  heebo'>Arch Brut</p>
                        <p className='t-lightgray'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu-santium natus error sit omnis iste natus error sit voluptatem accu-santium varius laoreet.</p>
                        <a href="#" className=' text-white fw-medium border-2  border-bottom border-white position-relative m-0 p-0 white-hover'>view project</a>
                    </Col>
                    <Col lg={6}>
                        <img src={require('../Img/asset 139.jpg')} alt="" className='img-fluid'/>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Projects
