import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
    // token is taken from request uri
    const { token } = useParams();
    // initiating password state to  set the password
    const [password, setPassword] = useState('');
    // function to handle new password set.
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/reset-password/${token}`, { password });
            toast('Password successfully reset');
        } catch (error) {
            toast('Error resetting password');
        }
    };
    // UI design code for password reset  page.
    return (
        <div className="container">
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="password">New Password</label>
                    <input
                        type="password"
                        className="form-control password-text"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Reset Password</button>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default ResetPassword;
