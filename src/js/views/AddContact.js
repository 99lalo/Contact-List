import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = props => {
	const { store, actions } = useContext(Context);
	const [newContact, setNewContact] = useState({
		full_name: "",
		email: "",
		agenda_slug: "99lalo",
		phone: "",
		address: ""
	});
	const handleChange = e => setNewContact({ ...newContact, [e.target.name]: e.target.value });
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							name="full_name"
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={newContact.full_name}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							name="email"
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={newContact.email}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							name="phone"
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={newContact.phone}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							name="address"
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={newContact.address}
							onChange={handleChange}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => actions.addContact(newContact)}>
						Save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
