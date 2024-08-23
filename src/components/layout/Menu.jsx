import React from "react";
import './Menu.css'
import { Link } from 'react-router-dom'

export default (props) => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/param/123">Param #1</Link></li>
                    <li><Link to="/param">Param #2</Link></li>
                    <li><Link to="/123321">Not Found</Link></li>
                </ul>
            </nav>
        </aside>
    )
}