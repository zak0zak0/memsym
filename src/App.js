import { Heap, Stack } from './components/stack';
import './App.css';
import Memory, { Record } from './stack/memory';
import { type } from './stack/display';
import { MemProvider } from './components/memprovider';
import { RecordForm } from './components/form';
import { Row } from 'react-bootstrap';

const memory = new Memory();
// memory.declareVariable(new Record('a', type.UINT, 5));
// memory.declareVariable(new Record('b', type.INT, -5));
// memory.declareVariable(new Record('c', type.BOOL, true));
// memory.declareVariable(new Record('d', type.STRING, 'abc'));
// memory.declareVariable(new Record('e', type.STRING, 'def'));


function App() {
  return (
    <div>
      <MemProvider memory={memory}>
        <RecordForm />
        <Row>
          <Stack />
          <Heap />
        </Row>
      </MemProvider>
    </div>
  );
}

export default App;
