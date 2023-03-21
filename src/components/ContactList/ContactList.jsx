import React from "react";
import {ContactListStyled} from './ContactList.styled'
const ContactList = ({contacts, onDeleteContact}) => (
    <ContactListStyled>
        {contacts.map(({ name, number, id }) => {
            return (
                <li
                key={id}
                >
                <p>{name}: {number}</p>
                    <button
                    type='button'
                    className="ContactList__btn"
                    onClick={() => onDeleteContact(id)}>
                    Delete
                </button>
                </li>
            )

        })}
</ContactListStyled>
)  
export default ContactList;