import React from 'react'
import { connect } from 'react-redux'
import { Line } from 'react-chartjs-2'
import ChartJS from 'chart.js/auto'
import { months } from '../../data/months'


const ItemChart = (props) => {
    const { items, selectedItemIndex, selectedDataType } = props
    
    const getUniqueMonths = (sales) => {
        let current = 0
        const uniqueMonths = sales.map(sale => {
            let date = parseInt(sale.weekEnding.split('-')[1])

            if (current !== date) {
                current = date
                return months[date]
            }
            return
        })
        return uniqueMonths
    }
    
    return (<div className='itemChart'>
        <Line 
            datasetIdKey={items[selectedItemIndex].id || 'id'}
            data={{
                labels: getUniqueMonths(items[selectedItemIndex].sales),
                datasets: [{
                    id: selectedDataType,
                    label: selectedDataType,
                    data: items[selectedItemIndex].sales.map(sale => sale[selectedDataType]),
                    spanGaps: true,
                    tension: 0.3,
                    radius: 0,
                    borderColor: 'rgb(18, 139, 237)',
                    borderWidth: '4'
                    
                    // color: 'rgb(11, 113, 196)'
                },
                {
                    id: selectedDataType,
                    label: selectedDataType,
                    data: items[selectedItemIndex].sales.map(sale => {
                        return sale[selectedDataType] /2
                    }),
                    spanGaps: true,
                    tension: 0.4,
                    radius: 0,
                    borderColor: 'rgba(128, 128, 128, 0.478)',
                    borderWidth: '4'
                    
                    // color: 'rgb(11, 113, 196)'
                }],
            }}
            options={{
                plugins: {
                    legend: { display: false },
                },
                maintainAspectRatio: false,
                scales: {
                    y: {
                            grid: {
                                display: false,
                                drawBorder: false
                            },
                            ticks: {
                                display: false
                            }
                        },
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: false
                        }
                    }
                }
            }}
        />
    </div>)
}

const mapStateToProps = (state) => {
    return {
        items: state.itemReducer.items,
        selectedItemIndex: state.itemReducer.selectedItemIndex,
        selectedDataType: state.itemReducer.selectedDataType
    }
}

export default connect(mapStateToProps)(ItemChart)
