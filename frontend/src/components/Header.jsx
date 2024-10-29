import { Navbar, Nav, Container } from 'react-bootstrap'
import { BiShoppingBag } from 'react-icons/bi'
import { LuUser2 } from 'react-icons/lu'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Agora</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/cart'><BiShoppingBag /> Cart</Nav.Link>
              <Nav.Link href='/login'><LuUser2 /> Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
