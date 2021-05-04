import { useContext } from "react"
import { MemContext } from './memcontext';
import { Button } from 'react-bootstrap';

export function ClearMemoryButton() {
    const { memsym, onUpdate } = useContext(MemContext);
    const onClick = () => {
        memsym.clear();
        onUpdate();
    }
    return (<Button variant="outline-danger" onClick={onClick}>Clear memory</Button>)
}