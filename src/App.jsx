import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import blogFetch from "./axios/config";
import Navbar from "./components/Navbar";

const App = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState();
  const token = Cookies.get('userToken');
  
  const logout = () => {
    const token = Cookies.get('userToken');
  
    if(token) {
      Cookies.remove('userToken', { path: '' });
      setAuthenticated(false);
  
      const responseMsg = document.querySelector('.response-message');
      responseMsg.classList.replace('success-response', 'error-response');
      responseMsg.innerText = 'Você se desconectou.';
      responseMsg.style.visibility = 'visible';
  
      setInterval(() => {
        responseMsg.style.visibility = 'hidden';
      }, 3000);
    };
  };

  const deleteUser = async () => {
    await blogFetch.delete('/users', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
    .then((response) => {
      logout();
      navigate('/');
    })
    .catch((error) => console.log(error));
  };

  useEffect(() => {
    if(token) setAuthenticated(true);
  }, []);

  return (
    <div className="container">
      <Navbar logout={logout} deleteUser={deleteUser} authenticated={authenticated} />
      <span className="response-message success-response"></span>
      <Outlet 
        context={[authenticated, setAuthenticated]}
      />
    </div>
  );
};

export default App;
