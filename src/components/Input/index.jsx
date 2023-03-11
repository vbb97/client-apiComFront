import { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Container, Name, Box, Data, Error } from "./styles";

const Input = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const eyeIcon = isOpen ? 
  <AiOutlineEye
    onClick={() => showPassword(props.id)}
    className='password-hidden'
  /> :
  <AiOutlineEyeInvisible
    onClick={() => showPassword(props.id)}
    className='password-hidden'
  />;

  const showPassword = (id) => {
    const input = document.querySelector('#' + id);
    if(input.attributes.type.value === "text") {
      input.setAttribute('type', 'password');
      setIsOpen(false);
    } else {
      input.setAttribute('type', 'text');
      setIsOpen(true);
    };
  };
  
  return (
    <Container>
      <Name>{props.children}</Name>
      <Box>
        {props.type === 'password' && eyeIcon}
        <Data type={props.type} id={props.id} onChange={props.onChange}/>
      </Box>
      <Error id={props.idError}>{props.errorMessage}</Error>
    </Container>
  );
};

export default Input;
