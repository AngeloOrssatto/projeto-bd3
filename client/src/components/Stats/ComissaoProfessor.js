import React, { Fragment, useEffect, useState } from "react";

const ComissaoProfessor = () => {

    const [comissaoProfessor, setQtde] = useState([])
    
    const getComissaoProfessor = async()  => {
        try {
            const response = await fetch("http://localhost:5000/stats/comissao-professor");
            const jsonData = await response.json();
            console.log(jsonData);
            setQtde(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        getComissaoProfessor();
    },[]);

    return(
        <Fragment>
            <h4 className="m-3">Valor de comissão por professor</h4>
            <table className="table m-5 text-center">
                <thead>
                    <tr>
                        <th>Professor</th>
                        <th>Valor</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {comissaoProfessor.map(row => (
                        <tr key={row.id}>
                            <td>{row.nome}</td>  
                            <td>R$ {row.salario}</td>          
                        </tr>
                    ))}
                </tbody>
            </table>

            
            
        </Fragment>
    )
}

export default ComissaoProfessor;