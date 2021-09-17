import React, { useState, Fragment } from "react";

const EditEmpregado = ({empregado}) => {
    const [nome, setNome] = useState(empregado.nome)
    const [rg, setRg] = useState(empregado.rg)
    const [cpf, setCpf] = useState(empregado.cpf)
    const [data_nascimento, setDataNasc] = useState(empregado.data_nascimento)
    const [telefone, setTel] = useState(empregado.telefone)
    const [celular, setCel] = useState(empregado.celular)
    const [logradouro, setRua] = useState(empregado.logradouro)
    const [numero, setNumero] = useState(empregado.numero)
    const [complemento, setComplemento] = useState(empregado.complemento)
    const [bairro, setBairro] = useState(empregado.bairro)
    const [cidade, setCidade] = useState(empregado.cidade)
    const [uf, setUF] = useState(empregado.uf)
    const [cep, setCEP] = useState(empregado.cep)
    // const [tipo_empregado, setTipoEmpregado] = useState(empregado.tipo_empregado)
    const [salario, setSalario] = useState(empregado.salario)
    // const [carga_horaria, setCargaHoraria] = useState(empregado.carga_horaria)

    const updateEmpregado = async(e) => {
        e.preventDefault();
        try {
            const body = {nome, rg, cpf, data_nascimento, telefone, celular, logradouro, numero, complemento, bairro, cidade, uf, cep};
            const response = await fetch(`http://localhost:5000/empregados/${empregado.id}`,
            {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = "/empregados";
        } catch (err) {
            console.error(err.message);
        }
    }

    return(
        <Fragment>
           <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target={`#id${empregado.id}`}
            >
                Editar
            </button>
            <div
                className="modal"
                id={`id${empregado.id}`}
                onClick={() => setNome(empregado.nome)}
            >
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h4 className="modal-title">Editar Funcionário</h4>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        onClick={() => setNome(empregado.nome)}
                    >
                        &times;
                    </button>
                    </div>

                    <div className="modal-body">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="RG"
                        value={rg}
                        onChange={e => setRg(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="CPF"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Data Nasc"
                        value={data_nascimento}
                        onChange={e => setDataNasc(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tel"
                        value={telefone}
                        onChange={e => setTel(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Cel"
                        value={celular}
                        onChange={e => setCel(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Rua"
                        value={logradouro}
                        onChange={e => setRua(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nº"
                        value={numero}
                        onChange={e => setNumero(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Complemento"
                        value={complemento}
                        onChange={e => setComplemento(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Bairro"
                        value={bairro}
                        onChange={e => setBairro(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Cidade"
                        value={cidade}
                        onChange={e => setCidade(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="UF"
                        value={uf}
                        onChange={e => setUF(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="CEP"
                        value={cep}
                        onChange={e => setCEP(e.target.value)}
                    />
                    {/* <input
                        type="text"
                        className="form-control"
                        placeholder="Função"
                        value={tipo_empregado}
                        onChange={e => setTipoEmpregado(e.target.value)}
                    /> */}
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Salário"
                        value={salario}
                        onChange={e => setSalario(e.target.value)}
                    />
                    {/* <input
                        type="text"
                        className="form-control"
                        placeholder="CH"
                        value={carga_horaria}
                        onChange={e => setCargaHoraria(e.target.value)}
                    /> */}
                    </div>

                    <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-warning"
                        data-dismiss="modal"
                        onClick={e => updateEmpregado(e)}
                    >
                        Editar
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        data-dismiss="modal"
                        //onClick={() => setNome(aluno.nome)}
                    >
                        Fechar
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditEmpregado;