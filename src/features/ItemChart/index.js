import React from 'react'
import { connect } from 'react-redux'
import ChartDataSelector from './ChartDataSelector'
import ItemChart from './ItemChart'
import ChartLabels from './ChartLabels'

const ChartSection = (props) => {
    const { selectedItemIndex } = props

    return (<div className='itemChartSection'>
        {selectedItemIndex === false
        ?
        <div className='loading'>
            Loading...
        </div>
        :
        <>
            <ChartDataSelector />
            <ItemChart />
            <ChartLabels />
        </>}
    </div>)
}

const mapStateToProps = (state) => {
    return {
        selectedItemIndex: state.itemReducer.selectedItemIndex
    }
}

export default connect(mapStateToProps)(ChartSection)
