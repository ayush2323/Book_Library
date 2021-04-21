import React from 'react'
import Navbar from '../Navbar.js'
import BookGrid from '../Book_Grid_View'
import data from '../../data'
import './index.css'

const index = () => {
    console.log(data)
    return (
        <div className="right_container">
            <Navbar />
            <BookGrid />
        </div>
    )
}

export default index
