import React from 'react'
import { months } from '../../data/months'

const ChartLabels = (props) => {
    return (<div className='chartLabels'>
        {months.filter(month => {
            if (month !== 'MONTHS') {
                return month
            }
        }).map(month => {
            return <p className='chartLabel'>
                {month}
            </p>
        })}
    </div>)
}

export default ChartLabels
