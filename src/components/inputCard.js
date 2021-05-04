import React from "react";
import { Card } from 'react-bootstrap';
import { InterpreterView } from './interpreterView';

export class InputCard extends React.Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Interpreter</Card.Title>
                    <InterpreterView />
                </Card.Body>
            </Card>
        )
    }
}