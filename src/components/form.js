import { useState, useContext, useRef } from "react"
import { Form, Button, FormGroup } from "react-bootstrap";
import { DataType } from "../memsym/data-type";
import { MemContext } from "./memcontext";
import { useFeedback } from '../memsym/utils';
import { Validator } from '../memsym/validators/validator';

export const RecordForm = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState(DataType.INT);
  const [value, setValue] = useState(0);

  const { memsym, onUpdate } = useContext(MemContext);

  const nameFb = useFeedback();
  const valueFb = useFeedback();
  const validatorRef = useRef(new Validator(memsym));

  const onClick = () => {
    let actual = value;
    if (+type === DataType.BOOL && !(value === "true" || value === "false")) {
      actual = "true";
    }

    
    const validator = validatorRef.current;
    const nameMessage = validator.name(name);
    nameFb.setError(nameMessage);
    if (nameMessage) {
      return;
    }

    const valueMessage = validator.value(+type, actual);
    valueFb.setError(valueMessage);
    if (valueMessage) {
      return;
    }

    memsym.declare(type, name, actual);
    onUpdate();
  }

  return (
    <Form>
      <FormGroup>
        <Form.Label>Label</Form.Label>
        <Form.Control size="sm" value={name} onChange={e => setName(e.target.value)} name="name" type="text" placeholder="Label" isInvalid={!nameFb.valid} />
        <Form.Control.Feedback type="invalid">
          {nameFb.message}
        </Form.Control.Feedback>
      </FormGroup>
      <FormGroup>
        <Form.Label>Type</Form.Label>
        <Form.Control size="sm" as="select" name="type" value={type} onChange={(e => setType(e.target.value))}>
          <option value={DataType.INT}>int</option>
          <option value={DataType.CHAR}>char</option>
          <option value={DataType.BOOL}>bool</option>
          <option value={DataType.STRING}>string</option>
        </Form.Control>
      </FormGroup>
      <FormGroup>
        <Form.Label>Value</Form.Label>
        {+type === DataType.BOOL && (
          <Form.Control size="sm" as="select" name="value" value={value} onChange={(e => setValue(e.target.value))}>
            <option value="true">true</option>
            <option value="false">false</option>
          </Form.Control>)
        }
        {+type !== DataType.BOOL && (
          <>
            <Form.Control size="sm" value={value} onChange={e => setValue(e.target.value)} name="value" type="text" placeholder="Value" isInvalid={!valueFb.valid} />
            <Form.Control.Feedback type="invalid">
              {valueFb.message}
            </Form.Control.Feedback>
          </>
        )}
      </FormGroup>


      <Button size="sm" variant="primary" type="button" onClick={onClick}>
        Declare
      </Button>
    </Form>
  )
}