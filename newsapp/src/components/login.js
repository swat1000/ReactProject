import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function login() {
    return (
        <div className='login'>
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h4>Login</h4>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="form-group">
                                        <label for="username">Username</label>
                                        <input type="text" class="form-control" id="username" placeholder="Enter username" />
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" class="form-control" id="password" placeholder="Enter password" />
                                    </div>
                                    <button type="submit" class="btn btn-primary">Login</button>
                                    <p class="mt-3">Don't have an account? <Link to='/register' >Sign up</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
