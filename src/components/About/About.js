import React from 'react';
import './About.css';
import Banner from '../../images/about-img.svg';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const About = () => {
    const ChevronRight = <FontAwesomeIcon icon={faChevronRight} />

    return (
        <div>
            {/* about section starts  */}

            <section className="about" id="about">

                <h1 className="heading"> <span>about</span> us </h1>

                <div className="row">

                    <div className="image">
                        <img src={Banner} alt="" />
                    </div>

                    <div className="content">
                        <h3>SQUARE HOSPITALS LTD</h3>
                        <p>Square Hospitals Limited is a tertiary care hospital and the leading contributor of private healthcare services in Bangladesh. This has been achieved only through consistent commitment.</p>
                        <p>The reputation of Square Hospital is the result of quality clinical outcome and comprehensive care.</p>
                        <a href="#0" className="btn"> our services {ChevronRight} </a>
                    </div>

                </div>

            </section>

            {/* about section ends  */}
        </div>
    );
};

export default About;