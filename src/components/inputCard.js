import React from "react";
import { Card, Tabs, Tab, Badge } from 'react-bootstrap';
import { RecordForm } from './form';
import { InterpreterView } from './interpreterView';

export class InputCard extends React.Component {
    render() {
        return (
            <Tabs defaultActiveKey="form">
                <Tab eventKey="form" title="Form">
                    <Card>
                        {this.renderForm()}
                    </Card>
                </Tab>
                <Tab eventKey="interpreter" title={<span>Interpreter <Badge variant="danger">WIP</Badge></span>}>
                    <Card>
                        {this.renderInterpreter()}
                    </Card>
                </Tab>
            </Tabs>
        )
    }

    renderForm() {
        return (
            <Card.Body>
                <Card.Title>
                    Declare a variable
                </Card.Title>
                <RecordForm />
            </Card.Body>
        )
    }

    renderInterpreter() {
        return (
            <Card.Body>
                <Card.Title>Interpreter</Card.Title>
                <InterpreterView />
            </Card.Body>
        )
    }
}