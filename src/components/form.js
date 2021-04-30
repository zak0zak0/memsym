import { useState, useContext, useEffect } from "react"
import { Form, Button, Col, FormControl, FormGroup } from "react-bootstrap";
import { DataType } from "../memsym/data-type";
import { MemContext } from "./memcontext";


export const RecordForm = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState(DataType.INT);
  const [value, setValue] = useState(0);

  const { memsym, onUpdate } = useContext(MemContext);

  const onClick = () => {
    let actual = value;
    if (+type === DataType.BOOL && !(value == "true" || value == "false") ) {
      actual = "true";
    }
    memsym.declare(type, name, actual);
    onUpdate();
  }

  return (
    <Form>
      <FormGroup>
        <Form.Label>Label</Form.Label>
        <Form.Control value={name} onChange={e => setName(e.target.value)} name="name" type="text" placeholder="Label" />
      </FormGroup>
      <FormGroup>
        <Form.Label>Type</Form.Label>
        <Form.Control as="select" name="type" value={type} onChange={(e => setType(e.target.value))}>
          <option value={DataType.INT}>int</option>
          <option value={DataType.CHAR}>char</option>
          <option value={DataType.BOOL}>bool</option>
          <option value={DataType.STRING}>string</option>
        </Form.Control>
      </FormGroup>
      <FormGroup>
        <Form.Label>Value</Form.Label>
        {+type === DataType.BOOL && (
          <Form.Control as="select" name="value" value={value} onChange={(e => setValue(e.target.value))}>
            <option value="true">true</option>
            <option value="false">false</option>
          </Form.Control>)
        }
        {+type !== DataType.BOOL && (
          <Form.Control value={value} onChange={e => setValue(e.target.value)} name="value" type="text" placeholder="Value" />
        )}
      </FormGroup>


      <Button variant="primary" type="button" onClick={onClick}>
        Declare
      </Button>
    </Form>
  )
}