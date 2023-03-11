import { useState, useEffect } from 'react';
import { Container, Title, Form, Data, Label, Input, Error, Actions, Send, Abort } from './styles';

const ContactForm = ({ formName, buttonName, setNewData, action, contactInUpdate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sended, setSended] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSended(true);

    if(name == '' || email == '') return;

    action(name, email);
    setNewData(false);
  };

  const sendErrors = () => {
    if(sended) {
      const errorName = document.querySelector('#error-name-contact');
      const errorEmail = document.querySelector('#error-email-contact');

      if(name == '') {
        errorName.style.visibility = 'visible';
      } else {
        errorName.style.visibility = 'hidden';
      };

      if(email == '') {
        errorEmail.style.visibility = 'visible';
      } else {
        errorEmail.style.visibility = 'hidden';
      };
    } else return;
  };

  useEffect(() => {
    if(contactInUpdate) {
      const inputName = document.querySelector('#contact-name');
      const inputEmail = document.querySelector('#contact-email');
      inputName.value = contactInUpdate.name;
      inputEmail.value = contactInUpdate.email;

      setName(contactInUpdate.name);
      setEmail(contactInUpdate.email);
    };
    
  }, [contactInUpdate]);

  useEffect(() => {
    sendErrors();
  }, [sended, name, email]);

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Title>{formName}</Title>
        <Data>
          <Label htmlFor="contact-name">Nome</Label>
          <Input onChange={(e) => setName(e.target.value)} id="contact-name" type="text" />
          <Error id="error-name-contact">O campo nome é obrigatório</Error>
        </Data>
        <Data>
          <Label htmlFor="contact-email">Email</Label>
          <Input onChange={(e) => setEmail(e.target.value)} id="contact-email" type="email" />
          <Error id="error-email-contact">O campo email é obrigatório</Error>
        </Data>
        <Actions>
          <Send type="submit" value={buttonName}/>
          <Abort onClick={() => setNewData(false)} >Cancelar</Abort>
        </Actions>
      </Form>
    </Container>
  );
};

export default ContactForm;
