import React, {Fragment} from 'react';

import InputMatricula from '../components/Matriculas/inputMatricula';
import ListMatricula from '../components/Matriculas/listMatricula';

function Matriculas() {
  return (
    <Fragment>
      <div className="container">
        <InputMatricula></InputMatricula>
        <ListMatricula></ListMatricula>
      </div>
    </Fragment>
  );
}

export default Matriculas;