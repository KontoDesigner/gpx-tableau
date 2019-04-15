import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import moment from 'moment'

const isFirstColumn = params => {
    const displayedColumns = params.columnApi.getAllDisplayedColumns()

    const thisIsFirstColumn = displayedColumns[0] === params.column

    return thisIsFirstColumn
}

const uniqueArray = arrArg => {
    return arrArg.filter((elem, pos, arr) => {
        return arr.indexOf(elem) == pos
    })
}

const Table = props => {
    const cellRenderer = function(params) {
        if (params.column && params.column.colDef && params.column.colDef.type === 'datetime' && params.column.colDef.format) {
            return moment(params.value).format(params.column.colDef.format)
        }

        return params.value
    }

    const columnDefs = props.columns.map(c => {
        const checkbox = props.checkbox === true && isFirstColumn

        return {
            headerName: c.label,
            field: c.dataKey,
            resizable: true,
            checkboxSelection: checkbox,
            headerCheckboxSelection: checkbox,
            headerCheckboxSelectionFilteredOnly: checkbox,
            cellRenderer: cellRenderer,
            sortable: true,
            type: c.type,
            format: c.format
        }
    })

    const height = 49 + props.list.length * 28
    const defaultMaxTableHeight = props.maxTableHeight ? props.maxTableHeight : 550
    const tableHeight = height > defaultMaxTableHeight ? defaultMaxTableHeight : height

    const onRowSelected = event => {
        const rowSelected = event.node.selected
        const value = event.data[props.identifier]

        let selected = Object.assign([], props.selected)

        const index = selected.indexOf(value)

        if (rowSelected && index === -1) {
            selected.push(value)
        } else {
            selected.splice(index, 1)
        }

        const uniqueSelected = uniqueArray(selected)

        props.updateSelectedState(uniqueSelected)
    }

    const onRowClicked = params => {
        if (props.edit) {
            props.edit(params.data)
        }
    }

    return (
        <div
            className="ag-theme-balham"
            style={{
                height: `${tableHeight}px`,
                width: '100%',
                maxHeight: '100%'
            }}>
            <AgGridReact
                columnDefs={columnDefs}
                rowData={props.list}
                getContextMenuItems={props.contextMenuItems}
                suppressNoRowsOverlay={true}
                suppressCellSelection={true}
                suppressScrollOnNewData={true}
                onRowSelected={onRowSelected}
                rowSelection={'multiple'}
                onRowClicked={e => onRowClicked(e)}
                suppressRowClickSelection={true}
            />
        </div>
    )
}

export default Table
