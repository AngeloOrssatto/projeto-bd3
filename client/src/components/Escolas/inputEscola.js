import React, { Fragment, useState } from "react"

const InputEscola = () => {
    const [nome, setNome] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("Cascavel");
    const [uf, setUF] = useState("PR");
    const [cep, setCep] = useState('');

    const onSubmmitForm = async(e) => {
        e.preventDefault();
        try {
            let body = {nome, logradouro, numero, complemento, bairro, cidade, uf, cep};
            let response = await fetch('http://localhost:5000/escola',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
                 });
            console.log(response);
            window.location = '/escola';
        } catch (err) {
            console.error(err.message);
        }
    }
    return(
        <Fragment>
            <form className="mt-5" onSubmit={onSubmmitForm}> 
                <h1 className="text-center mt-5">
                    Cadastro de Escolas
                </h1>
                <div className="d-flex column mb-1">
                    <input type="text" placeholder="Nome" className="form-control" value={nome} onChange={e => setNome(e.target.value)}/>
                    <input type="text" placeholder="Logradouro" className="form-control" value={logradouro} onChange={e => setLogradouro(e.target.value)}/>
                    <input type="text" placeholder="Número" className="form-control" value={numero} onChange={e => setNumero(e.target.value)}/>
                    <input type="text" placeholder="Complemento" className="form-control" value={complemento} onChange={e => setComplemento(e.target.value)}/>
                </div>
                <div className="d-flex column mb-1">
                    <input type="text" placeholder="Bairro" className="form-control" value={bairro} onChange={e => setBairro(e.target.value)}/>
                    <input type="text" placeholder="Cidade" className="form-control" value={cidade} onChange={e => setCidade(e.target.value)}/>
                    <input type="text" placeholder='UF' className="form-control" value={uf} onChange={e => setUF(e.target.value)}/>
                    <input type="text" placeholder='CEP' className="form-control" value={cep} onChange={e => setCep(e.target.value)}/>
                </div>
                <button className="btn btn-success mt-4">Adicionar</button>
            </form>
        </Fragment>
    )
}

export default InputEscola;

                