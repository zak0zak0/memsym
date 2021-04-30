import { useState, useContext, useEffect } from "react"
import { Form, Button, Col } from "react-bootstrap";
import { MemContext } from "../memory-context";
import { Record } from '../stack/memory';
import { type as Type } from "../stack/display";

export const RecordForm = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState(Type.INT);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (+type === Type.BOOL) {
      setValue('true');
    }
  }, [type]);

  const memory = useContext(MemContext);

  const onClick = () => {
    const actValue = +type === Type.BOOL ? !!value : value;
    memory.declareVariable(new Record(name, +type, actValue));
  }

  return (
    <Form style={{ maxWidth: '800px', marginBottom: '30px' }}>
      <Form.Row>
        <Col>
          <Button variant="primary" type="button" onClick={onClick}>
            DeclareVariable
          </Button>
        </Col>
        <Col>
          <Form.Control value={name} onChange={e => setName(e.target.value)} name="name" type="text" placeholder="Name" />
        </Col>
        <Col>
          <Form.Control as="select" name="type" value={type} onChange={(e => setType(e.target.value))}>
            <option value={Type.INT}>int</option>
            <option value={Type.UINT}>uint</option>
            <option value={Type.BOOL}>bool</option>
            <option value={Type.STRING}>string</option>
          </Form.Control>
        </Col>
        <Col>
          {+type === Type.BOOL && (
            <Form.Control as="select" name="value" value={value} onChange={(e => setValue(e.target.value))}>
              <option value="true">true</option>
              <option value="false">false</option>
            </Form.Control>)
          }
          {+type !== Type.BOOL && (
            <Form.Control value={value} onChange={e => setValue(e.target.value)} name="value" type="text" placeholder="Value" />
          )}          
        </Col>
      </Form.Row>

    </Form>
  )
}