import { useState, useContext } from "react"
import { Form, Button, FormGroup } from "react-bootstrap";
import { DataType } from "../memsym/data-type";
import { MemContext } from "./memcontext";
import { useFeedback } from '../memsym/utils';
import {nameRegexString} from '../memsym/constants';


function checkIfNameExists(memsym, name) {
  return !!memsym.records.find(x => x.label === name);
}

export const RecordForm = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState(DataType.INT);
  const [value, setValue] = useState(0);

  const { memsym, onUpdate } = useContext(MemContext);

  const nameFb = useFeedback();
  const valueFb = useFeedback();

  const onClick = () => {
    let actual = value;
    if (+type === DataType.BOOL && !(value === "true" || value === "false")) {
      actual = "true";
    }

    let nameIsOk = true;
    if (!name) {
      nameFb.setError('Label is required');
      nameIsOk = false;
    }
    if (nameIsOk && checkIfNameExists(memsym, name)) {
      nameFb.setError('Label is already defined');
      nameIsOk = false;
    }
    if (nameIsOk && !name.match(new RegExp(`^${nameRegexString}$`))) {
      nameFb.setError("Label must start with '_' or letter (a-z, A-Z) and be following by '_' or letters (a-z, A-Z) or numbers (0-9)");
      nameIsOk = false;
    }
    if (nameIsOk) {
      nameFb.setError('');
    } else {
      return;
    }

    let valueIsOk = true;
    if (actual !== 0 && !actual) {
      valueFb.setError('Value is required');
      valueIsOk = false;
    }
    if (valueIsOk && +type === DataType.INT && ((!actual.match(/^-?\d+$/)) || (actual < -128 || actual > 127))) {
      valueFb.setError('Value must be a number in range [-128; 127]');
      valueIsOk = false;
    }
    if (valueIsOk && +type === DataType.CHAR && actual.length > 1) {
      valueFb.setError('Value must be only 1 character long');
      valueIsOk = false;
    }
    if (valueIsOk) {
      valueFb.setError('');
    } else {
      return;
    }

    memsym.declare(type, name, actual);
    onUpdate();
  }

  return (
    <Form>
      <FormGroup>
        <Form.Label>Label</Form.Label>
        <Form.Control value={name} onChange={e => setName(e.target.value)} name="name" type="text" placeholder="Label" isInvalid={!nameFb.valid} />
        <Form.Control.Feedback type="invalid">
          {nameFb.message}
        </Form.Control.Feedback>
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
          <>
            <Form.Control value={value} onChange={e => setValue(e.target.value)} name="value" type="text" placeholder="Value" isInvalid={!valueFb.valid} />
            <Form.Control.Feedback type="invalid">
              {valueFb.message}
            </Form.Control.Feedback>
          </>
        )}
      </FormGroup>


      <Button variant="primary" type="button" onClick={onClick}>
        Declare
      </Button>
    </Form>
  )
}