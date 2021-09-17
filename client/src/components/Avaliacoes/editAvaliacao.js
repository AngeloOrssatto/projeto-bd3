import React, { Fragment, useState } from "react";
import DatePicker from "react-date-picker";

const EditAvaliacao = ({avaliacao}) => {

    const [id_aluno, setIDAluno] = useState(avaliacao.id_aluno);
    const [nota, setNota] = useState(avaliacao.nota);
    const [observacao, setObs] = useState(avaliacao.observacao);
    const [data_avaliacao, setDataAvaliacao] = useState(avaliacao.data_avaliacao)

    const updateAvaliacao = async(e) => {
        e.preventDefault();
        try {
            const body = { id_aluno, nota, observacao, data_avaliacao };
            console.log(body);
            const response = await fetch(`http://localhost:5000/avaliacao/${avaliacao.id}`,
            {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = "/avaliacao";
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
                data-target={`#id${avaliacao.id}`}
            >
                Editar
            </button>
            <div
                className="modal"
                id={`id${avaliacao.id}`}
            >
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h4 className="modal-title">Editar avaliacao</h4>
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
                        placeholder="ID Aluno"
                        value={id_aluno}
                        onChange={e => setIDAluno(e.target.value)}
                    />
                    <input
                        type="numver"
                        className="form-control"
                        placeholder="Nota"
                        value={nota}
                        onChange={e => setNota(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Observação"
                        value={observacao}
                        onChange={e => setObs(e.target.value)}
                    />
                    <DatePicker
                        value={data_avaliacao}
                        onChange={setDataAvaliacao}
                    />
                    </div>

                    <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-warning"
                        data-dismiss="modal"
                        onClick={e => updateAvaliacao(e)}
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

export default EditAvaliacao;