import React, { Fragment, useEffect, useState } from "react";

const CursosIndisponiveis = () => {

    const [cursosInd, setCursosInd] = useState([])
    
    const getCursosInd = async()  => {
        try {
            const response = await fetch("http://localhost:5000/stats/cursos-ind");
            const jsonData = await response.json();
            console.log(jsonData);
            setCursosInd(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        getCursosInd();
    },[]);

    return(
        <Fragment>
            <h4 className="m-3">Cursos indisponíveis</h4>
            <table className="table m-5 text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Curso</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {cursosInd.map(curso => (
                        <tr key={curso.id}>
                            <td>{curso.id}</td> 
                            <td>{curso.nome}</td>
                            <td>R$ {curso.valor_curso}</td>              
                        </tr>
                    ))}
                </tbody>
            </table>

            
            
        </Fragment>
    )
}

export default CursosIndisponiveis;