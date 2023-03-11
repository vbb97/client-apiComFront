import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import blogFetch from "../axios/config";
import axios from "axios";

import ContactForm from "../components/ContactForm";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [newData, setNewData] = useState(false);
  const [contactInUpdate, setContactInUpdate] = useState(null);
  const [currentContact, setCurrentContact] = useState();
  const token = Cookies.get('userToken');

  const getData = async () => {
    await blogFetch.get('/contacts', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
    .then((response) => {
      setContacts(response.data);
    })
    .catch((error) => console.log(error));
  };

  const createContact = async (name, email) => {
    await blogFetch.post('/contacts', {
      name: name,
      email: email,
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
    .catch((e) => console.log(e));
  };

  const updateContact = async (name, email) => {
    await blogFetch.patch(`/contacts/${currentContact}`, {
        name,
        email
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .catch((e) => console.log(e));
  };

  const deleteContact = async (id) => {
    await blogFetch.delete(`/contacts/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
    .catch((e) => console.log(e));
  }

  const handleNewContact = () => {
    setNewData(true);
    setContactInUpdate(null);
  };

  const handleEdit = async (name, email, id) => {
    setNewData(true);
    setContactInUpdate({ name, email});
    setCurrentContact(id);
  };

  useEffect(() => {
    if(token) {
      getData();
    };
  }, [contacts]);

  const formName = contactInUpdate ? "Atualizar contato" : "Criar novo contato";
  const buttonName = contactInUpdate ? "Atualizar" : "Criar";
  const action = contactInUpdate ? updateContact : createContact ;

  return (
    <>
      {token ? 
        <div className="container-contacts">
          {newData && 
            <ContactForm 
              formName={formName}
              buttonName={buttonName}
              setNewData={setNewData}
              action={action}
              contactInUpdate={contactInUpdate}
            />
          }
          <div className="contacts">
            {contacts.length > 0 && contacts.map((contact) => (
              <div key={contact._id} className="contact">
                <span className="contact-name">{contact.name}</span>
                <span className="contact-email">{contact.email}</span>
                <button onClick={() => handleEdit(contact.name, contact.email, contact._id)} className="btn-contact contact-update">Editar</button>
                <button onClick={() => deleteContact(contact._id)} className="btn-contact contact-delete">Apagar</button>
            </div>
            ))}
          </div>
          <button onClick={() => handleNewContact()} className="new-contact">Novo contato</button>
        </div>
        : 
        <h1>Necessário fazer login para acessar essa página.</h1>
      }
    </>
  );
};

export default Contacts;