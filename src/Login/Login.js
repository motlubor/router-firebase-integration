import React from 'react';
import useFirbase from '../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirbase();
    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={signInWithGoogle}>Google Sign In</button>
            <form>
                <br />
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Your Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;