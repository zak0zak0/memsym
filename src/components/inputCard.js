import React from "react";
import { Card, Tabs, Tab } from 'react-bootstrap';
import { RecordForm } from './form';
import { Interpreter } from './interpreter';

export class InputCard extends React.Component {
    render() {
        return (
            <Tabs defaultActiveKey="form">
                <Tab eventKey="form" title="Form">
                    <Card>
                        {this.renderForm()}
                    </Card>
                </Tab>
                <Tab eventKey="interpreter" title="Interpreter">
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
                    Declare variable
                </Card.Title>
                <RecordForm />
            </Card.Body>
        )
    }

    renderInterpreter() {
        return (
            <Card.Body>
                <Card.Title>Interpreter</Card.Title>
                <Interpreter />
            </Card.Body>
        )
    }
}