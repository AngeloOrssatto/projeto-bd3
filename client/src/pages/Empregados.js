import React, {Fragment} from 'react';

import InputEmpregado from '../components/Empregado/inputEmpregado';
import ListEmpregado from '../components/Empregado/listEmpregado';

function Empregados() {
  return (
    <Fragment>
      <div className="container">
        <InputEmpregado></InputEmpregado>
        <ListEmpregado></ListEmpregado>
      </div>
    </Fragment>
  );
}

export default Empregados;