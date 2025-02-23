import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Join}></Route>
                <Route path="/chat" Component={Chat}></Route>
            </Routes>
        </Router>
    )
}

export default App