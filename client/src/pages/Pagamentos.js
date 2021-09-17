import React, { Fragment } from "react";
import InputPagamento from "../components/Pagamentos/inputPagamento";
import ListPagamentos from "../components/Pagamentos/listPagamento";

const Pagamentos = () => {
    return (
        <Fragment>
            <div className="container">
                <InputPagamento></InputPagamento>
                <ListPagamentos></ListPagamentos>
            </div>
        </Fragment>
    )
}

export default Pagamentos;
