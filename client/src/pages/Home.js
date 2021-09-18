import React, {Fragment} from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <Fragment>
            <div className="container">
                <h1 className="mb-5 mt-5">Trabalho BD</h1>
                <ul>
                    <li><Link className="m-3" to="/escola">Escolas</Link></li>
                    <li><Link className="m-3" to="/curso">Cursos</Link></li>
                    <li><Link className="m-3" to="/aluno">Alunos</Link></li>
                    <li><Link className="m-3" to="/empregado">Empregados</Link></li>
                    <li><Link className="m-3" to="/matricula">Matrículas</Link></li>
                    <li><Link className="m-3" to="/pagamento">Pagamento</Link></li>
                    <li><Link className="m-3" to="/avaliacao">Avaliação</Link></li>
                    <li><Link className="m-3" to="/boletim">Boletim</Link></li>
                    <li><Link className="m-3" to="/aula">Aulas</Link></li>
                    <li><Link className="m-3" to="/stats">SQLS</Link></li>

                </ul>
            </div>
        </Fragment>
    )
}

export default Home;