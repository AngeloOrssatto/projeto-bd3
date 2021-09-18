import React, { Fragment } from "react";
import InputAula from "../components/Aulas/inputAula";
import ListAula from "../components/Aulas/listAula";

const Avaliacoes = () => {
    return (
        <Fragment>
            <div className="container">
                <InputAula></InputAula>
                <ListAula></ListAula>
            </div>
        </Fragment>
    )
}

export default Avaliacoes;