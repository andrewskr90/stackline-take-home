import React from 'react'
import ItemDetails from '../features/ItemDetails'
import ChartSection from '../features/ItemChart'
import TableSection from '../features/ItemTable'

const ItemPage = () => {
    return (<div className='itemPage'>
        <ItemDetails />
        <div className='itemData'>
            <ChartSection />
            <TableSection />
        </div>
    </div>)
}

export default ItemPage
