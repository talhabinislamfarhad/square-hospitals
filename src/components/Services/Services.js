import React from 'react';
import './Services.css';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
//Json File
import ServicesData from '../../fake-data/Services.json';


const Services = () => {
    const ChevronRight = <FontAwesomeIcon icon={faChevronRight} />
    return (
        <div>
            {/* services section starts  */}

            <section className="services" id="services">

                <h1 className="heading"> our <span>services</span> </h1>

                <div className="box-container">
                    {ServicesData.map(services => {
                        return (
                            <div key={services.id}>
                                <div className="box">
                                    <img src={services.img} alt="" />
                                    <h3>{services.title}</h3>
                                    <p>{services.decription}</p>
                                    <a href="#0" className="btn"> Specific  {ChevronRight} </a>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </section>

            {/* services section ends  */}
        </div>
    );
};

export default Services;