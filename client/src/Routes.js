import React from "react";
import { Switch, Route } from 'react-router-dom';
import Alunos from "./pages/Alunos";
import Cursos from "./pages/Cursos";
import Empregados from "./pages/Empregados";
import Escolas from "./pages/Escolas";
import Home from "./pages/Home";
import Matriculas from "./pages/Matriculas";
import Pagamentos from "./pages/Pagamentos";
import Avaliacoes from "./pages/Avaliacoes";
import Stats from "./pages/Stats";
import Boletins from "./pages/Boletins";

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/curso">
                <Cursos></Cursos>
            </Route>
            <Route path="/aluno">
                <Alunos></Alunos>
            </Route>
            <Route path="/empregado">
                <Empregados></Empregados>
            </Route>
            <Route path="/escola">
                <Escolas></Escolas>
            </Route>
            <Route path="/matricula">
                <Matriculas></Matriculas>
            </Route>
            <Route path="/pagamento">
                <Pagamentos></Pagamentos>
            </Route>
            <Route path="/avaliacao">
                <Avaliacoes></Avaliacoes>
            </Route>
            <Route path="/boletim">
                <Boletins></Boletins>
            </Route>
            <Route path="/stats">
                <Stats></Stats>
            </Route>
        </Switch>
    )
}

export default Routes