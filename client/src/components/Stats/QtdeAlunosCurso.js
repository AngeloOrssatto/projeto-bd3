import React, { Fragment, useEffect, useState } from "react";

const QtdeAlunosCurso = () => {

    const [qtdeAlunosCurso, setQtde] = useState([])
    
    const getAlunosCurso = async()  => {
        try {
            const response = await fetch("http://localhost:5000/stats/alunos-curso");
            const jsonData = await response.json();
            console.log(jsonData);
            setQtde(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        getAlunosCurso();
    },[]);

    return(
        <Fragment>
            <h4 className="m-3">Quantidade de Alunos por Curso</h4>
            <table className="table m-5 text-center">
                <thead>
                    <tr>
                        <th>Curso</th>
                        <th>Numero alunos</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {qtdeAlunosCurso.map(row => (
                        <tr key={row.id}>
                            <td>{row.nome}</td> 
                            <td>{row.numero_alunos}</td>
                                       
                        </tr>
                    ))}
                </tbody>
            </table>

            
            
        </Fragment>
    )
}

export default QtdeAlunosCurso;