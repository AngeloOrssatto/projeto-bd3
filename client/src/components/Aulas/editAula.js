import React, { Fragment, useState } from "react";
import DatePicker from "react-date-picker";

const EditAula = ({aula}) => {

    const [id_matricula, setIDMatricula] = useState(aula.id_matricula);
    const [data_aula, setDataAula] = useState(aula.data_aula)
    const [status, setStatus] = useState(aula.status);

    const updateAvaliacao = async(e) => {
        e.preventDefault();
        try {
            const body = { id_matricula, data_aula, status };
            console.log(body);
            const response = await fetch(`http://localhost:5000/aula/${aula.id}`,
            {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = "/aula";
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
                data-target={`#id${aula.id}`}
            >
                Editar
            </button>
            <div
                className="modal"
                id={`id${aula.id}`}
            >
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h4 className="modal-title">Editar aula</h4>
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
                        placeholder="ID Matricula"
                        value={id_matricula}
                        onChange={e => setIDMatricula(e.target.value)}
                    />
                    <DatePicker
                        value={data_aula}
                        onChange={setDataAula}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Presença / Falta"
                        value={status}
                        onChange={e => setStatus(e.target.value)}
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

export default EditAula;