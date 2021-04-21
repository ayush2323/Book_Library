import React from 'react'
import LeftWrapper from './Components/LeftWrapper.js'
import RightWrapper from './Components/RightWrapper.js'
import './App.css'
import {useCostumHooks} from './context.js'

function App() {
    const {darkMode} = useCostumHooks()

    const darkModeContainer = () => {
        if(!darkMode) return "container"
        return "container_dark"
    }

    return (
        <main>
            <section className={darkModeContainer()}>
                <LeftWrapper />
                <div className="vertical_dividor"></div>
                <RightWrapper />
            </section>
        </main>
    )
}

export default App;