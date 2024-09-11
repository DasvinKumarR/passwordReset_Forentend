import React from 'react';
import { Link } from 'react-router-dom';

// UI page design code for forgot password link 
function HomePage() {
  return (
    <>
      <div className='container'>
        <p>
          <span>
            <h2 className='homePage-title'>Forgot Password?</h2>
          </span>
          Click here to reset{' '}
          <Link to="/forgot-password">Reset Password</Link>
        </p>
      </div>
    </>
  );
}

export default HomePage;
