import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EventContext } from "../../provider/UserProvider";
import swal from 'sweetalert';


const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [successRegistration, setSuccessRegistration] = useState('')

    const navigate = useNavigate();
    const { createUser } = useContext(EventContext);
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        console.log(name, email, password)
        setRegisterError('');
        setSuccessRegistration('');

        if (password.length < 6) {
            setRegisterError(swal("Oops!", "password must be more than six character"));
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError(swal("Oops!", "password must be one capital letter"));
            return;
        }
        else if (!/[!@#$%^&*(),.?":{}|<>\s]/.test(password)) {
            setRegisterError(swal("Oops!", "password must be one special character"));
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                setSuccessRegistration(swal("User created successfully"));
                navigate('/');
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold text-orange-400 mb-3">Register Here now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" required className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' required placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <p>Already have account? please <Link to='/login'><button className="btn btn-link">Login</button></Link></p>
                        </div>
                        {
                            registerError && <p className="text-red-700">{registerError}</p>
                        }
                        {
                            successRegistration && <p className="text-green-600">{successRegistration}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;