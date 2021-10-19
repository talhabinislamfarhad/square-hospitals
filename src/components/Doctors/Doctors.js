import React from 'react';
import './Doctors.css';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
//Fake Data
import DoctorsData from '../../fake-data/Doctors.json';


const Doctors = () => {
    const Facebook = <FontAwesomeIcon icon={faFacebook} />
    const Twitter = <FontAwesomeIcon icon={faTwitter} />
    const Instagram = <FontAwesomeIcon icon={faInstagram} />
    const Linkedin = <FontAwesomeIcon icon={faLinkedin} />

    return (
        <div>
            {/* doctors section starts  */}

            <section className="doctors" id="doctors">

                <h1 className="heading"> our <span>doctors</span> </h1>

                <div className="box-container">
                    {DoctorsData.map(doctors => {
                        return (
                            <div key={doctors.id}>
                                <div className="box">
                                    <img src={doctors.img} alt="" />
                                    <h3>{doctors.name}</h3>
                                    <span>{doctors.Specialty}</span>
                                    <div className="share">
                                        <a href="#0">{Facebook}</a>
                                        <a href="#0">{Twitter}</a>
                                        <a href="#0">{Instagram}</a>
                                        <a href="#0">{Linkedin}</a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                    }

                </div>

            </section>

            {/* doctors section ends  */}
        </div>
    );
};

export default Doctors;