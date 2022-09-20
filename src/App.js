import React, { useEffect } from 'react'
import axios from 'axios'
import { createServer } from 'miragejs'
import { connect } from 'react-redux'
import { setItemIndex, saveItems, setDataType } from './actions'
import Header from './layouts/Header'
import ItemPage from './pages/ItemPage'
import items from './data/stackline_frontend_assessment_data_2021.json'
import './App.css'

//mock api serving item
createServer({
    routes() {
        this.get('/api/items', () => items)
    }
})

const App = (props) => {
  const { saveItems, setItemIndex, setDataType } = props

  useEffect(() => {
    axios.get('/api/items')
      .then(res => {
        if (res.data.length > 0) {
          saveItems(res.data)
          setItemIndex(0)
          setDataType(Object.keys(res.data[0].sales[0])[1])
        }
      })
  }, [])

  return (<div className='app'>
    <Header />
    <ItemPage />
  </div>)
}

export default connect(null, { saveItems, setItemIndex, setDataType })(App);
