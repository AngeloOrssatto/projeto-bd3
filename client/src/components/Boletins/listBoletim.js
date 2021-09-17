import React, { Fragment, useEffect, useState } from "react";
import EditBoletim from "./editBoletim";

const ListBoletim = () => {

    const [boletins, setBoletins] = useState([])

    const getBoletins = async () => {
        try {
            const response = await fetch("http://localhost:5000/boletim")
            const jsonData = await response.json()
            setBoletins(jsonData)
        } catch (err) {
            console.log(err.message)
        }
    }

    const deleteBoletim = async (id) => {
        try {
            const deleteBoletim = await fetch(`http://localhost:5000/boletim/${id}`, {
                method: 'DELETE'
            })
            setBoletins(boletins.filter(boletim => boletim.id !== id))
        } catch (err) {
            console.log(err.message)
        }
    }


    useEffect(() =>{
        getBoletins()
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
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {boletins.map(boletim => (
                        <tr key={boletim.id}>
                        <td>{boletim.id_aluno}</td>
                        <td>{boletim.nota_final}</td>
                        <td>{boletim.observacao}</td>
                        <td>{boletim.data_emissao}</td>
                    
                        <td>
                            
                            <EditBoletim boletim={boletim}/>
                        </td>
                        <td>
                            <button
                            className="btn btn-danger"
                            onClick={() => deleteBoletim(boletim.id)}
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

export default ListBoletim;