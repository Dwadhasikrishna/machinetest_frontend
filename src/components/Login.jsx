
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); 
    const handleSubmit = async (e) => {
        // e.preventDefault();
        // try {
        //     const response = await axios.post("", { email, password });
        //     setMessage(response.data.message);
        //     navigate('/list-student-details'); 
        // } catch (error) {
        //     setMessage(error.response.data.message);           
        // }
        e.preventDefault();
        navigate('/list-student-details'); 
    };

    return (
        <div className='login-container'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label>User Name</label>
                        <input 
                            type="email" 
                            placeholder='Please Enter Your Email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <button type='submit'>Login</button>
                </div>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
}

export default Login;

