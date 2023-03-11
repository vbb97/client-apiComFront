import { Link } from 'react-router-dom';
import { Container, Logo, Nav, LinksList, ItemList } from './styles';

const Navbar = () => {
  return (
    <Container>
      <Logo />
      <Nav>
        <LinksList>
          <ItemList>
            <Link to={`/`} className='nav-link'>Home</Link>
          </ItemList>
          <ItemList>
            <Link to={`/signup`} className='nav-link'>Criar conta</Link>
          </ItemList>
          <ItemList>
            <Link to={`/login`} className='nav-link'>Login</Link>
          </ItemList>
          <ItemList>
            <Link to={`/contacts`} className='nav-link'>Contatos</Link>
          </ItemList>
            </LinksList>
        </Nav>
    </Container>
  );
};

export default Navbar;
