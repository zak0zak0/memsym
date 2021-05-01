import './App.css';
import { MemProvider } from './components/memcontext';
import { RecordForm } from './components/form';
import { StackView } from './components/stackView';
import { Container, Row, Col, Card, Navbar } from 'react-bootstrap';
import { MemSym } from './memsym/memsym';
import packageJson from '../package.json';

const memsym = new MemSym();

function App() {
  return (
    <MemProvider memsym={memsym}>
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>MemSym</Navbar.Brand>
          <Navbar.Text>
            v{packageJson.version}
          </Navbar.Text>
        </Navbar>
        <Row>
          <Col xs="12" sm="6" md="4" lg="3">
            <Card>
              <Card.Body>
                <Card.Title>
                  Declare variable
                </Card.Title>
                <Card.Body>
                  <RecordForm />
                </Card.Body>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="8" lg="5">
            <Card>
              <Card.Body>
                <Card.Title>
                  Stack
                </Card.Title>
                <Card.Body>
                  <StackView records={memsym.records} />
                </Card.Body>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </MemProvider>
  );
}

export default App;
