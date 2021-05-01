import React, { useState } from 'react';
import { Modal, Button, Pagination } from 'react-bootstrap';
import { Declare } from './declare';

const helpPages = [
    <Declare />
]

export function InterpreterHelp({ show, handleClose }) {
    const [page, setPage] = useState(1);

    return (
        <Modal show={show} onHide={handleClose} size="sm">
            <Modal.Header closeButton>
                <Modal.Title>Interpreter Help</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {helpPages[page - 1]}
            </Modal.Body>
            <Modal.Footer className="justify-content-between">
                <Paginator active={page} onChange={x => setPage(x)} amount={helpPages.length} />
                <Button size="sm" variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

function Paginator({ active, onChange, amount }) {
    const items = [];
    for (let number = 1; number <= amount; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => onChange(number)}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <Pagination size="sm">
            {items}
        </Pagination>
    )
}