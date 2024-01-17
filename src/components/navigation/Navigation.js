import React from 'react'
import './navigation.css'
import { Link } from 'react-router-dom'

function Navigation(props) {
    return (
        <div className="navbarCart">
            <span>
                <Link to="/">Home&nbsp;&nbsp;&nbsp;</Link>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                &nbsp;&nbsp;&nbsp;
                <Link>{props.page}</Link>
            </span>
        </div>
    )
}

export default Navigation