import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbars(props) {
  return (
    <>
      {/* navbar start */}
      <div >
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary menu-header py-lg-5 py-md-3 py-1 ">
          <Container>
            <Navbar.Brand className='logo d-flex'><p>DIE </p> <h3 className='fw-light'> /FINNHÜTT</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='menu-btn' />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="main-menu ms-auto position-relative">

                {
                  props.menu.map((item) => {
                    return (
                      <Link to={item.route} className='fw-medium mx-2 px-2  py-2'>{item.menu}
                        {
                          (item.submenu != "") ?

                            <div className='sub-menu py-3 position-absolute'>
                              <ul className='b-black list-unstyled'>
                                {
                                  item.submenu.map((item) => {
                                    return (
                                      <li><Link to={item.subroute} className='text-secondary d-inline-block fw-medium position-relative gray-hover'>{item.sub}</Link></li>
                                    )
                                  })
                                }
                              </ul>
                            </div> : null
                        }
                      </Link>
                    )
                  })
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* navbar end */}

    </>
  );
}
export default Navbars;