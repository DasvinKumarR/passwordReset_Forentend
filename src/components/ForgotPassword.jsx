import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
    // usestate initiate to set the email value
    const [email, setEmail] = useState('');
    // function to handle email validation and to send the reset link
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`https://passwordreset-backend-95j4.onrender.com/forgot-password`, { email });
            toast("Password reset email sent");
        } catch (error) {
            toast("Error sending email");
        }
    };

    // UI desgin code for forgot  password page
    return (
        <div className="container">
            <h2 className='forgotHeading'>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className='email-label' htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control email-text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary link-button">Send Reset Link</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ForgotPassword;
