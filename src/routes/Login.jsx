import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import blogFetch from "../axios/config";
import Input from "../components/Input";

const Login = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useOutletContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sended, setSended] = useState(false);
  const responseMsg = document.querySelector('.response-message');

  const createSession = async (e) => {
    e.preventDefault();
    setSended(true);

    const inputEmail = document.querySelector('#input-email-login');
    const inputPassword = document.querySelector('#input-password-login');

    if(inputEmail.value == '' || inputPassword.value == '') return;
    
    await blogFetch.post('/login', { email, password })
    .then((response) => {
      if(response.status === 201) {
        Cookies.set('userToken', response.data.token, { expires: 7 });
        setAuthenticated(true);

        responseMsg.classList.replace('error-response', 'success-response');
        responseMsg.innerText = 'Sessão iniciada.';
  
        navigate('/contacts')
      } else {
        responseMsg.classList.replace('success-response', 'error-response');
        responseMsg.innerText = response.data.message;
      };
      
      responseMsg.style.visibility = 'visible';

      setInterval(() => {
        responseMsg.style.visibility = 'hidden';
      }, 3000);
    })
    .catch((error) => {
      responseMsg.classList.replace('success-response', 'error-response');
      responseMsg.innerText = 'Algo deu errado.';
      responseMsg.style.visibility = 'visible';

      setInterval(() => {
        responseMsg.style.visibility = 'hidden';
      }, 3000);
    });

    return;
  };

  const sendErrors = () => {
    if(sended) {
      const errorEmail = document.querySelector('#error-email-login');
      const errorPassword = document.querySelector('#error-password-login');

      email == '' ? errorEmail.style.visibility = 'visible' : errorEmail.style.visibility = 'hidden';
      password == '' ? errorPassword.style.visibility = 'visible' : errorPassword.style.visibility = 'hidden';
    };
  };

  useEffect(() => {
    sendErrors();
  }, [sended, email, password]);

  return (
    <>
      {authenticated ?
        <h1>Você já está logado</h1>
        :
        <div className="container-form">
          <h1>Faça login</h1>
          <form onSubmit={(e) => createSession(e)} className="main">
            <Input
              id="input-email-login"
              idError="error-email-login"
              errorMessage="O campo email é obrigatório."
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            >Email
            </Input>
            <Input
              id="input-password-login" 
              idError="error-password-login"
              errorMessage="O campo senha é obrigatório."
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            >Senha
            </Input>
            <input className="btn-send" type="submit" value="Entrar" />
          </form>
        </div>
      }
    </>
  );
};

export default Login;