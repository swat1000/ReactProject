import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Header from './header';

export default function Login() {
  return (
    <div>
      <Header />
      <div className='login'>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4>Login</h4>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input type="text" className="form-control" id="username" placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control" id="password" placeholder="Enter password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <p className="mt-3">Don't have an account? <Link to='/register'>Sign up</Link></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
