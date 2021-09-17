import React, { Fragment, useState } from "react";
import DatePicker from "react-date-picker";

const InputAvaliacao = () => {

    const [id_aluno, setIDAluno] = useState();
    const [nota, setNota] = useState();
    const [observacao, setObs] = useState();
    const [data_avaliacao, setDataAvaliacao] = useState(new Date())

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { id_aluno, nota, observacao, data_avaliacao }
            console.log(body)
            const response = await fetch("http://localhost:5000/avaliacao", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            window.location = "/avaliacao"
            console.log(response)
        } catch (err) {
            console.log(err.message)
        }
    }

    return(
        <Fragment>
            <form className="mt-5" onSubmit={onSubmitForm}> 
                <h1 className="text-center mt-5">
                    Avaliações
                </h1>
                <div className="mb-1 d-flex column">
                    <input 
                        type="number" 
                        placeholder="ID Aluno" 
                        className="form-control" 
                        value={id_aluno}
                        onChange={e => setIDAluno(e.target.value)} 
                    />
                    <input 
                        type="number" 
                        placeholder="Nota" 
                        className="form-control" 
                        value={nota}
                        onChange={e => setNota(e.target.value)}
                    />
                </div>
                <div className="d-flex column mb-1">
                    <input 
                        type="text" 
                        placeholder="Observações" 
                        className="form-control" 
                        value={observacao}
                        onChange={e => setObs(e.target.value)}
                    />
                    <DatePicker 
                        value={data_avaliacao} 
                        onChange={setDataAvaliacao}
                    >
                    </DatePicker>
                </div>
                <button className="btn btn-success mt-4">Adicionar</button>
            </form>
        </Fragment>
    )
}

export default InputAvaliacao;