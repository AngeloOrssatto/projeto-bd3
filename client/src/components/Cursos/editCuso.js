import React, {Fragment, useState} from "react";

const EditCurso = ({curso}) => {

    const [nome, setNome] = useState(curso.nome)
    const [codigo_curso, setCodigo] = useState(curso.codigo_curso)
    const [valor_curso, setValor] = useState(curso.valor_curso)

    const updateNome = async (e) => {
        e.preventDefault()
        try {
            console.log(curso)
            const body = {nome, codigo_curso, valor_curso}
            const response = await fetch(`http://localhost:5000/curso/${curso.id}`, {
                method: 'PUT',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/curso"
            console.log(response)
        } catch (err) {
            console.log(err.message)
        }
    }

    return(
        <Fragment>
           <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target={`#id${curso.id}`}
            >
                Editar
            </button>
            <div
                className="modal"
                id={`id${curso.id}`}
                onClick={() => setNome(curso.nome)}
            >
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h4 className="modal-title">Editar curso</h4>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        onClick={() => setNome(curso.nome)}
                    >
                        &times;
                    </button>
                    </div>

                    <div className="modal-body">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Codigo"
                        value={codigo_curso}
                        onChange={e => setCodigo(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Valor"
                        value={valor_curso}
                        onChange={e => setValor(e.target.value)}
                    />
                    </div>

                    <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-warning"
                        data-dismiss="modal"
                        onClick={e => updateNome(e)}
                    >
                        Editar
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        data-dismiss="modal"
                        onClick={() => setNome(curso.nome)}
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

export default EditCurso;