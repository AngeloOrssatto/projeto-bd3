import React, { Fragment, useEffect, useState } from "react";

import EditMatricula from "./editMatricula";

const ListMatricula = () => {

    const [matriculas, setMatriculas] = useState([]);

    const deleteMatricula = async (id) => {
        try {
            await fetch(`http://localhost:5000/matricula/${id}`, {
                method: "DELETE"
            });
            setMatriculas(matriculas.filter(matricula => matricula.id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getMatriculas = async () => {
        try {
            const response = await fetch("http://localhost:5000/matricula");
            const jsonData = await response.json();
            console.log(jsonData);
            setMatriculas(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getMatriculas()
    }, [])

    return(
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Escola</th>
                        <th>Aluno</th>
                        <th>Professor</th>
                        <th>Curso</th>
                        {/* <th>Duração Aula</th> */}
                        <th>Data Vencimento</th>
                        <th>Horário</th>
                        <th>Dia Semana</th>
                        <th>Qtde Parcelas</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {matriculas.map(matricula => (
                        <tr key={matricula.id}>
                        <td>{matricula.id_escola}</td>
                        <td>{matricula.id_aluno}</td>
                        <td>{matricula.id_professor}</td>
                        <td>{matricula.id_curso}</td>
                        {/* <td>{matricula.duracao_aula}</td> */}
                        <td>{matricula.data_vencimento}</td>
                        <td>{matricula.horario}</td>
                        <td>{matricula.dia_semana}</td>
                        <td>{matricula.quantidade_parcela}</td>
                        
                        <td>
                            
                            <EditMatricula matricula={matricula}/>
                        </td>
                        <td>
                            <button
                            className="btn btn-danger"
                            onClick={() => deleteMatricula(matricula.id)}
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

export default ListMatricula;