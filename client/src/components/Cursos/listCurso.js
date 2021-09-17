import React, { Fragment, useEffect, useState } from "react";
import EditCurso from "./editCuso";

const ListaCurso = () => {

    const [cursos, setCursos] = useState([]);

    const getCursos = async () => {
        try {
            const response = await fetch("http://localhost:5000/cursos")
            const jsonData = await response.json()
            setCursos(jsonData)
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        getCursos();
    }, [])

    const deleteCurso = async(id) => {
        try {
            const deleteCurso = await fetch(`http://localhost:5000/cursos/${id}`, {
                method: 'DELETE'
            })
            console.log(deleteCurso)
            setCursos(cursos.filter(curso => curso.id !== id))
        } catch (err) {
            console.log(err.message)
        }
    }

    return(
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Codigo</th>
                        <th>Valor</th>
                        {/* <th>Professor</th> */}
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {cursos.map(curso => (
                        <tr key={curso.id}>
                        <td>{curso.nome}</td>
                        <td>{curso.codigo_curso}</td>
                        <td>{curso.valor_curso}</td>
                        {/* <td>Professor</td> */}
                        <td>
                            
                            <EditCurso curso={curso}/>
                        </td>
                        <td>
                            <button
                            className="btn btn-danger"
                            onClick={() => deleteCurso(curso.id)}
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

export default ListaCurso