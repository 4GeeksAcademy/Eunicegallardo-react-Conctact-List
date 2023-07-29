import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone} from "react-icons/fa";
import { FaEnvelope} from "react-icons/fa";


const ContactList = () => {
    return (
        <div>

            <div className='container'>
                <div className="card border-success mb-3" >
                    <div className="row">
                        <div className="col-3">
                            <img src="https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" className="img-fluid my-4 ms-5" alt="..." />
                        </div>
                        <div className="col-7">
                            <div className="card-body ps-4 pt-4">
                                <h5 className="card-title m-3">Emily Sandoval</h5>
                                <p className="card-text"><FaMapMarkerAlt className='m-2'/> 5842 Hillcrest Rd</p>
                                <p className="card-text"><FaPhone className='m-2'/>(870) 288-4149 </p>
                                <p className="card-text"><FaEnvelope className='m-2'/> sandovalemily@gmail.com</p>
                            </div>
                        </div>
                        <div className='col-2 pt-5'>
                            <FaEdit className='m-5'></FaEdit>
                            <FaTrashAlt></FaTrashAlt>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactList