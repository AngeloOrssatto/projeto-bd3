import React, { Fragment, useState } from "react";
import DatePicker from "react-date-picker";

const EditBoletim = ({boletim}) => {

    const [id_aluno, setIDAluno] = useState(boletim.id_aluno);
    const [nota_final, setNota] = useState(boletim.nota_final);
    const [observacao, setObs] = useState(boletim.observacao);
    const [data_emissao, setDataEmissao] = useState(boletim.data_emissao)

    const updateAvaliacao = async(e) => {
        e.preventDefault();
        try {
            const body = { id_aluno, nota_final, observacao, data_emissao };
            console.log(body);
            const response = await fetch(`http://localhost:5000/boletim/${boletim.id}`,
            {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = "/boletim";
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
                data-target={`#id${boletim.id}`}
            >
                Editar
            </button>
            <div
                className="modal"
                id={`id${boletim.id}`}
            >
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h4 className="modal-title">Editar boletim</h4>
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
                        value={nota_final}
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
                        value={data_emissao}
                        onChange={setDataEmissao}
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

export default EditBoletim;