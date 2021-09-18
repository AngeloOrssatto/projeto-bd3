import React, { Fragment, useState } from "react";
import DatePicker from "react-date-picker";

const InputAula = () => {

    const [id_matricula, setIDMatricula] = useState("");
    const [data_aula, setDataAula] = useState(new Date())
    const [status, setStatus] = useState(true);

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { id_matricula, data_aula, status }
            console.log(body)
            const response = await fetch("http://localhost:5000/aula", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            window.location = "/aula"
            console.log(response)
        } catch (err) {
            console.log(err.message)
        }
    }

    return(
        <Fragment>
            <form className="mt-5" onSubmit={onSubmitForm}> 
                <h1 className="text-center mt-5">
                    Aulas
                </h1>
                <div className="mb-1 d-flex column">
                    <input 
                        type="number" 
                        placeholder="ID Matricula" 
                        className="form-control" 
                        value={id_matricula}
                        onChange={e => setIDMatricula(e.target.value)} 
                    />
                   <DatePicker 
                        value={data_aula} 
                        onChange={setDataAula}
                    >
                    </DatePicker>
                    <input 
                        type="text" 
                        placeholder="Presença / Falta" 
                        className="form-control" 
                        value={status}
                        onChange={e => setStatus(e.target.value)}
                    />
                </div>
               
                <button className="btn btn-success mt-4">Adicionar</button>
            </form>
        </Fragment>
    )
}

export default InputAula;