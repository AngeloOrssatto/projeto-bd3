import React, { Fragment, useEffect, useState } from "react";

const QtdeAlunosEscola = () => {

    const [qtdeAlunosEscola, setQtde] = useState([])
    
    const getAlunosEscola = async()  => {
        try {
            const response = await fetch("http://localhost:5000/stats/alunos-escola");
            const jsonData = await response.json();
            console.log(jsonData);
            setQtde(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        getAlunosEscola();
    },[]);

    return(
        <Fragment>
            <h4 className="m-3">Quantidade de Alunos por Escola</h4>
            <table className="table m-5 text-center">
                <thead>
                    <tr>
                        <th>Escola</th>
                        <th>Numero alunos</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {qtdeAlunosEscola.map(row => (
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

export default QtdeAlunosEscola;