import React, { Fragment, useState, useEffect } from "react";

import EditEmpregado from "./editEmpregado";

const ListEmpregado = () => {

    const [empregados, setEmpregados] = useState([]);

    const getEmpregados = async()  => {
        try {
            const response = await fetch("http://localhost:5000/empregados");
            const jsonData = await response.json();
            console.log(jsonData);
            setEmpregados(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        getEmpregados();
    },[]);

    return(
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>RG</th>
                        <th>CPF</th>
                        <th>Data Nasc</th>
                        <th>Tel</th>
                        <th>Cel</th>
                        <th>Rua</th>
                        <th>Nº</th>
                        <th>Comp</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>UF</th>
                        {/* <th>Função</th> */}
                        <th>Salario</th>
                        {/* <th>CH</th> */}
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {empregados.map(empregado => (
                        <tr key={empregado.id}>
                        <td>{empregado.nome}</td>
                        <td>{empregado.rg}</td>
                        <td>{empregado.cpf}</td>
                        <td>{empregado.data_nascimento}</td>
                        <td>{empregado.telefone}</td>
                        <td>{empregado.celular}</td>
                        <td>{empregado.logradouro}</td>
                        <td>{empregado.numero}</td>
                        <td>{empregado.complemento}</td>
                        <td>{empregado.bairro}</td>
                        <td>{empregado.cidade}</td>
                        <td>{empregado.uf}</td>
                        <td>{empregado.salario}</td>
                        {/* <td>{empregado.carga_horaria}</td> */}
                        
                        <td>
                            
                            <EditEmpregado empregado={empregado}/>
                        </td>
                        <td>
                            <button
                            className="btn btn-danger"
                            // onClick={() => deleteCurso(curso.id)}
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

export default ListEmpregado;