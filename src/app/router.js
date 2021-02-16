import React from 'react'
import {Router} from '@reach/router'
import Errors from '../pages/404'
import HomePage from '../pages/home'


function AppRouter() {
    return (
        <Router>
            <HomePage path='/' />
            <Errors default />
        </Router>
    )
}

export default AppRouter
