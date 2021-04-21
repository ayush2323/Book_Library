import React, { useState, useContext, useEffect   } from 'react'
import Data from './data'
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [grid, setGrid] = useState(true)
    const [search, showSearch] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const [books, setBooks] = useState(Data)

    const showGridView = () => {
        setGrid(true)
    }

    const showListView = () => {
        setGrid(false)
    }

    const toggleDarkMode = () => {
        console.log("toggleDarkMode")
        setDarkMode(!darkMode)
    }

    const searchInputHandler = (e) => {
        console.log(e.target.value)
        setSearchInput(e.target.value)
    }

    const filterData = () => {
        const newBook = Data.filter(book => {
            if(book.title.includes(searchInput)) return book
        })
        setBooks(newBook)
    }

    const toggleSearchOption = () => {
        showSearch(!search)
    }

    const closeSearch = () => {
        showSearch(false)
    }

    useEffect(() => {
        filterData()
    }, [searchInput])

    return (
        <AppContext.Provider value={{showGridView, showListView, grid, books, search, showSearch, searchInput, searchInputHandler, toggleSearchOption, closeSearch, darkMode, toggleDarkMode}}>{children}</AppContext.Provider>
    )
}

export const useCostumHooks = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider}