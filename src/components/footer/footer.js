import React from 'react';
import { Col, Row } from "antd";
import './footer.css';

function Footer() {
    return (
        <section className="main-footer">
            <div className="footer-top">
                <div className="container">
                    <Row gutter={16}>
                        <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                            <h3>KNILA IT Solutions</h3>
                            <p>Mohan Business Park, 3rd floor,<br />opp. SNS Academy, Vellakinar<br />Village, Coimbatore.
                  <br /><br />
                                <strong>Phone:</strong>1800 419 3466
                  <br />
                                <strong>Email:</strong>
                  info@knila.com
                  </p>
                        </Col>

                        <Col xl={5} lg={5} md={5} sm={5} xs={5}>
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Services</a></li>
                                <li><a href="/">Terms of service</a></li>
                                <li><a href="/">Privacy policy</a></li>
                            </ul>
                        </Col>

                        <Col xl={5} lg={5} md={5} sm={5} xs={5}>
                            <h4>Our Services</h4>
                            <ul>
                                <li><a href="/">Web Design</a></li>
                                <li><a href="/">Web Development</a></li>
                                <li><a href="/">Product Management</a></li>
                                <li><a href="/">Marketing</a></li>
                                <li><a href="/">Graphic Design</a></li>
                            </ul>
                        </Col>

                        <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                            <h4>Our Strategy</h4>
                            <p>We combine tech attainment and business insight to the challenges and deliver results with excellence.</p>
                        </Col>
                    </Row>


                </div>
            </div>

            <div className="footer-bottom">
                <div className="bottomcontainer">
                    <Row>
                        <Col xl={18} lg={18} md={18} sm={18} xs={18}>
                            <p>
                                © Copyright <strong>Knila IT Solutions</strong>.All Rights Reserved</p>
                            <p>Designed by <span className="footerspan">Manoj</span></p>
                        </Col>
                    </Row>
                </div>
            </div>

        </section>
    )
}

export default Footer;