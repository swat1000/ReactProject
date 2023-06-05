import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import Header from './header'

export default function signup() {
    return (
        <div>
            <Header />
            <div className='login'>

                <div class="container mt-5">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-header">
                                    <h4>Sign up</h4>
                                </div>
                                <div class="card-body">
                                    <form>
                                        <div class="form-group">
                                            <label for="name">Name</label>
                                            <input type="text" class="form-control" id="name" placeholder="Enter your name" />
                                        </div>
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <input type="email" class="form-control" id="email" placeholder="Enter your email" />
                                        </div>
                                        <div class="form-group">
                                            <label for="password">Password</label>
                                            <input type="password" class="form-control" id="password" placeholder="Enter a password" />
                                        </div>
                                        <div class="form-group">
                                            <label for="confirm-password">Confirm Password</label>
                                            <input type="password" class="form-control" id="confirm-password" placeholder="Confirm password" />
                                        </div>
                                        <button type="submit" class="btn btn-primary">Sign up</button>
                                        <p class="mt-3">Already have an account? <Link to='/login' >Login here</Link></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
