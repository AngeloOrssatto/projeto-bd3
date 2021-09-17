import React, { Fragment, useState, useEffect } from "react";

import EditEscola from "./editEscola";

const ListEscola = () => {
    const [escolas, setEscolas] = useState([]);
    
    const deleteEscola = async (id) => {
        try {
            await fetch(`http://localhost:5000/escolas/${id}`, {
                method: "DELETE"
            });

            setEscolas(escolas.filter(escola => escola.id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getEscolas = async()  => {
        try {
            const response = await fetch("http://localhost:5000/escolas");
            const jsonData = await response.json();
            console.log(jsonData);
            setEscolas(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        getEscolas();
    },[]);

    return(
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                    <th>ID</th>
                        <th>Nome</th>
                        <th>Rua</th>
                        <th>Nº</th>
                        <th>Complemento</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>UF</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {escolas.map(escola => (
                        <tr key={escola.id}>
                        <td>{escola.id}</td>
                        <td>{escola.nome}</td>
                        <td>{escola.logradouro}</td>
                        <td>{escola.numero}</td>
                        <td>{escola.complemento}</td>
                        <td>{escola.bairro}</td>
                        <td>{escola.cidade}</td>
                        <td>{escola.uf}</td>                        
                        <td>                            
                            <EditEscola escola={escola}/>
                        </td>
                        <td>
                            <button
                            className="btn btn-danger" onClick={() => deleteEscola(escola.id)}
                            >
                            Deletar
                            </button>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListEscola;
