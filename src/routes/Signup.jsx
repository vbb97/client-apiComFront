import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import blogFetch from "../axios/config";
import Input from "../components/Input";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [sended, setSended] = useState(false);
  const token = Cookies.get('userToken');

  const createUser = async (e) => {
    e.preventDefault();
    setSended(true);

    const inputName = document.querySelector('#input-name-create');
    const inputEmail = document.querySelector('#input-email-create');
    const inputPassword = document.querySelector('#input-password-create');
    const inputPasswordConfirm = document.querySelector('#input-passwordConfirm-create');
    const responseMsg = document.querySelector('.response-message');

    if(inputName.value == '' || inputEmail.value == '' || inputPassword.value == '' || inputPasswordConfirm.value != inputPassword.value ) return;

    await blogFetch.post('/users', { name, email, password, passwordConfirm })
    .then((response) => {
      if(response.status === 200) {
        responseMsg.classList.replace('success-response', 'error-response');
      } else {
        responseMsg.classList.replace('error-response', 'success-response');
      };
      
      responseMsg.innerText = response.data.message;
      responseMsg.style.visibility = 'visible';

      setInterval(() => {
        responseMsg.style.visibility = 'hidden';
      }, 3000);
    })
    .then(() => {
      inputName.value = '';
      inputEmail.value = '';
      inputPassword.value = '';
      inputPasswordConfirm.value = '';
      navigate('/login');
    })
    .catch((error) => {
      responseMsg.classList.replace('success-response', 'error-response');
      responseMsg.innerText = 'Algo deu errado.';
      responseMsg.style.visibility = 'visible';

      setInterval(() => {
        responseMsg.style.visibility = 'hidden';
      }, 3000);
    });
  };

  const sendErrors = () => {
    if(sended) {
      const errorName = document.querySelector('#error-name-create');
      const errorEmail = document.querySelector('#error-email-create');
      const errorPassword = document.querySelector('#error-password-create');
      const errorPasswordConfirm = document.querySelector('#error-passwordConfirm-create');

      name == '' ? errorName.style.visibility = 'visible' : errorName.style.visibility = 'hidden';
      email == '' ? errorEmail.style.visibility = 'visible' : errorEmail.style.visibility = 'hidden';
      password == '' ? errorPassword.style.visibility = 'visible' : errorPassword.style.visibility = 'hidden';
      
      if(passwordConfirm == '') {
        errorPasswordConfirm.style.visibility = 'visible';
      } else if (passwordConfirm != password) {
        errorPasswordConfirm.innerText = 'As senhas precisam ser iguais.';
        errorPasswordConfirm.style.visibility = 'visible';
      } else {
        errorPasswordConfirm.style.visibility = 'hidden';
      };
    } else return;
  };

  useEffect(() => {
    sendErrors();
  }, [sended, name, email, password, passwordConfirm]);

  return (
    <>
      {token ?
        <h1>Encerre a sessão para criar uma nova conta.</h1>
        :
        <div className="container-form">
          <h1>Criar conta</h1>
          <form onSubmit={(e) => createUser(e)} className="main">
            <Input 
              id="input-name-create" 
              idError="error-name-create" 
              errorMessage="O campo nome é obrigatório." 
              onChange={(e) => setName(e.target.value)}
              type="text"
            >Nome
            </Input>
            <Input
              id="input-email-create"
              idError="error-email-create"
              errorMessage="O campo email é obrigatório."
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            >Email
            </Input>
            <Input
              id="input-password-create"
              idError="error-password-create"
              errorMessage="O campo senha é obrigatório."
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            >Senha
            </Input>
            <Input
              id="input-passwordConfirm-create"
              idError="error-passwordConfirm-create"
              errorMessage="O campo confirme a senha é obrigatório."
              onChange={(e) => setPasswordConfirm(e.target.value)}
              type="password"
            >Confirme a senha
            </Input>
            <input className="btn-send" type="submit" value="Criar" />
          </form>
        </div>
      }
    </>
  );
};

export default Signup;