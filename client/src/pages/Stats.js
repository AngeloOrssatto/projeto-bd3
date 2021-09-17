import React, { Fragment } from "react";
import CursosIndisponiveis from "../components/Stats/CursosIndisponiveis";

const Stats = () => {

    return(
        <Fragment>
            <div className="container">
                <h1 className="text-center mt-4">SQLS</h1>
                <CursosIndisponiveis></CursosIndisponiveis>
            </div>
        </Fragment>
    )

}

export default Stats;