const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			loadSomeData: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/99lalo")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						// Do stuff with the JSON
						setStore({ contacts: responseAsJson });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
				//(Arrow) Functions that update the Store
				// Remember to use the scope: scope.state.store & scope.setState()
			},
			addContact: newContact => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(newContact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/99lalo")
							.then(function(response) {
								if (!response.ok) {
									throw Error(response.statusText);
								}
								// Read the response as json.
								return response.json();
							})
							.then(function(responseAsJson) {
								// Do stuff with the JSON
								setStore({ contacts: responseAsJson });
							})
							.catch(function(error) {
								console.log("Looks like there was a problem: \n", error);
							});
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			deleteContact: id => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, { method: "DELETE" })
					.then(response => response.json())
					.then(response => {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/99lalo")
							.then(function(response) {
								if (!response.ok) {
									throw Error(response.statusText);
								}
								// Read the response as json.
								return response.json();
							})
							.then(function(responseAsJson) {
								// Do stuff with the JSON
								setStore({ contacts: responseAsJson });
							})
							.catch(function(error) {
								console.log("Looks like there was a problem: \n", error);
							});
					});
			},
			editContact: contact => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${contact.id}`, {
					method: "PUT",
					body: JSON.stringify(contact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/99lalo")
							.then(function(response) {
								if (!response.ok) {
									throw Error(response.statusText);
								}
								// Read the response as json.
								return response.json();
							})
							.then(function(responseAsJson) {
								// Do stuff with the JSON
								setStore({ contacts: responseAsJson });
							})
							.catch(function(error) {
								console.log("Looks like there was a problem: \n", error);
							});
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			}
		}
	};
};

export default getState;
