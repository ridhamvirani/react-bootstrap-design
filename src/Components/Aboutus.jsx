import React from 'react'
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import Slider from './Slider'
function Aboutus(props) {
  return (
    <>
      <div className='page-banner about'>
        <p className='display-4 text-center overpass text-black'>About Us</p>
        <div className='text-center'>
          <Link to='/home' className='p-2 text-black'>Home</Link>
          <a href="#" className='mx-2 text-black'>/</a>
          <a href="#" className='p-2 text-black'>About us</a>
        </div>
      </div>

      <div className='spacer'>
        <Container>
          <Row className=' tect-company gx-5 gy-4'>
            <Col lg={5} md={12} xs={11} className='mx-md-0 mx-auto'>
              <div className='tect-img'>
                <a href="#"><img src={require('../Img/asset 121.jpeg')} alt="" className='w-100 h-100' /></a>
              </div>
            </Col>
            <Col xl={4} lg={5} md={8} xs={11} className='company-detail ms-xl-5 mx-md-0 mx-auto'>
              <p className='company-main'>Finnhütte is archi-tect company</p>
              <p className='company-sub t-lightgray'>Sed ut perspiciatis unde omnis iste natus error siter voluptatem accusantium natus error sit omnis iste</p>
              <p className='company-intro t-lightgray'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium natus error sit omnis iste natus error sit voluptatem accusantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium natus error sit omnis iste natus error sit voluptatem accusantium.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='overflow-hidden'>
        <Row className='outer-types gy-md-5 gy-3'>
          {
            props.aboutdata.map((item) => {
              return (
                <Col lg={4} md={10} className='p-0 mx-auto '>
                  <div className='design-img position-relative'>
                    <img src={item.image} alt="" className='w-100' />
                    <div className="outer-design-detail b-black p-4 ">
                      <p className='fs-5 text-white fw-medium mb-2'>{item.projectname}t</p>
                      <p className='text-white'>{item.projectdetail}</p>
                      <a href="#" className='text-white border-bottom border-white border-2 pt-2 pb-1 position-relative white-hover'>{item.readbtn}</a>
                    </div>
                  </div>
                </Col>

              )
            })
          }
        </Row>
      </div>
      <div className="design-ratio spacer">
        <Container>
          {
            props.aboutracio.map((item) => {
              return (
                <Row className='my-3 align-items-center'>
                  <Col lg={2} xs={3}>
                    <div className="ratio">
                      <p className='fs-4  fw-medium text-black align-content-center text-center'>{item.percentage}<span >%</span></p>
                    </div>
                  </Col>
                  <Col xl={8} lg={10} xs={9}>
                    <p className='mb-2 fs-5 fw-medium'>{item.dept}</p>
                    <p className='mb-2'>{item.desc}</p>
                    <ProgressBar now={item.percentage} />
                  </Col>
                </Row>
              )
            })
          }
          {/* <Row className='my-3 align-items-center'>
            <Col lg={2}  xs={3}>
              <div className="ratio">
                <p className='fs-4  fw-medium text-black align-content-center text-center'>52<span >%</span></p>
              </div>
            </Col>
            <Col xl={8} lg={10} xs={9}>
              <p className='mb-2 fs-5 fw-medium'>Interior Design</p>
              <p className='mb-2'>Sed ut perspiciatis underet omnis iste natus error sit</p>
              <ProgressBar now={52} />
            </Col>
          </Row>
          <Row className='my-3 align-items-center'>
            <Col lg={2} xs={3}>
              <div className="ratio">
                <p className='fs-4  fw-medium text-black align-content-center text-center'>64<span >%</span></p>
              </div>
            </Col>
            <Col xl={8} lg={10} xs={9}>
              <p className='mb-2 fs-5 fw-medium'>Visualization</p>
              <p className='mb-2'>Sed ut perspiciatis underet omnis iste natus error sit</p>
              <ProgressBar now={64} />
            </Col>
          </Row>
          <Row className='my-3 align-items-center'>
            <Col lg={2} xs={3}>
              <div className="ratio">
                <p className='fs-4  fw-medium text-black align-content-center text-center'>78<span >%</span></p>
              </div>
            </Col>
            <Col xl={8} lg={10} xs={9}>
              <p className='mb-2 fs-5 fw-medium'>Urban planning</p>
              <p className='mb-2'>Sed ut perspiciatis underet omnis iste natus error sit</p>
              <ProgressBar now={78} className='ratio-progress' />
            </Col>
          </Row>
          <Row className='my-3 align-items-center'>
            <Col lg={2} xs={3}>
              <div className="ratio">
                <p className='fs-4  fw-medium text-black align-content-center text-center'>62<span >%</span></p>
              </div>
            </Col>
            <Col xl={8} lg={10} xs={9}>
              <p className='mb-2 fs-5 fw-medium'>Projects</p>
              <p className='mb-2'>Sed ut perspiciatis underet omnis iste natus error sit</p>
              <ProgressBar now={62} />
            </Col>
          </Row> */}
        </Container>
      </div>
    </>
  )
}

export default Aboutus
