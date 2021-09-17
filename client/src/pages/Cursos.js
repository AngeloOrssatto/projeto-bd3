import React, {Fragment} from 'react';

import InputCurso from '../components/Cursos/inputCurso';
import ListaCurso from '../components/Cursos/listCurso';

function Cursos() {
  return (
    <Fragment>
      <div className="container">
        <InputCurso></InputCurso>
        <ListaCurso></ListaCurso>
      </div>
    </Fragment>
  );
}

export default Cursos;