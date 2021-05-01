import React, { useState } from "react";
import { FormGroup, Button, Form } from 'react-bootstrap';
import { useFeedback } from "../memsym/utils";
import { InterpreterHelp } from './help/interpreterHelp';

export function Interpreter() {
    const textFb = useFeedback();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Form>
            <FormGroup>
                <Form.Label>Input a script and click the Run button</Form.Label>
                <Form.Control as="textarea" isInvalid={!textFb.valid} />
                <Form.Control.Feedback type="invalid">{textFb.message}</Form.Control.Feedback>
            </FormGroup>
            <Button variant="primary" type="button">Run</Button> {' '}           
            <Button variant="link" size="sm" type="button" onClick={handleShow}>Help</Button>
            <InterpreterHelp show={show} handleClose={handleClose} />
        </Form>
    );
}