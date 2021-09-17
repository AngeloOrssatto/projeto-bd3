import React, { Fragment, useState } from "react";
import DatePicker from 'react-date-picker'

const InputEmpregado = () => {

    const [nome, setNome] = useState("")
    const [rg, setRg] = useState("")
    const [cpf, setCpf] = useState("")
    const [data_nascimento, setDataNasc] = useState(new Date());
    const [telefone, setTel] = useState("")
    const [celular, setCel] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [numero, setNumero] = useState("")
    const [complemento, setComplemento] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("Cascavel")
    const [uf, setUF] = useState("PR")
    const [cep, setCEP] = useState("")
    const [tipo_empregado, setTipoEmpregado] = useState("")
    const [salario, setSalario] = useState("")
    const [carga_horaria, setCargaHoraria] = useState("10:00")

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {nome, rg, cpf, logradouro, numero, complemento, bairro, cidade, uf, cep, telefone, celular, data_nascimento, salario, carga_horaria, tipo_empregado }
            console.log(body)
            const response = await fetch("http://localhost:5000/empregado", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            window.location = "/empregado"
            console.log(response)
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">
                Lista de Funcionários
            </h1>
            <form className="mt-5" onSubmit={onSubmitForm}> 
                <div className="mb-1">
                    <input type="text" placeholder="Nome" className="form-control" value={nome} onChange={e => setNome(e.target.value)}></input>
                </div>
                <div className="d-flex column mb-1">
                    <input type="text" placeholder="RG" className="form-control" value={rg} onChange={e => setRg(e.target.value)}></input>
                    <input type="text" placeholder="CPF" className="form-control" value={cpf} onChange={e => setCpf(e.target.value)}></input>
                    <DatePicker value={data_nascimento} onChange={setDataNasc}></DatePicker>
                </div>
                <div className="d-flex column mb-1">
                    <input type="text" placeholder="Telefone" className="form-control" value={telefone} onChange={e => setTel(e.target.value)}></input>
                    <input type="text" placeholder="Celular" className="form-control" value={celular} onChange={e => setCel(e.target.value)}></input>
                </div>
                <div className="d-flex column mb-1">
                    <input type="text" placeholder="Logradouro" className="form-control" value={logradouro} onChange={e => setLogradouro(e.target.value)}></input>
                    <input type="text" placeholder="Numero" className="form-control" value={numero} onChange={e => setNumero(e.target.value)}></input>
                    <input type="text" placeholder="Complemento" className="form-control" value={complemento} onChange={e => setComplemento(e.target.value)}></input>
                </div>
                <div className="d-flex column mb-1">
                    <input type="text" placeholder="Bairro" className="form-control" value={bairro} onChange={e => setBairro(e.target.value)}></input>
                    <input type="text" placeholder="Cidade" className="form-control" value={cidade} onChange={e => setCidade(e.target.value)}></input>
                    <input type="text" placeholder="UF" className="form-control" value={uf} onChange={e => setUF(e.target.value)}></input>
                    <input type="text" placeholder="CEP" className="form-control" value={cep} onChange={e => setCEP(e.target.value)}></input>
                </div>
                <div className="d-flex column mb-1">
                    <input type="number" placeholder="Função" className="form-control" value={tipo_empregado} onChange={e => setTipoEmpregado(e.target.value)}></input>
                    <input type="text" placeholder="Salário" className="form-control" value={salario} onChange={e => setSalario(e.target.value)}></input>
                    <input type="text" placeholder="Carga Horária" className="form-control" value={carga_horaria} onChange={e => setCargaHoraria(e.target.value)}></input>
                </div>
                <button className="btn btn-success mt-4">Adicionar</button>
            </form>
        </Fragment>
    )

}

export default InputEmpregado;