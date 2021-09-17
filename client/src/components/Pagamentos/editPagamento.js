import React, {Fragment, useState} from "react";
import DatePicker from "react-date-picker";

const EditPagamento = ({pagamento}) => {

    const [id_matricula, setMatricula] = useState(pagamento.id_matricula);
    const [valor_parcela, setValor] = useState(pagamento.valor_parcela);
    const [acrescimo, setAcrescimo] = useState(pagamento.acrescimo);
    const [desconto, setDesconto] = useState(pagamento.desconto);
    const [numero_parcela, setNumeroParcela] = useState(pagamento.numero_parcela);
    const [data_pagamento, setDataPgto] = useState(pagamento.data_pagamento)

      //edit function
      const updatePagamento = async(e) => {
        e.preventDefault();
        try {
            const body = { id_matricula, valor_parcela, acrescimo, desconto, numero_parcela, data_pagamento };
            console.log(body);
            const response = await fetch(`http://localhost:5000/pagamento/${pagamento.id}`,
            {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = "/pagamento";
        } catch (err) {
            console.error(err.message);
        }
    }

    return(
        <Fragment>
            <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target={`#id${pagamento.id}`}
            >
                Editar
            </button>
            <div
                className="modal"
                id={`id${pagamento.id}`}
            >
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h4 className="modal-title">Editar pagamento</h4>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                    >
                        &times;
                    </button>
                    </div>

                    <div className="modal-body">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Matricula"
                        value={id_matricula}
                        onChange={e => setMatricula(e.target.value)}
                    />
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Valor"
                        value={valor_parcela}
                        onChange={e => setValor(e.target.value)}
                    />
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Desconto"
                        value={desconto}
                        onChange={e => setDesconto(e.target.value)}
                    />
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Acrescimo"
                        value={acrescimo}
                        onChange={e => setAcrescimo(e.target.value)}
                    />
                    
                    <DatePicker
                        value={data_pagamento}
                        onChange={setDataPgto}
                    />
                    
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Nº parcela"
                        value={numero_parcela}
                        onChange={e => setNumeroParcela(e.target.value)}
                    />
                    
                    </div>

                    <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-warning"
                        data-dismiss="modal"
                        onClick={e => updatePagamento(e)}
                    >
                        Editar
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        data-dismiss="modal"
                    >
                        Fechar
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditPagamento;