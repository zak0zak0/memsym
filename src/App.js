import './App.css';
import { MemProvider } from './components/memcontext';
import { InputCard } from './components/inputCard';
import { StackView } from './components/stackView';
import { Container, Row, Col, Card, Navbar } from 'react-bootstrap';
import { MemSym } from './memsym/memsym';
import packageJson from '../package.json';
import Logo from './logo_memsym.svg';
import { HeapView } from './components/heapView';

const memsym = new MemSym();

function App() {
  return (
    <MemProvider memsym={memsym}>
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand><img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '} MemSym</Navbar.Brand>
          <Navbar.Text>
            v{packageJson.version}
          </Navbar.Text>
        </Navbar>
        <Row>
          <Col xs="12" sm="6" md="4" lg="3">
            <InputCard />
          </Col>
          <Col xs="12" sm="12" md="8" lg="5">
            <Card>
              <Card.Body>
                <Card.Title>
                  Stack
                </Card.Title>
                <StackView />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Heap</Card.Title>
                <Card.Text>hover over a cell to see the value</Card.Text>
                <HeapView />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </MemProvider>
  );
}

export default App;
