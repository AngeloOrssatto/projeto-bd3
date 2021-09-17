import React, {Fragment} from 'react';

import InputAluno from '../components/Alunos/inputAluno';
import ListAluno from '../components/Alunos/listAluno';

function Alunos() {
  return (
    <Fragment>
      <div className="container">
        <InputAluno></InputAluno>
        <ListAluno></ListAluno>
      </div>
    </Fragment>
  );
}

export default Alunos;