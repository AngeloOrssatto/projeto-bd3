import React, { Fragment } from "react";
import InputBoletim from '../components/Boletins/inputBoletim';
import ListBoletim from '../components/Boletins/listBoletim';

const Boletins = () => {
    return (
        <Fragment>
            <div className="container">
                <InputBoletim></InputBoletim>
                <ListBoletim></ListBoletim>
            </div>
        </Fragment>
    )
}

export default Boletins;
