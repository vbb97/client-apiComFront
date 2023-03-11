import { Link } from 'react-router-dom';
import { Container, Logo, Nav, LinksList, ItemList } from './styles';

const Navbar = ({logout, deleteUser, authenticated}) => {
  return (
    <Container>
      <Logo />
      <Nav>
        <LinksList>
          <ItemList>
            <Link to={`/`} className='nav-link'>Home</Link>
          </ItemList>
          {!authenticated &&
            <>
              <ItemList>
                <Link to={`/signup`} className='nav-link'>Criar conta</Link>
              </ItemList>
              <ItemList>
                <Link to={`/login`} className='nav-link'>Login</Link>
              </ItemList>
            </>
          }
          {authenticated &&
            <>
              <ItemList>
                <Link to={`/contacts`} className='nav-link'>Contatos</Link>
              </ItemList>
              <ItemList>
                <Link onClick={() => logout()} className='nav-link'>Sair</Link>
              </ItemList>
              <ItemList>
                <Link onClick={() => deleteUser()} className='nav-link'>Deletar conta</Link>
              </ItemList>
            </>
          }
        </LinksList>
      </Nav>
    </Container>
  );
};

export default Navbar;
