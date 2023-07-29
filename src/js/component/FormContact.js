import React from 'react'
import { Link } from 'react-router-dom'

const FormContact = () => {
    return (
        <>
            <h1 className='text-center m-4'>Add a new contact</h1>
            <form className='container'>
                <div className="mb-3">
                    <label htmlFor="exampleInputNme" className="form-label">Full Name</label>
                    <input type="name" className="form-control" id="exampleInputName" placeholder='Full Name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder='Enter email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                    <input type="phone" className="form-control" id="exampleInputPhone" placeholder='Enter phone' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                    <input type="address" className="form-control" id="exampleInputAddress" placeholder='Enter address' />
                </div>
                <button type="submit" className="btn form w-100">Save</button>
                <Link to="/">
                    <p>or get back to contacts</p>
                </Link>
            </form>
        </>
    )
}

export default FormContact