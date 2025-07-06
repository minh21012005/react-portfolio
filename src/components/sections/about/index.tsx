import { Col, Row } from "react-bootstrap";
import AnimationLottie from "components/share/animation-lottie";
import codingJSON from 'assets/lottie/coding.json';
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";
import GlowCard from "components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "components/sections/divider";
import { APP_DATA } from "helpers/data";
import SocialMedia from "components/sections/social.media";

const About = () => {
    return (
        <>
            {/* SECTION: Giới thiệu bản thân */}
            <Row>
                <Col md={6} xs={12}>
                    <h3 className="text-center mb-md-5 mb-2">Know Who <span className="brand-red">I'M</span></h3>
                    <div>
                        <p>Hi, I am <b>Nguyễn Bá Minh</b> from Hà Nội, Việt Nam.</p>
                        <p>I am currently an <b>Information Technology student</b> at <b>FPT University</b>.</p>
                        <p>I focus on <b>full-stack web development</b> with strong interest in backend using <b>Java Spring Boot</b> and frontend with <b>React</b>.</p>
                    </div>

                    <div>
                        <p>Besides programming, I also enjoy:</p>
                        <ul>
                            <li>Exploring new technologies</li>
                            <li>Building side projects</li>
                            <li>Listening to music and learning new skills</li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-center brand-red">"Strive to become 1% better every day."</p>
                    </div>
                </Col>

                <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
                    <AnimationLottie
                        width="80%"
                        animationPath={codingJSON}
                    />
                </Col>
            </Row>

            {/* SECTION: Education */}
            <Row>
                <Col md={6} xs={12} className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3">
                    <AnimationLottie
                        width="50%"
                        animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
                    />
                </Col>

                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <div className="d-flex flex-column align-items-center gap-3">
                        <h4 className="text-center brand-red">Education</h4>
                        <GlowCard identifier={`experience-education`}>
                            <div className="p-3 relative">
                                <div className="experience-container">
                                    <div className="duration-text">
                                        <p>2023 - Present</p>
                                    </div>
                                    <div className="details">
                                        <div className="icon">
                                            <FaGraduationCap size={36} />
                                        </div>
                                        <div className="info">
                                            <p className="title">Information Technology</p>
                                            <p className="company">FPT University</p>
                                            <p className="mt-2">GPA: 8.3 / 10.0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </GlowCard>
                    </div>
                </Col>
            </Row>

            {/* SECTION: Social + Contact */}
            <Divider />
            <Row>
                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <h3 className="mb-md-5 mb-2">FIND ME ON</h3>
                    <SocialMedia
                        github={APP_DATA.GITHUB_URL}
                        facebook={APP_DATA.FACEBOOK_URL}
                        email={APP_DATA.GMAIL_URL}
                    />
                </Col>

                <Col md={6} xs={12} className="d-flex flex-column align-items-center justify-content-center">
                    <AnimationLottie
                        width="50%"
                        animationPath={JSON.parse(CONTACT_LOTTIE)}
                    />
                    <h4 className="text-center">Contact me</h4>
                </Col>
            </Row>

            <div className="mb-5"></div>
        </>
    );
};

export default About;
