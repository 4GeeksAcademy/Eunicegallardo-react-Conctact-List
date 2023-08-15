import React, { useContext } from 'react'
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


const ContactList = (props) => {
    const { store, actions } = useContext(Context);


    return (
        <div>

            <div className='container'>
                <div className="card border-success mb-3" >
                    <div className="row">
                        <div className="col-3">
                            <img src="https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" className="img-fluid my-4 ms-3" alt="..." />
                        </div>
                        <div className="col-7">
                            <div className="card-body ps-4 pt-4">
                                <h5 className="card-title m-3">{props.fullName}</h5>
                                <p className="card-text"><FaMapMarkerAlt className='m-2' /> {props.address}</p>
                                <p className="card-text"><FaPhone className='m-2' />{props.phone}</p>
                                <p className="card-text"><FaEnvelope className='m-2' />{props.contactEmail}</p>
                            </div>
                        </div>
                        <div className='col-2 pt-5'>
                            <Link to={`/form/${props.contactEmail}`}>
                                <FaEdit className=' m-4'></FaEdit>
                            </Link>
                            <FaTrashAlt className='m-4' onClick={() => { actions.deleteContact(props.contactEmail) }}></FaTrashAlt>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ContactList