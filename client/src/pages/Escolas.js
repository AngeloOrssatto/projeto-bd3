import React, {Fragment} from 'react';

import InputEscola from '../components/Escolas/inputEscola';
import ListEscola from '../components/Escolas/listEscola';

function Escolas() {
  return (
    <Fragment>
      <div className="container">
        <InputEscola></InputEscola>
        <ListEscola></ListEscola>
      </div>
    </Fragment>
  );
}

export default Escolas;