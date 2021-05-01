import React from "react";
import { Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import { MemContext } from './memcontext';

const colsCount = 8;

export class HeapView extends React.Component {
    render() {
        return (
            <MemContext.Consumer>
                {this.renderBody}
            </MemContext.Consumer>
        )
    }

    renderBody = ({ heapData }) => {
        const rowsCount = Math.floor(heapData.length / colsCount);
        const rows = this.to2DimArray(heapData, rowsCount, colsCount);
        const header = Array.from(Array(colsCount).keys()).map(x => x.toString(2).padStart(3, '0'));
        return (
            <Table bordered size="sm">
                <thead>
                    <tr>
                        <th>#/#</th>
                        {header.map(x => (<th key={x}>{x}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((r, i) => (
                        <tr key={i}>
                            {r.map((c, i) => this.renderCell(c, i))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }

    renderCell(value, index) {
        if (index === 0) {
            return (
                <td key={index} className="bold">{this.renderCellValue(value, index)}</td>
            )
        }
        const tooltipValue = typeof value === 'string' ? `'${value}'` : value;

        return (
            <OverlayTrigger overlay={<Tooltip>{tooltipValue}</Tooltip>}>
                <td key={index} >{this.renderCellValue(value, index)}</td>
            </OverlayTrigger>
        )
    }

    renderCellValue(value, index) {
        if (index === 0) {
            return value.toString(2).padStart(3, '0');
        }
        if (typeof value === 'string') {
            value = value.charCodeAt(0);
        }
        return value.toString(2).padStart(8, '0');
    }

    to2DimArray(data, rowsCount, colsCount) {
        const rows = [];
        for (let row = 0; row < rowsCount; row++) {
            const cols = [];
            cols.push(row);
            for (let col = 0; col < colsCount; col++) {
                const item = data[row * colsCount + col];
                cols.push(item);
            }
            rows.push(cols);
        }
        return rows;
    }
}