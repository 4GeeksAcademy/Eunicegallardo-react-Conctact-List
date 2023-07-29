import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import FormContact from "../component/FormContact";
import ContactList from "../component/ContactList";
import { Link } from "react-router-dom";


export const Home = () => (
	<div className="container mt-5">
		<div className="d-flex justify-content-end m-4">
                <Link to="/form">
                    <button className="btn">Add a new contact</button>
                </Link>
            </div>
		<ContactList></ContactList>
	</div>
);
