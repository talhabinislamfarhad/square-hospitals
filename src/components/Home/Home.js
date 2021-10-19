import React from 'react';
import './Home.css';
// All Components
import Services from '../Services/Services';
import About from '../About/About';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faUserMd, faUser, faProcedures, faHospital, faStar } from '@fortawesome/free-solid-svg-icons';
//Images
import Banner from '../../images/home-img.svg';
import ReviewOne from '../../images/pic-1.png';
import ReviewTwo from '../../images/pic-2.png';
import ReviewThree from '../../images/pic-3.png';


const Home = () => {
    const ChevronRight = <FontAwesomeIcon icon={faChevronRight} />
    const UserMd = <FontAwesomeIcon icon={faUserMd} />
    const User = <FontAwesomeIcon icon={faUser} />
    const Procedures = <FontAwesomeIcon icon={faProcedures} />
    const Hospital = <FontAwesomeIcon icon={faHospital} />
    const Star = <FontAwesomeIcon icon={faStar} />

    return (
        <div>
            {/* home section starts */}
            <section className="home" id="home">
                <div className="image">
                    <img src={Banner} alt="" />
                </div>
                <div className="content">
                    <h3>Stay Safe, Stay Healthy</h3>
                    <p>Clinical excellence must be the priority for any health care service provider. SQUARE Hospital ensures the best healthcare service.</p>
                    <a href="#0" className="btn"> learn more {ChevronRight} </a>
                </div>
            </section>
            {/* home section ends  */}
            {/* icons section starts  */}

            <section className="icons-container">

                <div className="icons">
                    <i>{UserMd}</i>
                    <h3>140+</h3>
                    <p>doctors at work</p>
                </div>

                <div className="icons">
                    <i>{User}</i>
                    <h3>1040+</h3>
                    <p>satisfied patients</p>
                </div>

                <div className="icons">
                    <i>{Procedures}</i>
                    <h3>500+</h3>
                    <p>bed facility</p>
                </div>

                <div className="icons">
                    <i>{Hospital}</i>
                    <h3>80+</h3>
                    <p>available hospitals</p>
                </div>

            </section>

            {/* icons section ends  */}
            <About></About>
            <Services></Services>
            {/* review section starts  */}

            <section className="review" id="review">

                <h1 className="heading"> client's <span>review</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <img src={ReviewOne} alt="" />
                        <h3>Jorj Leo</h3>
                        <div className="stars">
                            <i>{Star}</i>
                            <i>{Star}</i>
                            <i>{Star}</i>
                            <i>{Star}</i>
                            <i>{Star}</i>
                        </div>
                        <p className="text">Recently visited health check up department of Square Hospital for a whole body check up. The entire process from check in to the end was seamless. The staff at the health check department was courteous, helpful and very attentive.</p>
                    </div>

                    <div className="box">
                        <img src={ReviewTwo} alt="" />
                        <h3>Ana Fernandez</h3>
                        <div className="stars">
                            <i>{Star}</i>
                            <i>{Star}</i>
                            <i>{Star}</i>
                            <i>{Star}</i>
                            <i>{Star}</i>
                        </div>
                        <p className="text">Dr Vijay Kumar Chennamchetty: We met Dr Vijay Chennamchetty last month with severe cough and sputum for my father Dr Varaprasad. His way of handling patients is excellent and so soothing that the patient feels immensely confident.</p>
                    </div>

                    <div className="box">
                        <img src={ReviewThree} alt="" />
                        <h3>John Andison</h3>
                        <div className="stars">
                            <i>{Star}</i>
                            <i>{Star}</i>
                            <i>{Star}</i>
                            <i>{Star}</i>
                            <i>{Star}</i>
                        </div>
                        <p className="text">It's very well mannered staff good coordination with patients. Mrs. Praveena garu assisted very well and taken good care towards patients. Overall experience is satisfactory.</p>
                    </div>

                </div>

            </section>

            {/* review section ends */}
        </div>
    );
};

export default Home;