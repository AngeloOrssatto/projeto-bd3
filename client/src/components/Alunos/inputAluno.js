import React, { Fragment, useState } from "react";
import DatePicker from 'react-date-picker'

const InputAluno = () => {
    
    const [nome, setNome] = useState("");
    const [rg, setRg] = useState("");
    const [cpf, setCpf] = useState("");
    const [data_nascimento, setDataNascimento] = useState(new Date());;
    const [telefone, setTelefone] = useState("");
    const [celular, setCelular] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("Cascavel");
    const [uf, setUF] = useState("PR");
    const [cep, setCEP] = useState("");
    const [nomeR, setNomeR] = useState("");
    const [rgR, setRgR] = useState("");
    const [cpfR, setCpfR] = useState("");
    const [data_nascimentoR, setDataNascimentoR] = useState(new Date());
    const [telefoneR, setTelefoneR] = useState("");
    const [celularR, setCelularR] = useState("");
    const [logradouroR, setLogradouroR] = useState("");
    const [numeroR, setNumeroR] = useState("");
    const [complementoR, setComplementoR] = useState("");
    const [bairroR, setBairroR] = useState("");
    const [cidadeR, setCidadeR] = useState("");
    const [ufR, setUFR] = useState("");
    const [profissao, setProfissao] = useState("");
    const [local_trabalho, setLocalTrabalho] = useState("");
    const [cepR, setCEPR] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {nome, logradouro, numero, complemento, bairro, cidade, uf, cep, telefone, celular, data_nascimento, rg, cpf, nomeR, logradouroR, numeroR, complementoR, bairroR, cidadeR,  ufR, cepR, telefoneR, celularR, data_nascimentoR, rgR, cpfR, profissao, local_trabalho }
            console.log(body)
            const response = await fetch("http://localhost:5000/aluno", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            window.location = "/aluno"
            console.log(response)
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">
                Lista de Alunos
            </h1>
            <form className="mt-5" onSubmit={onSubmitForm}> 
                <p>Aluno</p>
                <div className="mb-1">
                    <input type="text" placeholder="Nome" className="form-control" value={nome} onChange={e => setNome(e.target.value)}></input>
                </div>
                <div className="d-flex column mb-1">
                    <input type="text" placeholder="RG" className="form-control" value={rg} onChange={e => setRg(e.target.value)} ></input>
                    <input type="text" placeholder="CPF" className="form-control" value={cpf} onChange={e => setCpf(e.target.value)}></input>
                    <DatePicker value={data_nascimento} onChange={setDataNascimento}></DatePicker>
                </div>
                <div className="d-flex column mb-1">
                    <input type="text" placeholder="Telefone" className="form-control" value={telefone} onChange={e => setTelefone(e.target.value)}></input>
                    <input type="text" placeholder="Celular" className="form-control" value={celular} onChange={e => setCelular(e.target.value)}></input>
                </div>
                <div className="d-flex column mb-1">
                    <input type="text" placeholder="Logradouro" className="form-control" value={logradouro} onChange={e => setLogradouro(e.target.value)}></input>
                    <input type="text" placeholder="Número" className="form-control" value={numero} onChange={e => setNumero(e.target.value)}></input>
                    <input type="text" placeholder="Complemento" className="form-control" value={complemento} onChange={e => setComplemento(e.target.value)}/>
                </div>
                <div className="d-flex column mb-1">
                    <input type="text" placeholder="Bairro" className="form-control" value={bairro} onChange={e => setBairro(e.target.value)}></input>
                    <input type="text" placeholder="Cidade" className="form-control" value={cidade} onChange={e => setCidade(e.target.value)}></input>
                    <input type="text" placeholder="UF" className="form-control" value={uf} onChange={e => setUF(e.target.value)}></input>
                    <input type="text" placeholder="CEP" className="form-control" value={cep} onChange={e => setCEP(e.target.value)}></input>

                </div>
                <p className="mt-3">Responsável</p>
                <div className="mb-1">
                    <input type="text" placeholder="Nome" className="form-control" value={nomeR} onChange={e => setNomeR(e.target.value)}></input>
                </div>
                <div className="d-flex column mb-1">
                    <input type="text" placeholder="RG" className="form-control" value={rgR} onChange={e => setRgR(e.target.value)} ></input>
                    <input type="text" placeholder="CPF" className="form-control" value={cpfR} onChange={e => setCpfR(e.target.value)}></input>
                    <DatePicker value={data_nascimentoR} onChange={setDataNascimentoR}></DatePicker>
                </div>
                <div className="d-flex column mb-1">
                    <input type="text" placeholder="Telefone" className="form-control" value={telefoneR} onChange={e => setTelefoneR(e.target.value)}></input>
                    <input type="text" placeholder="Celular" className="form-control" value={celularR} onChange={e => setCelularR(e.target.value)}></input>
                </div>
                <div className="d-flex column mb-1">
                    <input type="text" placeholder="Logradouro" className="form-control" value={logradouroR} onChange={e => setLogradouroR(e.target.value)}></input>
                    <input type="text" placeholder="Número" className="form-control" value={numeroR} onChange={e => setNumeroR(e.target.value)}></input>
                    <input type="text" placeholder="Complemento" className="form-control" value={complementoR} onChange={e => setComplementoR(e.target.value)}/>
                </div>
                <div className="d-flex column mb-1">
                    <input type="text" placeholder="Bairro" className="form-control" value={bairroR} onChange={e => setBairroR(e.target.value)}></input>
                    <input type="text" placeholder="Cidade" className="form-control" value={cidadeR} onChange={e => setCidadeR(e.target.value)}></input>
                    <input type="text" placeholder="UF" className="form-control" value={ufR} onChange={e => setUFR(e.target.value)}></input>
                    <input type="text" placeholder="CEP" className="form-control" value={cepR} onChange={e => setCEPR(e.target.value)}></input>
                </div>
                <div className="d-flex column mb-1">
                    <input type="text" placeholder="Profissão" className="form-control" value={profissao} onChange={e => setProfissao(e.target.value)}></input>
                    <input type="text" placeholder="Local Trabalho" className="form-control" value={local_trabalho} onChange={e => setLocalTrabalho(e.target.value)}></input>
                </div>
                <button className="btn btn-success mt-4">Adicionar</button>
            </form>
        </Fragment>
    )
};

export default InputAluno;