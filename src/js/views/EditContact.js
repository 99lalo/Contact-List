import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
export const EditContact = props => {
	const { store, actions } = useContext(Context);
	const [editContact, setEditedContact] = useState(
      {  full_name: props.location.state.full_name,
		email: props.location.state.email,
		agenda_slug: "99lalo",
		phone: props.location.state.phone,
        address: props.location.state.address,
        id: props.location.state.id}
    );
    console.log(props);
    
	const handleChange = e => setEditedContact({ ...newContact, [e.target.name]: e.target.value });
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							name="full_name"
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={editedContact.full_name}
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
							value={editedContact.email}
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
							value={editedContact.phone}
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
							value={editedContact.address}
							onChange={handleChange}
						/>
					</div>
					<Link
						to="/"
						className="btn btn-primary form-control"
						onClick={() => actions.editContact(editedContact)}>
						Save
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
EditContact.propTypes = {
	location: PropTypes.object,
};