import React from 'react';
import './Login.css';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    // const handleRegistration = e => {
    //     e.preventDefault();
    //     console.log(email, password);
    //     if (password.length < 6) {
    //         setError('Password Must be at least 6 characters long.')
    //         return;
    //     }
    //     if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
    //         setError('Password Must contain 2 upper case');
    //         return;
    //     }

    //     if (isLogin) {
    //         processLogin(email, password);
    //     }
    //     else {
    //         registerNewUser(email, password);
    //     }

    // }

    const Google = <FontAwesomeIcon icon={faGoogle} />

    return (
        <div>
            {/* Login section starts  */}

            <section className="login" id="login">

                <h1 className="heading"> <span>Log</span> In </h1>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form>
                            <input type="email" placeholder="Enter your email" className="box" />
                            <input type="password" placeholder="Enter your password" className="box" />
                            <input type="submit" value="LogIn" className="btn" />
                            <div className="link">
                                <Link to="/registation">Not a member? Sign up</Link>
                                <div className="share">
                                    <a href="#0" onClick={signInUsingGoogle}>{Google}</a>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>

            </section>

            {/* Login section ends  */}

        </div>
    );
};

export default Login;