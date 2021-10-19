import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            {/* Contact section starts  */}

            <section className="contact" id="contact">

                <h1 className="heading"> <span>Contact</span> Us </h1>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form action="">
                            <h3>Hospital Emergency Contact!</h3>
                            <p>Give us your emergency contact information</p>
                            <input type="text" placeholder="your name" className="box" />
                            <input type="email" placeholder="your email" className="box" />
                            <textarea type="textarea" placeholder="your message" className="box"></textarea>
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