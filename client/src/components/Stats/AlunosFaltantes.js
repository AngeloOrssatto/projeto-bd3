import React, { Fragment, useEffect, useState } from "react";

const AlunosFaltantes = () => {

    const [alunosFaltantes, setQtde] = useState([])
    
    const getAlunosFaltantes = async()  => {
        try {
            const response = await fetch("http://localhost:5000/stats/alunos-faltantes");
            const jsonData = await response.json();
            console.log(jsonData);
            setQtde(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        getAlunosFaltantes();
    },[]);

    return(
        <Fragment>
            <h4 className="m-3">Quantidade de faltas por aluno</h4>
            <table className="table m-5 text-center">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Quantidade de faltas</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {alunosFaltantes.map(row => (
                        <tr key={row.id}>
                            <td>{row.nome}</td> 
                            <td>{row.numero_faltas}</td>
                                       
                        </tr>
                    ))}
                </tbody>
            </table>

            
            
        </Fragment>
    )
}

export default AlunosFaltantes;