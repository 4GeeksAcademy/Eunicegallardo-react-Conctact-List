import React from 'react'
import { Link } from 'react-router-dom'

const ContactList = () => {
    return (
        <div>
            <div className="d-flex justify-content-end">
                <Link to="/form">
                    <button className="btn">Check the Context in action</button>
                </Link>
            </div>
            <div className='container'>
                <div className="card mb-3" style={{maxWidth: "540px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactList