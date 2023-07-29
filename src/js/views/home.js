import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import FormContact from "../component/FormContact";
import ContactList from "../component/ContactList";

export const Home = () => (
	<div className="container mt-5">
		<ContactList></ContactList>
	</div>
);
