import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CgFacebook } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
function Footer() {
    return (

        <>
            <footer className="pt-5">
                <Container>
                    <a href="#" className='footer-logo d-flex'><p>DIE </p> <h3 className='fw-normal'> /FINNHÜTT</h3></a>
                    <Row className="py-5 footer-row position-relative justify-content-center gy-5">
                        <Col xl={3} md={6} xs={11} className="d-flex justify-content-xl-center">
                            <ul className="list-unstyled">
                                <li><a href="#" className="bellefair text-black fs-3 footer-title">Info</a></li>
                                <li><a href="#" className="d-inline-block t-dark mt-2 position-relative">About Us<div className='u-line position-absolute'></div></a></li>
                                <li><a href="#" className="d-inline-block t-dark mt-2 position-relative">Contact<div className='u-line position-absolute'></div></a></li>
                                <li><a href="#" className="d-inline-block t-dark mt-2 position-relative">Carees<div className='u-line position-absolute'></div></a></li>
                            </ul>
                        </Col>
                        <Col xl={3} md={6} xs={11} className="d-flex justify-content-xl-center">
                            <ul className="list-unstyled">
                                <li><a href="#" className="bellefair text-black fs-3 footer-title">Collections</a></li>
                                <li><a href="#" className="d-inline-block t-dark mt-2 position-relative">Decorative lights<div className='u-line position-absolute'></div></a></li>
                                <li><a href="#" className="d-inline-block t-dark mt-2 position-relative">Lifestyle<div className='u-line position-absolute'></div></a></li>
                                <li><a href="#" className="d-inline-block t-dark mt-2 position-relative">Art<div className='u-line position-absolute'></div></a></li>
                            </ul>
                        </Col>
                        <Col xl={3} md={6} xs={11} className="d-flex justify-content-xl-center">
                            <ul className="list-unstyled">
                                <li><a href="#" className="bellefair text-black fs-3 footer-title">Projects</a></li>
                                <li><a href="#" className="d-inline-block t-dark mt-2 position-relative">Urban Landscapes<div className='u-line position-absolute'></div></a></li>
                                <li><a href="#" className="d-inline-block t-dark mt-2 position-relative">Architecture<div className='u-line position-absolute'></div></a></li>
                                <li><a href="#" className="d-inline-block t-dark mt-2 position-relative">BooLedo Mitam<div className='u-line position-absolute'></div></a></li>
                            </ul>
                        </Col>

                        <Col xl={3} md={6} xs={11} className="d-flex justify-content-xl-center">
                            <ul className="list-unstyled">
                                <li><a href="#" className="bellefair text-black fs-3 footer-title">Follow us</a></li>
                                <div className="d-flex justify-content-around">
                                    <a href="#" className="t-dark fs-5 fw-light"><CgFacebook /></a>
                                    <a href="#" className="t-dark fs-5 fw-light"><FaTwitter /></a>
                                    <a href="#" className="t-dark fs-5 fw-light"><FaPinterestP /></a>
                                </div>
                            </ul>
                        </Col>
                    </Row>
                    <div className="py-4 copy-right">
                        <p className="m-0 t-gray">© 2018 Qode Interactive, All Rights Reserved</p>
                    </div>
                </Container>
            </footer>
        </>
    );
}
export default Footer;