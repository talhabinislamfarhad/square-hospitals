import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Registation.css';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'react-bootstrap';

const Registation = () => {
    const { signInUsingGoogle, registerNewUser, handleNameChange, handleEmailChange, handlePasswordChange } = useAuth();
    const History = useHistory();
    const Location = useLocation();
    const Redirect = Location?.state?.from || "/";

    const handleRegister = (e) => {
        e.preventDefault();
        registerNewUser()
        setTimeout(() => {
            History.push(Redirect);
        }, 2000)
    }

    const Google = <FontAwesomeIcon icon={faGoogle} />

    return (
        <div>
            {/* Registation section starts  */}

            <section className="registation" id="registation">

                <h1 className="heading"> <span>Registation</span></h1>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={handleRegister}>
                            <input onBlur={handleNameChange} type="text" placeholder="Enter your name" className="box" required />
                            <input onBlur={handleEmailChange} type="email" placeholder="Enter your email" className="box" required />
                            <input onBlur={handlePasswordChange} type="password" placeholder="Enter your password" className="box" required />
                            <input type="submit" value="Registation" className="btn" />
                            <div className="link">
                                <Link to="/login">Already a member? Click for Log in</Link>
                                <div className="share">
                                    <Button onClick={signInUsingGoogle}>{Google}</Button>
                                </div>
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