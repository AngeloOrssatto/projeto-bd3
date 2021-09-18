import React, { Fragment, useEffect, useState } from "react";
import EditAvaliacao from "./editAvaliacao";

const ListAvaliacao = () => {

    const [avaliacoes, setAvaliacoes] = useState([])

    const getAvaliacoes = async () => {
        try {
            const response = await fetch("http://localhost:5000/avaliacao")
            const jsonData = await response.json()
            setAvaliacoes(jsonData)
        } catch (err) {
            console.log(err.message)
        }
    }

    const deleteAvaliacao = async (id) => {
        try {
            const deleteAvaliacao = await fetch(`http://localhost:5000/avaliacao/${id}`, {
                method: 'DELETE'
            })
            console.log(deleteAvaliacao)
            setAvaliacoes(avaliacoes.filter(avaliacao => avaliacao.id !== id))
        } catch (err) {
            console.log(err.message)
        }
    }


    useEffect(() =>{
        getAvaliacoes()
    }, [])

    return(
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>ID Aluno</th>
                        <th>Nota</th>
                        <th>Observação</th>
                        <th>Data Avaliação</th>
                        <th>Prof Secundario</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {avaliacoes.map(avaliacao => (
                        <tr key={avaliacao.id}>
                        <td>{avaliacao.id_aluno}</td>
                        <td>{avaliacao.nota}</td>
                        <td>{avaliacao.observacao}</td>
                        <td>{avaliacao.data_avaliacao}</td>
                        <td>{avaliacao.id_professor_secundario}</td>
                        <td>
                            
                            <EditAvaliacao avaliacao={avaliacao}/>
                        </td>
                        <td>
                            <button
                            className="btn btn-danger"
                            onClick={() => deleteAvaliacao(avaliacao.id)}
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

export default ListAvaliacao;