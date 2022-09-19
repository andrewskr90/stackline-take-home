import React from 'react'
import { connect } from 'react-redux'
import { setDataType } from '../../actions'

const ChartDataSelector = (props) => {
    const { items, setDataType } = props

    const selectDataType = (e) => {
        setDataType(e.target.value)
    }

    const selectionKeys = {
        retailSales: 'Retail Sales',
        wholesaleSales: 'Wholesale Sales',
        unitsSold: 'Units Sold',
        retailerMargin: 'Retailer Margin'
    }

    return (<div className='chartDataSelector'>
        <select onChange={selectDataType}>
            {Object.keys(items[0].sales[0]).filter(key => key !== 'weekEnding')
                .map(key => {
                    return <option key={key} value={key}>{selectionKeys[key]}</option>
                })}
        </select>
    </div>)
}

const mapStateToProps = (state) => {
    return {
        items: state.itemReducer.items
    }
}

export default connect(mapStateToProps, { setDataType })(ChartDataSelector)
