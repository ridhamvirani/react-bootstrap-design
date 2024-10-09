import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Stunning2(props) {
  return (
    <div className="spacer inspiration">
      <Container>
        <p className='inspi-title oswald text-center text-black'>INTERIOR DESIGN</p>
        <h1 className='t-dark text-center display-4 heebo'>Inspiration Everyday</h1>
        <Row className='gx-xl-5 gx-lg-4 gx-md-5 gy-md-5 gy-4 justify-content-center mt-lg-3 mt-0'>
          {
            props.data.map((item) => {
              return (
                <Col lg={3} md={5} sm={5} xs={9}>
                  <div>
                    <img src={item.img} alt="" className='h-100 w-100' />
                  </div>
                  <div className='inspi-detail mt-4'>
                    <p className='text-black'>{item.title}</p>
                    <p className='t-gray'>{item.desc}</p>
                    <a href="#" className='text-black fw-medium border-3 border-bottom black-hover border-bottom border-black position-relative'>{item.readbtn}</a>
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

export default Stunning2
