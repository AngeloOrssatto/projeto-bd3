import React, { Fragment } from "react";
import AlunosDevedores from "../components/Stats/AlunosDevedores";
import AlunosFaltantes from "../components/Stats/AlunosFaltantes";
import AlunosMenorIdade from "../components/Stats/AlunosMenorIdade";
import ComissaoProfessor from "../components/Stats/ComissaoProfessor";
import CursosIndisponiveis from "../components/Stats/CursosIndisponiveis";
import Faturamento from "../components/Stats/Faturamento";
import MediasBoletim from "../components/Stats/MediasBoletins";
import QtdeAlunosCurso from "../components/Stats/QtdeAlunosCurso";
import QtdeAlunosEscola from "../components/Stats/QtdeAlunosEscola";
import QtdeAlunosProfCurso from "../components/Stats/QtdeAlunosProfCurso";

const Stats = () => {

    return(
        <Fragment>
            <div className="container">
                <h1 className="text-center mt-4">SQLS</h1>
                <CursosIndisponiveis></CursosIndisponiveis>
                <QtdeAlunosEscola></QtdeAlunosEscola>
                <QtdeAlunosCurso></QtdeAlunosCurso>
                <QtdeAlunosProfCurso></QtdeAlunosProfCurso>
                <MediasBoletim></MediasBoletim>
                <AlunosMenorIdade></AlunosMenorIdade>
                <AlunosFaltantes></AlunosFaltantes>
                <AlunosDevedores></AlunosDevedores>
                <ComissaoProfessor></ComissaoProfessor>
                <Faturamento></Faturamento>
            </div>
        </Fragment>
    )

}

export default Stats;