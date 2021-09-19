import React, { Fragment, useEffect, useState } from "react";

const Faturamento = () => {

    const [faturamento, setQtde] = useState([])
    
    const getFaturamento = async()  => {
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
        getFaturamento();
    },[]);

    return(
        <Fragment>
            <h4 className="m-3">Faturamento</h4>
            <table className="table m-5 text-center">
                <thead>
                    <tr>
                        <th>Escola</th>
                        <th>Valor</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {faturamento.map(row => (
                        <tr key={row.id}>
                            <td>{row.nome}</td>  
                            <td>R$ {row.faturamento}</td>          
                        </tr>
                    ))}
                </tbody>
            </table>

            
            
        </Fragment>
    )
}

export default Faturamento;