const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			contactList: [
				{
					fullName: "Emily Sandoval",
					address: "5842 Hillcrest Rd",
					phone: "(870) 288-4149",
					contactEmail: "sandovalemily@gmail.com"

				},
				{
					fullName: "Cesia Rodriguez",
					address: "Costa Rica",
					phone: "8457-6324",
					contactEmail: "gallardocesia@gmail.com"

				},


			],
		},
		actions: {
			// Use getActions to call a function within a fuction

			createUpdateContact: (contactObject) => {

				let store = getStore();
				let contactList = [...store.contactList, contactObject];
				setStore({ contactList });

			},

			updateContact: (updatedContact) => {
				console.log("Email del contacto actualizado:", updatedContact.contactEmail);
				let store = getStore();
				let contacts = store.contactList;

				if (!contacts) return;

				const updatedContactList = contacts.map(contact => {
					if (contact.contactEmail === updatedContact.contactEmail) {
						console.log('Viejo contacto:', contact);
						console.log('Nuevo contacto:', updatedContact);
						return {
							...contact,
							...updatedContact
						};
					}
					else {
						return contact;
					}
				});

				setStore({ contactList: updatedContactList });
			},

			getContacts: () => {
				let contacts = getStore.contacts;
				return contacts;
			},


			deleteContact: (email) => {
				let store = getStore();

				let updatedContactList = store.contactList.filter((value) => value.contactEmail !== email);

				setStore({ contactList: updatedContactList });

			}
		}
	};
};

export default getState;
