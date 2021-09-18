import React, { Fragment, useState } from "react";

const InputCurso = () => {

    const [nome, setNome] = useState("");
    const [codigo_curso, setCodigo] = useState("");
    const [valor_curso, setValor] = useState("");
    const [id_professor, setIDProf] = useState("")

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {nome, codigo_curso, valor_curso, id_professor}
            console.log(body)
            const response = await fetch("http://localhost:5000/curso", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            window.location = "/curso"
            console.log(response)
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">
                Lista de cursos
            </h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}> 
                <input type="text" placeholder="Nome" className="form-control" value={nome} onChange={e => setNome(e.target.value)}></input>
                <input type="text" placeholder="Codigo" className="form-control" value={codigo_curso} onChange={ev => setCodigo(ev.target.value)}></input>
                <input type="text" placeholder="Valor" className="form-control" value={valor_curso} onChange={evn => setValor(evn.target.value)}></input>
                <input type="text" placeholder="Professor" className="form-control" value={id_professor} onChange={e => setIDProf(e.target.value)}></input>
                <button className="btn btn-success">Adicionar</button>
            </form>
        </Fragment>
    )
};

export default InputCurso;