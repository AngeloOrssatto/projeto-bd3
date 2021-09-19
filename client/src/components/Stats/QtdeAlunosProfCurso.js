import React, { Fragment, useEffect, useState } from "react";

const QtdeAlunosProfCurso = () => {

    const [qtdeAlunosProfCurso, setQtde] = useState([])
    
    const getAlunosProfCurso = async()  => {
        try {
            const response = await fetch("http://localhost:5000/stats/alunos-prof-curso");
            const jsonData = await response.json();
            console.log(jsonData);
            setQtde(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        getAlunosProfCurso();
    },[]);

    return(
        <Fragment>
            <h4 className="m-3">Quantidade de Alunos por Professor por Curso</h4>
            <table className="table m-5 text-center">
                <thead>
                    <tr>
                        <th>Professor</th>
                        <th>Numero alunos</th>
                        <th>Curso</th>
                    </tr>
                </thead>
                <tbody>
                    {qtdeAlunosProfCurso.map(row => (
                        <tr key={row.id}>
                            <td>{row.nome_professor}</td> 
                            <td>{row.numero_alunos}</td>
                            <td>{row.nome}</td>          
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default QtdeAlunosProfCurso;