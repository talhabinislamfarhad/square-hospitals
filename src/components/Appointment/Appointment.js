import React from 'react';
import './Appointment.css';


const Appointment = () => {
    return (
        <div>
            {/* Appointment section starts */}
            <section className="appointment" id="appointment">
                <h1 className="heading"> <span>Appointment</span> now </h1>
                <div className="row">
                    <form className="row">
                        <div className="col-md-12">
                            <input type="email" placeholder="Enter Your Email" className="box form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-12">
                            <input type="password" placeholder="Enter Your Password" className="box form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <input type="text" placeholder="Enter Your Address" className="box form-control" id="inputAddress" />
                        </div>
                        <div className="col-md-6">
                            <input type="text" placeholder="Enter Your City" className="box form-control" id="inputCity" />
                        </div>
                        <div className="col-md-5">
                            <input type="text" placeholder="Enter Your State" className="box form-control" id="inputCity" />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Appointment</button>
                        </div>
                    </form>
                </div>
            </section>
            {/* Appointment section ends  */}
        </div>
    );
};

export default Appointment;