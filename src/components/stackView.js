import { render } from "@testing-library/react";
import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { DataType } from "../memsym/data-type";
import { MemContext } from "./memcontext";
import { toByteString } from '../memsym/utils';

export class StackView extends React.Component {



    render() {
        return (
            <MemContext.Consumer>
                {this.renderBody}
            </MemContext.Consumer>

        );
    }

    renderBody = ({ records }) => {
        return (
            <Table bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>bin</th>
                        <th>value</th>
                        <th>label</th>
                        <th>type</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((r, i) => (
                        <tr key={i}>
                            <td>{i}</td>
                            <td>{this.renderBin(r.value)}</td>
                            <td>{r.value}</td>
                            <td>{r.label}</td>
                            <td>{this.renderType(r.dataType)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }

    renderBin = (value) => {
        return toByteString(value);
    }

    renderType = (type) => {
        switch (+type) {
            case DataType.INT:
                return 'INT';
            case DataType.BOOL:
                return 'BOOL';
            case DataType.CHAR:
                return 'CHAR';
            case DataType.STRING:
                return 'STRING';
            case DataType.NULL:
            default:
                return '';
        }
    }


}