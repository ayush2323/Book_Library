import React from 'react'
import './index.css'
import more_icon from '../../Images/more_option_icon.png'
import grid_icon from '../../Images/grid_view_icon.png'
import list_icon from '../../Images/list_view_icon.png'
import search_icon from '../../Images/search_icon.png'
import close_icon from '../../Images/close_icon.png'
import { useCostumHooks } from '../../context'

const Navbar = () => {
    const { showGridView, showListView, search, toggleSearchOption, searchInput, searchInputHandler, closeSearch, darkMode } = useCostumHooks()

    const textColor = () => {
        if (darkMode) return "#fff"
    }

    const toggleSearchBar = () => {
        if (!search) {
            return (
                <div>
                    <div className="navigation_icon_button">
                        <div onClick={showGridView} className="grid_view_button">
                            <img src={grid_icon} alt="grid view" className="grid_view_icon" />
                        </div>
                        <div onClick={showListView} className="list_view_button">
                            <img src={list_icon} alt="list view" className="list_view_icon" />
                        </div>
                    </div>
                    <div onClick={toggleSearchOption} className="search_icon_button">
                        <img src={search_icon} alt="search icon" className="search_icon" />
                    </div>
                </div>

            )
        } else {
            return (
                <div>
                    <div style={{ left: '682px' }} className="navigation_icon_button_search_open">
                        <div onClick={showGridView} className="grid_view_button">
                            <img src={grid_icon} alt="grid view" className="grid_view_icon" />
                        </div>
                        <div onClick={showListView} className="list_view_button">
                            <img src={list_icon} alt="list view" className="list_view_icon" />
                        </div>
                    </div>
                    <div className="search_bar">
                        <div className="search_bar_container">
                            {/* <div className="search_icon_btn"> */}
                            <img src={search_icon} alt="" className="search" />
                            {/* </div> */}
                            <input className="input" value={searchInput} onChange={searchInputHandler} />
                            {/* <div className="close_icon_btn"> */}
                            <img onClick={closeSearch} src={close_icon} alt="" className="close_icon" />
                            {/* </div> */}
                        </div>
                    </div>
                </div>

            )
        }
    }
    return (
        <div className="navbar_container">
            <div className="screen_title">
                {/* <div className="icon_button"> */}
                <span style={{ color: textColor() }} className="title">Book Library</span>
                <img src={more_icon} alt="more option" className="more_icon" />
                {/* </div> */}
            </div>
            {toggleSearchBar()}
            <div className="dividing_line"></div>
        </div>
    )
}

export default Navbar
