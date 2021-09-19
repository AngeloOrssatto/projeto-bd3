import React, { Fragment, useEffect, useState } from "react";

const AlunosDevedores = () => {

    const [alunosDevedores, setQtde] = useState([])
    
    const getAlunosDevedores = async()  => {
        try {
            const response = await fetch("http://localhost:5000/stats/alunos-devedores");
            const jsonData = await response.json();
            console.log(jsonData);
            setQtde(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        getAlunosDevedores();
    },[]);

    return(
        <Fragment>
            <h4 className="m-3">Alunos que estão devendo para a escola</h4>
            <table className="table m-5 text-center">
                <thead>
                    <tr>
                        <th>Nome</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {alunosDevedores.map(row => (
                        <tr key={row.id}>
                            <td>{row.devedor}</td>            
                        </tr>
                    ))}
                </tbody>
            </table>

            
            
        </Fragment>
    )
}

export default AlunosDevedores;