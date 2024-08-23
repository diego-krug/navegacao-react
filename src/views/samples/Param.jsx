import React from "react";
import { useParams } from "react-router-dom";

export default (props) => {
    const { id } = useParams();
    return (
        <div className="Param">
            <h1>Início</h1>
            <p>{id ? "Parametro Enviado: " + id : "Página sem parametro" }</p>
        </div>
    )
}