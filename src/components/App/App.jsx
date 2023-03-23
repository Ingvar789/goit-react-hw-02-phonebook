// імпорт компонент
import React, { Component } from 'react';
import { Container } from './App.styled';

import PhonebookForm from 'components/PhonebookForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

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
        };
      });
      return { contacts: [...prevState.contacts, info] };
    });
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <PhonebookForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.getFilteredContacts()}
          onDeleteContact={this.onDeleteContact}
        />
      </Container>
    );
  }
}
export default App;
