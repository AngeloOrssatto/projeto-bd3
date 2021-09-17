import React, {Fragment, useState} from "react";

const EditEscola = ({escola}) => {
    const [nome, setNome] = useState(escola.nome)
    const [logradouro, setLogradouro] = useState(escola.logradouro)
    const [numero, setNumero] = useState(escola.numero)
    const [complemento, setComplemento] = useState(escola.complemento)
    const [bairro, setBairro] = useState(escola.bairro)
    const [cidade, setCidade] = useState(escola.cidade)
    const [uf, setUF] = useState(escola.uf)
    const [cep, setCEP] = useState(escola.cep)

      //edit function
      const updateEscola = async(e) => {
        e.preventDefault();
        try {
            const body = {nome, logradouro, numero, complemento, bairro, cidade, uf, cep};
            console.log(body);
            const response = await fetch(`http://localhost:5000/escolas/${escola.id}`,
            {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = "/escola";
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
                data-target={`#id${escola.id}`}
            >
                Editar
            </button>
            <div
                className="modal"
                id={`id${escola.id}`}
                onClick={() => setNome(escola.nome)}
            >
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h4 className="modal-title">Editar escola</h4>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        onClick={() => setNome(escola.nome)}
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
                        placeholder="Rua"
                        value={logradouro}
                        onChange={e => setLogradouro(e.target.value)}
                    />
                    <input
                        type="number"
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
                        onClick={e => updateEscola(e)}
                    >
                        Editar
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        data-dismiss="modal"
                        //onClick={() => {setNome(escola.nome), setLogradouro(escola.logradouro), setNumero(escola.numero), setBairro(escola.bairro), setCidade(escola.cidade),
                        //   setUF(escola.uf), setCEP(escola.cep)}}
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

export default EditEscola;