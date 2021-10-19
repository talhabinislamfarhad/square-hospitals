import React from 'react';
import './Contact.css';
import { useHistory, useLocation } from 'react-router-dom';

const Contact = () => {
    const History = useHistory();
    const Location = useLocation();
    const Redirect = Location?.state?.from || "/";

    const handleContact = (e) => {
        History.push(Redirect);
    }

    return (
        <div>
            {/* Contact section starts  */}

            <section className="contact" id="contact">

                <h1 className="heading"> <span>Contact</span> Us </h1>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={handleContact}>
                            <h3>Hospital Emergency Contact!</h3>
                            <p>Give us your emergency contact information</p>
                            <input type="text" placeholder="your name" className="box" />
                            <input type="email" placeholder="your email" className="box" required />
                            <textarea type="textarea" placeholder="your message" className="box" required></textarea>
                            <input type="submit" value="Send" className="btn" />
                        </form>
                    </div>


                </div>

            </section>

            {/* Contact section ends  */}
        </div>
    );
};

export default Contact;