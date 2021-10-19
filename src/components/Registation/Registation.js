import React from 'react';
import './Registation.css';

const Registation = () => {
    return (
        <div>
            {/* Registation section starts  */}

            <section className="registation" id="registation">

                <h1 className="heading"> <span>Registation</span></h1>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form action="">
                            <input type="text" placeholder="Enter your name" className="box" />
                            <input type="email" placeholder="Enter your email" className="box" />
                            <input type="password" placeholder="Enter your password" className="box" />
                            <input type="submit" value="Registation" className="btn" />
                            <div className="link">
                                <a href="/login">Already a member? Log in</a>
                            </div>
                        </form>
                    </div>


                </div>

            </section>

            {/* Registation section ends  */}
        </div>
    );
};

export default Registation;