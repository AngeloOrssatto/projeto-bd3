import React, {Fragment, useState} from "react";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";

const EditMatricula = ({matricula}) => {
    
    const [escola, setEscola] = useState(matricula.id_escola);
    const [aluno, setAluno] = useState(matricula.id_aluno);
    const [professor, setProfessor] = useState(matricula.id_professor);
    const [curso, setCurso] = useState(matricula.id_curso);
    //const [duracao_aula, setDuracaoAula] = useState(matricula.duracao_aula);
    const [data_vencimento, onChangeDataVenc] = useState(matricula.data_vencimento);
    const [horario, setHorario] = useState(matricula.horario);
    const [dia_semana, setDiaSemana] = useState(matricula.dia_semana);
    const [quantidade_parcela, setQtdeParcela] = useState(matricula.quantidade_parcela);

    console.log(escola, aluno, professor, curso, data_vencimento, horario, dia_semana, quantidade_parcela)

    const updateMatricula = async (e) => {
        e.preventDefault();
        try {
            const body = { escola, aluno, professor, curso, data_vencimento, horario, dia_semana, quantidade_parcela };
            
            const response = await fetch(`http://localhost:5000/matricula/${matricula.id}`,
            {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = "/matricula";
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
                data-target={`#id${matricula.id}`}
            >
                Editar
            </button>
            <div
                className="modal"
                id={`id${matricula.id}`}
                // onClick={() => setNome(matricula.nome)}
            >
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h4 className="modal-title">Editar matricula</h4>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        // onClick={() => setNome(matricula.nome)}
                    >
                        &times;
                    </button>
                    </div>

                    <div className="modal-body">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Escola"
                        value={escola}
                        onChange={e => setEscola(e.target.value)}
                    />
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Aluno"
                        value={aluno}
                        onChange={e => setAluno(e.target.value)}
                    />
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Professor"
                        value={professor}
                        onChange={e => setProfessor(e.target.value)}
                    />
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Curso"
                        value={curso}
                        onChange={e => setCurso(e.target.value)}
                    />
                    {/* <input
                        type="text"
                        className="form-control"
                        placeholder="Duração da aula"
                        value={duracao_aula}
                        onChange={e => setDuracaoAula(e.target.value)}
                    /> */}
                    <DatePicker
                        value={data_vencimento}
                        onChange={onChangeDataVenc}
                    />
                    <TimePicker
                        value={horario}
                        onChange={setHorario}
                    />
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Dia da semana"
                        value={dia_semana}
                        onChange={e => setDiaSemana(e.target.value)}
                    />
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Qtde parcelas"
                        value={quantidade_parcela}
                        onChange={e => setQtdeParcela(e.target.value)}
                    />
                    </div>

                    <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-warning"
                        data-dismiss="modal"
                        onClick={e => updateMatricula(e)}
                    >
                        Editar
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        data-dismiss="modal"
                        //onClick={() => setNome(aluno.nome)}
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

export default EditMatricula;