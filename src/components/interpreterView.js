import React, { useContext, useState, useRef } from "react";
import { FormGroup, Button, Form } from 'react-bootstrap';
import { Interpreter } from "../memsym/interpreter";
import { useFeedback } from "../common/utils";
import { InterpreterHelp } from './help/interpreterHelp';
import { MemContext } from "./memcontext";

export function InterpreterView() {
    const textFb = useFeedback();   
    const [text, setText] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { memsym, onUpdate } = useContext(MemContext);
    const interpreterRef = useRef(new Interpreter(memsym, onUpdate))

    const onClick = () => {
        const lines = text.split('\n');
        const interpreter = interpreterRef.current;
        try {
            interpreter.run(lines);
            textFb.setError(null);
        } catch (e) {
            textFb.setError(e.message);
        }                
    }

    const onTextChange = e => {
        setText(e.target.value);
    }

    return (
        <Form>
            <FormGroup>
                <Form.Label>Input a script and click the Run button</Form.Label>
                <Form.Control size="sm" as="textarea" rows={5} isInvalid={!textFb.valid} value={text} onChange={onTextChange} />
                <Form.Control.Feedback type="invalid">{textFb.message}</Form.Control.Feedback>
            </FormGroup>
            <Button size="sm" variant="primary" type="button" onClick={onClick}>Run</Button> {' '}           
            <Button size="sm" variant="link" type="button" onClick={handleShow}>Help</Button>
            <InterpreterHelp show={show} handleClose={handleClose} />
        </Form>
    );
}