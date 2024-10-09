import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Stunning(){
    return(
        <>
            {/* section start */}

      <div className='spacer story'>
        <Container>
          <Row className='d-flex justify-content-xl-between justify-content-center'>
            <Col xl={8} lg={12} xs={10}>
              <div className='text-black '>
                <h1 className='display-4  heebo'>Stunning Story, Planning, Design, Interior, Urbanization</h1>
              </div>
              <div className='mt-5'>
                <Row>
                  <Col xl={8}>
                    <p className='t-gray fs-5'>Sed ut perspiciatis unde omnis iste natuser ror sit voluptat em accusantium natus error sitm omnis iste natus error sit volupta tem accusantium. Accusantium natus error siton.</p>
                  </Col>
                  <Col xl={4} className='d-flex '>
                    <ul className='list-unstyled ms-5'>
                      <li><a href="#" className='oswald text-black d-block mb-2 fw-bold'>CLIENTS</a></li>
                      <li className='my-2'><a href="#" className='t-dark border-bottom border-black border-2 py-1 position-relative black-hover'>DieFinnhutte</a></li>
                      <li className='my-2'><a href="#" className='t-dark border-bottom border-black border-2 py-1 position-relative black-hover'>Qode</a></li>
                    </ul>
                    <ul className='list-unstyled  ms-5 clients'>
                      <li><a href="#" className='d-block oswald mb-2 text-black fw-bold'>CLIENTS</a></li>
                      <li className='my-2'><a href="#" className='t-dark border-bottom border-black border-2 py-1 position-relative black-hover'>Qode</a></li>
                      <li className='my-2'><a href="#" className='t-dark border-bottom border-black border-2 py-1 position-relative black-hover'>DieFinnhutte</a></li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xl={3}  lg={5} md={6} xs={10}  >
              <img src={require('../Img/asset 65.png')} alt="" className="h-100 w-100" />
            </Col>
          </Row>
        </Container>

      </div>

      {/* section end */}
        </>
    );
}
export default Stunning;