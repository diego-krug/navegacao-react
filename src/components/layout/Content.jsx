import React from "react";
import './Content.css'
import { Routes, Route } from 'react-router-dom'

import About from '../../views/samples/About'
import Home from '../../views/samples/Home'
import Param from '../../views/samples/Param'
import NotFound from "../../views/samples/NotFound";

export default (props) => {
    return (
        <main className="Content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/param/:id" element={<Param />} />
                <Route path="/param" element={<Param />} />
                <Route path="*" element={<NotFound />} />               
            </Routes>
        </main>
    )
}