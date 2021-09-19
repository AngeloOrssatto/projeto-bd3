import React, { Fragment, useEffect, useState } from "react";

const AlunosMenorIdade = () => {

    const [alunosMenorIdade, setQtde] = useState([])
    
    const getAlunosMenor = async()  => {
        try {
            const response = await fetch("http://localhost:5000/stats/alunos-menoridade");
            const jsonData = await response.json();
            console.log(jsonData);
            setQtde(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        getAlunosMenor();
    },[]);

    return(
        <Fragment>
            <h4 className="m-3">Alunos menores de idade</h4>
            <table className="table m-5 text-center">
                <thead>
                    <tr>
                        <th>Aluno</th>
                        <th>Responsável</th>
                        <th>Telefone</th>
                        <th>Celular</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {alunosMenorIdade.map(row => (
                        <tr key={row.id}>
                            <td>{row.nome}</td> 
                            <td>{row.nome_responsavel}</td>
                            <td>{row.telefone}</td>
                            <td>{row.celular}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            
            
        </Fragment>
    )
}

export default AlunosMenorIdade;