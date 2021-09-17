import React, { Fragment, useState } from "react";
import DatePicker from "react-date-picker";
import TimePicker from 'react-time-picker'

const InputMatricula = () => {

    const [escola, setEscola] = useState("")
    const [aluno, setAluno] = useState("")
    const [professor, setProfessor] = useState("")
    const [curso, setCurso] = useState("")
    const [duracao_aula, setDuracaoAula] = useState('01:00')
    const [data_vencimento, onChangeDataVenc] = useState(new Date());
    const [horario, setHorario] = useState('')
    const [dia_semana, setDiaSemana] = useState("")
    const [quantidade_parcela, setQtdeParcela] = useState("")

    const onSubmitForm = async(e) => {
        e.preventDefault()
        try {
            const body = { escola, aluno, professor, curso, duracao_aula, data_vencimento, horario, dia_semana, quantidade_parcela }
            console.log(body)
            const response = await fetch("http://localhost:5000/matricula", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            window.location = "/matricula"
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <Fragment>
            <form className="mt-5" onSubmit={onSubmitForm}> 
                <h1 className="text-center mt-5">
                    Matrículas
                </h1>
                <div className="mb-1">
                    <input type="number" placeholder="Escola" className="form-control" value={escola} onChange={e => setEscola(e.target.value)}></input>
                    <input type="number" placeholder="Aluno" className="form-control" value={aluno} onChange={e => setAluno(e.target.value)}></input>
                    <input type="number" placeholder="Professor" className="form-control" value={professor} onChange={e => setProfessor(e.target.value)}></input>
                </div>
                <div className="d-flex column mb-1">
                    <input type="number" placeholder="Curso" className="form-control" value={curso} onChange={e => setCurso(e.target.value)}></input>
                    <input type="text" placeholder="Duração da aula" className="form-control" value={duracao_aula} onChange={e => setDuracaoAula(e.target.value)}></input>
                    <DatePicker value={data_vencimento} onChange={onChangeDataVenc}></DatePicker>
                </div>
                <div className="d-flex column mb-1">
                    <TimePicker value={horario} onChange={setHorario}></TimePicker>
                    <input type="number" placeholder="Dia semana" className="form-control" value={dia_semana} onChange={e => setDiaSemana(e.target.value)}></input>
                    <input type="number" placeholder="Qtde parcelas" className="form-control" value={quantidade_parcela} onChange={e => setQtdeParcela(e.target.value)}></input>
                </div>
                <button className="btn btn-success mt-4">Adicionar</button>
            </form>
        </Fragment>
    )
}

export default InputMatricula;