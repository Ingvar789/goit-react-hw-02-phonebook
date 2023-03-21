// імпорт компонент
import React, { Component } from 'react';
import { Container } from './App.styled';

import PhonebookForm from 'components/PhonebookForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

class App extends Component{
 state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
}

  addContact = info => {
      this.setState(prevState => {
      const prevContacts = [...prevState.contacts];
      prevContacts.map(prevContact => {
				if (info.name !== prevContact.name) {
					return undefined;
				}
				alert(`${info.name} is already in contacts.`);
				return {
					contacts: [...prevState.contacts],
				}
			})
      return { contacts: [...prevState.contacts, info] };
    })
    console.log(this.state);
  }

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  changeFilter = e => {
    this.setState({ filter:e.currentTarget.value})
  }
  
  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
      );
  }

  render() {

    return (
      
      <Container>
        <h1>Phonebook</h1>
        <PhonebookForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={this.getFilteredContacts()} onDeleteContact={this.onDeleteContact} />
        </Container>
  );
  }
};
export default App;