import React from 'react'
import { connect } from 'react-redux'
import ItemTable from './ItemTable'

const TableSection = (props) => {
const { items, selectedItemIndex } = props
const selectedItem = items[selectedItemIndex]

    return (<div className='tableSection'>
        {selectedItemIndex === false
        ?
        <div className='loading'>Loading...</div>
        :
        <>
            <ItemTable />
        </>}

    </div>)
}

const mapStateToProps = (state) => {
    return {
        items: state.itemReducer.items,
        selectedItemIndex: state.itemReducer.selectedItemIndex
    }
}

export default connect(mapStateToProps)(TableSection)