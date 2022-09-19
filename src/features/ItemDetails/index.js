import React from 'react'
import { connect } from 'react-redux'

const ItemDetails = (props) => {
    const { items, selectedItemIndex } = props
    const selectedItem = items[selectedItemIndex]
    return (<div className='itemDetails'>
        {selectedItemIndex === false ?
            <div className='loading'>Loading...</div>
            :
            <>
                <div className='details'>
                    <img className='image' src={selectedItem.image} />
                    <h2 className='title'>{selectedItem.title}</h2>
                    <p className='subtitle'>{selectedItem.subtitle}</p>
                </div>
                <div className='tags'>
                    {selectedItem.tags.map((tag, idx) => {
                        return (<div key={idx} className='tag'>
                            <p>{tag}</p>
                        </div>)
                    })}
                </div>
            </>
            }
    </div>)
}

const mapStateToProps = (state) => {
    return {
        items: state.itemReducer.items,
        selectedItemIndex: state.itemReducer.selectedItemIndex
    }
}

export default connect(mapStateToProps)(ItemDetails)
