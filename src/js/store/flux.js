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
				let newStore = getStore();
				let updatedContacts = newStore.contacts.concat(newContact);
				setStore({ contacts: updatedContacts });
			}
		}
	};
};

export default getState;
