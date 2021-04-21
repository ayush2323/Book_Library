import React from 'react'
import './index.css'
import play_icon from '../../Images/play_icon.png'
import counter_badge from '../../Images/Counter_badge.png'
import plus_icon from '../../Images/plus_icon.png'
import dark_mode_icon from '../../Images/dark_mode_icon.png'
import toggle_icon1 from '../../Images/Toggle_icon1.png'
import toggle_icon2 from '../../Images/Toggle_icon2.png'
import {useCostumHooks} from '../../context'

const LeftWrapper = () => {
    const {toggleDarkMode, darkMode} = useCostumHooks()
    const textColor = () => {
        if(darkMode) return "#fff"
    }
    return (
        <div style={{width: '15%'}} className="left_Navigation">
            <p style={{color: textColor()}} className="library_text">Library</p>
            <div className="left_navigation_option">
                    <img className="play_icon" src={play_icon} alt="play_icon" />
                    <span style={{color: textColor()}} className="my_book">My Book</span>
                    <img className="counter_badge" src={counter_badge} alt="counter_badge"></img>
            </div>
            <div className="second_left_navigation_option">
                    <img className="plus_icon" src={plus_icon} alt="play_icon" />
                    <span style={{color: textColor()}} className="new_book">Add New Book</span>
                    <img className="hidden" src={counter_badge} alt="hidden text"></img>
            </div>
            <span className="settings">Settings</span>
            <div onClick={toggleDarkMode} className="toggle_mode">
                <img src={dark_mode_icon} alt="dark mode" className="dark_mode"/>
                <span style={{color: textColor()}} className="dark">Dark Mode</span>
                <div className="toggleButton">
                    <img src={toggle_icon1} alt="icon1" className="icon1"/>
                    <img src={toggle_icon2} alt="icon2" className="icon2"/>
                </div>
            </div>
        </div>
    )
}

export default LeftWrapper
