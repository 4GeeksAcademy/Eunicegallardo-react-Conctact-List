import React, { useContext } from "react";
import "../../styles/home.css";
import ContactList from "../component/ContactList";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



export const Home = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-end m-4">
                <Link to="/form">
                    <button className="btn">Add a new contact</button>
                </Link>
            </div>
            {
                store.contactList.map((contact, index) => {
                    return <ContactList key={index} fullName={contact.fullName} address={contact.address} phone={contact.phone} contactEmail={contact.contactEmail} />
                })
            }

        </div>
    )
};
