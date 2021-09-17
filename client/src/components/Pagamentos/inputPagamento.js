import React, { Fragment, useState } from "react";
import DatePicker from "react-date-picker";

const InputPagamento = () => {

    const [matricula, setMatricula] = useState();
    const [valor_parcela, setValor] = useState();
    const [acrescimo, setAcrescimo] = useState();
    const [desconto, setDesconto] = useState();
    const [numero_parcela, setNumeroParcela] = useState();
    const [data_pagamento, setDataPgto] = useState(new Date())

    const onSubmitForm = async (e) => {
        e.preventDefault()

        try {
            const body = { matricula, valor_parcela, acrescimo, desconto, numero_parcela, data_pagamento }
            console.log(body)
            const response = await fetch("http://localhost:5000/pagamento", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            window.location = "/pagamento"
            console.log(response)
        } catch (err) {
            console.log(err)
        }

    }

    return(
        <Fragment>
            <form className="mt-5" onSubmit={onSubmitForm}> 
                <h1 className="text-center mt-5">
                    Pagamentos
                </h1>
                <div className="mb-1 d-flex column">
                    <input 
                        type="number" 
                        placeholder="Matricula" 
                        className="form-control" 
                        value={matricula}
                        onChange={e => setMatricula(e.target.value)} 
                    />
                    <input 
                        type="number" 
                        placeholder="Valor" 
                        className="form-control" 
                        value={valor_parcela}
                        onChange={e => setValor(e.target.value)}
                    />
                </div>
                <div className="d-flex column mb-1">
                    <input 
                        type="number" 
                        placeholder="Acrescimos" 
                        className="form-control" 
                        value={acrescimo}
                        onChange={e => setAcrescimo(e.target.value)}
                    />
                    <input 
                        type="number" 
                        placeholder="Descontos" 
                        className="form-control"
                        value={desconto}
                        onChange={e => setDesconto(e.target.value)} 
                    />
                    <input 
                        type="number" 
                        placeholder="Nº da parcela" 
                        className="form-control" 
                        value={numero_parcela}
                        onChange={e => setNumeroParcela(e.target.value)}    
                    />
                    <DatePicker 
                        value={data_pagamento} 
                        onChange={setDataPgto}
                    >
                    </DatePicker>
                </div>
                <button className="btn btn-success mt-4">Adicionar</button>
            </form>
        </Fragment>
    );
}

export default InputPagamento;