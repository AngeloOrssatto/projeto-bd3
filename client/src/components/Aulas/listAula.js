import React, { Fragment, useEffect, useState } from "react";
import EditAula from "./editAula";

const ListAula = () => {

    const [aulas, setAulas] = useState([])

    const getAulas = async () => {
        try {
            const response = await fetch("http://localhost:5000/aula")
            const jsonData = await response.json()
            setAulas(jsonData)
            console.log(aulas)
        } catch (err) {
            console.log(err.message)
        }
    }

    const deleteAula = async (id) => {
        try {
            const deletedAula = await fetch(`http://localhost:5000/aula/${id}`, {
                method: 'DELETE'
            })
            setAulas(aulas.filter(aula => aula.id !== id))
        } catch (err) {
            console.log(err.message)
        }
    }


    useEffect(() =>{
        getAulas()
    }, [])

    return(
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>ID Matricula</th>
                        <th>Data Aula</th>
                        <th>Status</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {aulas.map(aula => (
                        <tr key={aula.id}>
                        <td>{aula.id_matricula}</td>
                        <td>{aula.data_aula}</td>
                        <td>{aula.status.toString()}</td>
                        
                        <td>
                            
                            <EditAula aula={aula}/>
                        </td>
                        <td>
                            <button
                            className="btn btn-danger"
                            onClick={() => deleteAula(aula.id)}
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

export default ListAula;