import React, { Fragment } from "react";
import InputAvaliacao from "../components/Avaliacoes/inputAvaliacao";
import ListAvaliacao from "../components/Avaliacoes/listAvaliacao";

const Avaliacoes = () => {
    return (
        <Fragment>
            <div className="container">
                <InputAvaliacao></InputAvaliacao>
                <ListAvaliacao></ListAvaliacao>
            </div>
        </Fragment>
    )
}

export default Avaliacoes;
