import React from "react";
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
            <Table bordered size="sm">
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
                            <td>{this.renderBin(r.dataType, r.value)}</td>
                            <td>{r.value}</td>
                            <td>{r.label}</td>
                            <td>{this.renderType(r.dataType)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }

    renderBin = (dataType, value) => {
        if (dataType === DataType.CHAR) {
            value = value.charCodeAt(0);
        }
        if (dataType === DataType.BOOL) {
            value = value === "true" ? 1 : 0;
        }
        return toByteString(value);
    }

    renderType = (type) => {
        switch (+type) {
            case DataType.INT:
                return 'int';
            case DataType.BOOL:
                return 'bool';
            case DataType.CHAR:
                return 'char';
            case DataType.STRING:
                return 'string';
            case DataType.NULL:
            default:
                return '';
        }
    }


}