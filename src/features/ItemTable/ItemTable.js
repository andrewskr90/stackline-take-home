import React from 'react'
import { connect } from 'react-redux'


const ItemTable = (props) => {
    const { items, selectedItemIndex } = props
    
    return(<table className='itemTable'>
        <tr>
            <th>WEEK ENDING</th>
            <th>RETAIL SALES</th>
            <th>WHOLESALE SALES</th>
            <th>UNITS SOLD</th>
            <th>RETAILER MARGIN</th>
        </tr>
        {items[selectedItemIndex].sales.map(sale => {
            return (<tr className='dataRow'>
                <td>{sale.weekEnding}</td>
                <td>{sale.retailSales}</td>
                <td>{sale.wholesaleSales}</td>
                <td>{sale.unitsSold}</td>
                <td>{sale.retailerMargin}</td>
            </tr>)
        })}
    </table>)
}

const mapStateToProps = (state) => {
    return {
        items: state.itemReducer.items,
        selectedItemIndex: state.itemReducer.selectedItemIndex
    }
}

export default connect(mapStateToProps)(ItemTable)