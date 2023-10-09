import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EventContext } from "../../provider/UserProvider";


const Login = () => {
    const [logInError, setLogInError] = useState('');
    const [successLogin, setSuccessLogin] = useState('')

    const { signInUser, signWithGoogle } = useContext(EventContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setLogInError('');
        setSuccessLogin('');

        
        if(password.length < 6){
            setLogInError
        }
        
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogleSignIn = () => {
        signWithGoogle()
        .then(result => {
           console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mb-3 text-orange-400">Please Login Here!!!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
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
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <p>New User? Please <Link to='/register'><button className="btn btn-link">Register</button></Link></p>
                            <p><button onClick={handleGoogleSignIn} className="btn btn-ghost" >Google</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;