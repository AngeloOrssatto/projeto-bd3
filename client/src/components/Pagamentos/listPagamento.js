import React, { Fragment, useState, useEffect } from "react";

import EditPagamento from "./editPagamento";

const ListPagamentos = () => {

    const [pagamentos, setPagamentos] = useState([]);

    const deletePagamento = async (id) => {
        try {
            await fetch(`http://localhost:5000/pagamento/${id}`, {
                method: "DELETE"
            });
            setPagamentos(pagamentos.filter(pagamento => pagamento.id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getPagamentos = async () => {
        try {
            const response = await fetch("http://localhost:5000/pagamento");
            const jsonData = await response.json();
            console.log(jsonData);
            setPagamentos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getPagamentos()
    }, [])

    return(
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Matricula</th>
                        {/* <th>Aluno</th> */}
                        <th>Valor</th>
                        <th>Desconto</th>
                        <th>Acrescimo</th>
                        <th>Data Pagamento</th>
                        <th>Nº da Parcela</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {pagamentos.map(pagamento => (
                        <tr key={pagamento.id}>
                        <td>{pagamento.id_matricula}</td>
                        <td>R$ {pagamento.valor_parcela}</td>
                        <td>R$ {pagamento.desconto}</td>
                        <td>R$ {pagamento.acrescimo}</td>
                        <td>{pagamento.data_pagamento}</td>
                        <td>{pagamento.numero_parcela}</td>
                    
                        <td>
                            
                            <EditPagamento pagamento={pagamento}/>
                        </td>
                        <td>
                            <button
                                className="btn btn-danger"
                                onClick={() => deletePagamento(pagamento.id)}
                            >
                            Deletar
                            </button>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )

}

export default ListPagamentos;