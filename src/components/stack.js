import { useContext } from 'react';
import { MemContext } from '../memory-context';
import { StructConvert, type as Type } from '../stack/display';
import { Col } from 'react-bootstrap';


const convert = new StructConvert();
const convertByType = (value, type) => {
  switch (type) {
    case Type.INT:
      return convert.toUint(value);
    case Type.UINT:
      return convert.toInt(value);      
    case Type.BOOL:
      return convert.toBool(value);
    case Type.STRING:
      return value;
    default:
      return value;
  }
}

export const Stack = () => {
  const memory = useContext(MemContext);
  const stack = memory.stack;
  if (!stack.length) {
    return null;
  }
  return (
    <Col xs={2} style={{marginBottom: '30px'}}>
      <h4>
        Stack
      </h4>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>type</th>
            <th>binary</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          {stack.map(x => (
            <tr key={x.name}>
              <td>{x.name}</td>
              <td>{convert.displayType(+x.type)}</td>
              <td>{convert.toBinary(x.value)}</td>
              <td>{convertByType(x.value, x.type)}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </Col>
  )
}

export const Heap = () => {
  const memory = useContext(MemContext);
  if (memory.heap.empty) {
    return null;
  }

  const heap = memory.heap.toArray();
  return (
    <Col style={{marginBottom: '20px'}}>
      <h4>
        Heap
      </h4>
      <table>
        <thead>
          <tr>
            <th></th>
            {Array(10).fill(0).map((_, i) => <th key={i}>{i}</th>)}
          </tr>
        </thead>
        <tbody>
          {Array(5).fill(0).map((_, i) => <tr key={i}><><td key={`td${i}`}>{i * 10 + memory.heap.start}</td>{Array(10).fill(0).map((_, j) => (
            <td key={i * 10 + j}>{convert.toBinary(heap[i * 10 + j])}</td>
          ))}</></tr>)}
        </tbody>
      </table>
      <MemHeap />
    </Col>
  );
}

export const MemHeap = () => {
  const memory = useContext(MemContext);
  if (memory.heap.empty) {
    return null;
  }
  const heap = memory.heap.toArray();
  const str = [];
  for (let i = 0; i < 5; i++) {
    let s = '';
    for (let j = 0; j < 10; j++) {
      const k = heap[i*10+j];
      if (!k) {
        s += '.';        
      } else {
        s += String.fromCharCode(k);
      }
    }
    str.push(s);
  }
  return (
    <div>
      {str.map((s, i) => <code key={i}>{s}<br/></code>)}
    </div>
  )
}