import React from 'react'
import BookRow from '../BookRow.js'
import './index.css'
import {useCostumHooks} from '../../context'

const Book_Grid_View = () => {
    const {grid, books, showBookModal} = useCostumHooks()
    const setClass = () => {
        if(grid) return 'book_grid'
        return 'book_list'
    }
    if(books.length === 0) return <h1 className="no_book">No Book Found...</h1>
    return (
        <div className={setClass()}>
            {books.map((item, index) => (
                <BookRow key={index} item={item} index={index} showBookModal={showBookModal} />
            ))}
        </div>
    )
}

export default Book_Grid_View
