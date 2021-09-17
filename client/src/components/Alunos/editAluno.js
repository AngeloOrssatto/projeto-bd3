import React, {Fragment, useState} from "react";
import DatePicker from 'react-date-picker'

const EditAluno = ({aluno}) => {

    const [nome, setNome] = useState(aluno.nome);
    const [rg, setRg] = useState(aluno.rg);
    const [cpf, setCpf] = useState(aluno.cpf);
    const [data_nascimento, setDataNascimento] = useState(aluno.data_nascimento);
    const [telefone, setTelefone] = useState(aluno.telefone);
    const [celular, setCelular] = useState(aluno.celular);
    const [logradouro, setLogradouro] = useState(aluno.logradouro);
    const [numero, setNumero] = useState(aluno.numero);
    const [complemento, setComplemento] = useState(aluno.complemento);
    const [bairro, setBairro] = useState(aluno.bairro);
    const [cidade, setCidade] = useState(aluno.cidade);
    const [uf, setUF] = useState(aluno.uf);
    const [cep, setCEP] = useState(aluno.cep);
    

    //edit function
    const updateAluno = async(e) => {
        e.preventDefault();
        try {
            const body = {nome, rg, cpf, data_nascimento, telefone, celular, logradouro, numero, complemento, bairro, cidade, uf, cep };
            console.log(body, aluno.id)
            const response = await fetch(`http://localhost:5000/alunos/${aluno.id}`,
            {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = "/aluno";
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
                data-target={`#id${aluno.id}`}
            >
                Editar Aluno
            </button> 
            <div
                className="modal" 
                id={`id${aluno.id}`}
                onClick={() => setNome(aluno.nome)}
            >
                <div className="modal-dialog" >
                <div className="modal-content">
                    <div className="modal-header">
                    <h4 className="modal-title">Editar Aluno</h4>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        onClick={() => setNome(aluno.nome)}
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
                   <DatePicker value={data_nascimento} onChange={setDataNascimento}/>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Telefone"
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Celular"
                        value={celular}
                        onChange={e => setCelular(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Logradouro"
                        value={logradouro}
                        onChange={e => setLogradouro(e.target.value)}
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
                    </div>

                    <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-warning"
                        data-dismiss="modal"
                        onClick={e => updateAluno(e)}
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

export default EditAluno;