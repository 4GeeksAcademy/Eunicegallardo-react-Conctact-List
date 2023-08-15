import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/appContext'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const FormContact = () => {
    const { store, actions } = useContext(Context);

    const [fullName, setFullName] = useState('');
    const [contactEmail, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const navigate = useNavigate();

    let { email } = useParams();

    const isEditMode = !!email;


    const [currentContact, setCurrentContact] = useState(null);



    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "fullName":
                setFullName(value);
                break;
            case "contactEmail":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "address":
                setAddress(value);
                break;
            default:
                break;
        }
    };


    const handleSubmit = (e) => {

        e.preventDefault();

        const contactData = {
            fullName: fullName,
            contactEmail: contactEmail,
            phone: phone,
            address: address
        };

        if (email) {
            actions.updateContact(contactData);

        } else {
            actions.createUpdateContact(contactData);
        }


        navigate('/');
    };

    useEffect(() => {
        if (email) {
            const contactToEdit = store.contactList.find(contact => contact.contactEmail === email);
            if (contactToEdit) {
                setCurrentContact(contactToEdit);
                setFullName(contactToEdit.fullName);
                setEmail(contactToEdit.contactEmail);
                setPhone(contactToEdit.phone);
                setAddress(contactToEdit.address);
            }
        }
    }, [email, store.contactList]);


    return (
        <>
            <h1 className='text-center m-4'>Add a new contact</h1>
            <form className='container' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" value={fullName} className="form-control" placeholder={currentContact ? currentContact.fullName : "Fullname"} name="fullName" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="text" value={contactEmail} className="form-control" name="contactEmail" placeholder="Email" onChange={handleChange} disabled={isEditMode} />

                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="text" value={phone} className="form-control" name="phone" placeholder={currentContact ? currentContact.phone : "phone"} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" value={address} name="address" className="form-control" placeholder={currentContact ? currentContact.address : "address"} onChange={handleChange} />
                </div>
                <button type="submit" className="btn form w-100" >Save</button>
                <Link to="/">
                    <p>or get back to contacts</p>
                </Link>
            </form>
        </>
    )
}

export default FormContact