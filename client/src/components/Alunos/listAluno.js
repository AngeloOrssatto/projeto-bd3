import React, { Fragment, useState, useEffect } from "react";

import EditAluno from "./editAluno";


const ListAluno = () => {

    const [alunos, setAlunos] = useState([]);

    const deleteAluno = async (id) => {
        try {
            await fetch(`http://localhost:5000/alunos/${id}`, {
                method: "DELETE"
            });
            setAlunos(alunos.filter(aluno => aluno.id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getAlunos = async()  => {
        try {
            const response = await fetch("http://localhost:5000/alunos");
            const jsonData = await response.json();
            console.log(jsonData);
            setAlunos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        getAlunos();
    },[]);

    return(
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Nome</th>
                        {/* <th>CPF</th>
                        <th>Data Nasc</th> */}
                        <th>Tel</th>
                        <th>Cel</th>
                        {/* <th>Rua</th>
                        <th>Nº</th>
                        <th>Comp</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>UF</th> */}
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map(aluno => (
                        <tr key={aluno.id}>
                        <td>{aluno.nome}</td>
                        {/* <td>{aluno.rg}</td>
                        <td>{aluno.cpf}</td>
                        <td>{aluno.data_nascimento}</td> */}
                        <td>{aluno.telefone}</td>
                        <td>{aluno.celular}</td>
                        {/* <td>{aluno.logradouro}</td>
                        <td>{aluno.numero}</td>
                        <td>{aluno.complemento}</td>
                        <td>{aluno.bairro}</td>
                        <td>{aluno.cidade}</td>
                        <td>{aluno.uf}</td> */}
                        <td>                            
                            <EditAluno aluno={aluno}/>
                        </td>
                        <td>
                            <button
                            className="btn btn-danger"
                            onClick={() => deleteAluno(aluno.id)}
                            >
                            Excluir
                            </button>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListAluno