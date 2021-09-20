const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db/_database");

//MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROTAS

// CREATE
app.post("/curso", async(req,res) => {
    try {
        const { nome, codigo_curso, valor_curso, id_professor } = req.body;
        const newCurso = await pool.query("INSERT INTO curso (nome, codigo_curso, valor_curso) VALUES ($1, $2, $3) RETURNING id", [nome, codigo_curso, valor_curso]);
        const cursoProfessor = await pool.query("INSERT INTO curso_professor (id_professor, id_curso) VALUES ($1, $2)", [id_professor, newCurso.rows[0].id])
        res.json(newCurso.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

app.post("/aula", async(req,res) => {
    try {
        const { id_matricula, data_aula, status } = req.body;
        const newAula = await pool.query("INSERT INTO aula (id_matricula, data_aula, status) VALUES ($1, $2, $3) RETURNING *", [id_matricula, data_aula, status]);
        res.json(newAula.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

app.post("/avaliacao", async(req,res) => {
    try {
        const { id_aluno, nota, observacao, data_avaliacao, id_prof_sec } = req.body;
        const newAvaliacao = await pool.query("INSERT INTO avaliacao (id_aluno, nota, observacao, data_avaliacao) VALUES ($1, $2, $3, $4) RETURNING id", [id_aluno, nota, observacao, data_avaliacao]);
        const newBanca = await pool.query("INSERT INTO banca (id_avaliacao, id_professor_secundario) VALUES ($1, $2)", [newAvaliacao.rows[0].id, id_prof_sec])
        res.json(newAvaliacao.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

app.post("/boletim", async(req,res) => {
    try {
        const { id_aluno, nota_final, observacao, data_emissao } = req.body;
        const newAvaliacao = await pool.query("INSERT INTO boletim (id_aluno, nota_final, observacao, data_emissao) VALUES ($1, $2, $3, $4) RETURNING *", [id_aluno, nota_final, observacao, data_emissao]);
        res.json(newAvaliacao.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

app.post("/matricula", async(req,res) => {
    try {
        const { escola, aluno, professor, curso, duracao_aula, data_vencimento, horario, dia_semana, quantidade_parcela } = req.body;
        const newMatricula = await pool.query(
            "INSERT INTO matricula (id_escola, id_aluno, id_professor, id_curso, duracao_aula, data_vencimento, horario, dia_semana, quantidade_parcela) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *", 
            [escola, aluno, professor, curso, duracao_aula, data_vencimento, horario, dia_semana, quantidade_parcela]);
        res.json(newMatricula.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

app.post("/pagamento", async(req,res) => {
    try {
        const { matricula, valor_parcela, acrescimo, desconto, numero_parcela, data_pagamento } = req.body;
        const newPagamento = await pool.query(
            "INSERT INTO pagamento (id_matricula, valor_parcela, desconto, acrescimo, data_pagamento, numero_parcela) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", 
            [matricula, valor_parcela, desconto, acrescimo, data_pagamento, numero_parcela]);
        res.json(newPagamento.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

app.post('/escola', async(req, res) => {
    try {
        const { nome, logradouro, numero, complemento, bairro, cidade, uf, cep } = req.body;
        const id_endereco = await pool.query(
            "INSERT INTO endereco (logradouro, numero, complemento, bairro, cidade, uf, cep) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id",
            [logradouro, numero, complemento, bairro, cidade, uf, cep]
        );
        const newEscola = await pool.query(
            "INSERT INTO escola (nome, id_endereco) VALUES ($1,$2) RETURNING *",
            [nome, id_endereco.rows[0].id]
        );
        res.json(id_endereco.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.post('/empregado', async(req, res) => {
    try {
        const {nome, rg, cpf, logradouro, numero, complemento, bairro, cidade, uf, cep, telefone, celular, data_nascimento, salario, carga_horaria, tipo_empregado } = req.body;
        const id_endereco = await pool.query(
            "INSERT INTO endereco (logradouro, numero, complemento, bairro, cidade, uf, cep) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id",
            [logradouro, numero, complemento, bairro, cidade, uf, cep]
        );
        const newEmpregado = await pool.query(
            "INSERT INTO empregado (nome, id_endereco, rg, cpf, telefone, celular, data_nascimento, salario, carga_horaria, id_tipo_empregado) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *",
            [nome, id_endereco.rows[0].id, rg, cpf, telefone, celular, data_nascimento, salario, carga_horaria, tipo_empregado]
        );
        res.json(newEmpregado.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.post("/aluno", async(req,res) => {
    try {
        const { nome, logradouro, numero, complemento, bairro, cidade, uf, cep, telefone, celular, data_nascimento, rg, cpf, nomeR, logradouroR, numeroR, complementoR, bairroR, cidadeR,  ufR, cepR, telefoneR, celularR, data_nascimentoR, rgR, cpfR, profissao, local_trabalho } = req.body;
        console.log(req.body);
        let id_endereco;
        let id_enderecoR;
        let id_responsavel;
        let newAluno;
        if (nomeR !== '') {
            id_enderecoR = await pool.query(
                "INSERT INTO endereco (logradouro, numero, complemento, bairro, cidade, uf, cep) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id",
                [logradouroR, numeroR, complementoR, bairroR, cidadeR, ufR, cepR]
            );
            id_responsavel = await pool.query(
                "INSERT INTO responsavel (nome, id_endereco, telefone, celular, data_nascimento, rg, cpf, profissao, local_trabalho) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id", 
                [nomeR, id_enderecoR.rows[0].id, telefoneR, celularR, data_nascimentoR, rgR, cpfR, profissao, local_trabalho]);
                id_endereco = await pool.query(
                    "INSERT INTO endereco (logradouro, numero, complemento, bairro, cidade, uf, cep) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id",
                    [logradouro, numero, complemento, bairro, cidade, uf, cep]
                );
            //console.log(id_responsavel.rows[0].id);
            newAluno = await pool.query(
                "INSERT INTO aluno (nome, id_endereco, telefone, celular, data_nascimento, rg, cpf, id_responsavel) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", 
            [nome, id_endereco.rows[0].id, telefone, celular, data_nascimento, rg, cpf, id_responsavel.rows[0].id]);
        }  
        else { 
            id_endereco = await pool.query(
                "INSERT INTO endereco (logradouro, numero, complemento, bairro, cidade, uf, cep) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id",
                [logradouro, numero, complemento, bairro, cidade, uf, cep]
            );
            newAluno = await pool.query("INSERT INTO aluno (nome, id_endereco, telefone, celular, data_nascimento, rg, cpf) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", 
            [nome, id_endereco.rows[0].id, telefone, celular, data_nascimento, rg, cpf]);
        }
        res.json(newAluno.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

// GET *
app.get("/cursos", async(req, res) => {
    try {
        const allCursos = await pool.query('SELECT c.id, c.nome, c.codigo_curso, c.valor_curso, cp.id_professor FROM curso c JOIN curso_professor cp ON c.id = cp.id_curso');
        res.json(allCursos.rows);
    } catch (err) {
        console.log(err.message);   
    }
})

app.get("/aula", async(req, res) => {
    try {
        const allAulas = await pool.query('SELECT * FROM aula');
        res.json(allAulas.rows);
    } catch (err) {
        console.log(err.message);   
    }
})

app.get("/avaliacao", async(req, res) => {
    try {
        const allAvaliacoes = await pool.query('SELECT a.id, a.id_aluno, a.nota, a.observacao, a.data_avaliacao, b.id_professor_secundario FROM avaliacao a JOIN banca b ON a.id = b.id_avaliacao');
        res.json(allAvaliacoes.rows);
    } catch (err) {
        console.log(err.message);   
    }
})

app.get("/boletim", async(req, res) => {
    try {
        const allBoletins = await pool.query('SELECT * FROM boletim');
        res.json(allBoletins.rows);
    } catch (err) {
        console.log(err.message);   
    }
})

app.get("/matricula", async(req, res) => {
    try {
        const allMatriculas = await pool.query('SELECT id, id_escola, id_aluno, id_professor, id_curso, data_vencimento, horario, dia_semana, quantidade_parcela FROM matricula');
        res.json(allMatriculas.rows);
        console.log(allMatriculas.rows)
    } catch (err) {
        console.log(err.message);   
    }
})

app.get("/pagamento", async(req, res) => {
    try {
        const allPagamentos = await pool.query('SELECT * FROM pagamento');
        res.json(allPagamentos.rows);
        console.log(allPagamentos.rows)
    } catch (err) {
        console.log(err.message);   
    }
})

app.get("/escolas", async(req, res) => {
    try {
        const allEscolas = await pool.query('SELECT es.id, es.nome, en.logradouro, en.numero, en.complemento, en.bairro, en.cidade, en.uf, en.cep FROM escola es join endereco en on en.id = es.id_endereco')
        res.json(allEscolas.rows);
    } catch (err) {
        console.log(err.message);   
    }
})

app.get("/empregados", async(req, res) => {
    try {
        const allEmpregados = await pool.query('SELECT e.id, e.nome, en.logradouro, en.numero, en.complemento, en.bairro, en.cidade, en.uf, en.cep, e.telefone, e.celular, e.data_nascimento, e.rg, e.cpf, e.salario FROM empregado e JOIN endereco en ON en.id = e.id_endereco')
        res.json(allEmpregados.rows);
    } catch (err) {
        console.log(err.message);   
    }
})

app.get("/alunos", async(req, res) => {
    try {
        const allAlunos = await pool.query('SELECT a.id, a.nome, eAluno.logradouro, eAluno.numero, eAluno.complemento, eAluno.bairro, eAluno.cidade, eAluno.uf, eAluno.cep, a.telefone, a.celular, a.data_nascimento, a.rg, a.cpf,r.nome AS nomeR, eRes.logradouro AS logradouroR, eRes.numero AS numeroR, eRes.complemento AS complementoR, eRes.bairro AS bairroR, eRes.cidade AS cidadeR, eRes.uf AS ufR, eRes.cep AS cepR, r.telefone AS telefoneR, r.celular AS celularR, r.data_nascimento AS data_nascimentoR, r.rg AS rgR, r.cpf AS cpfR, r.profissao AS profissao, r.local_trabalho AS local_trabalho FROM aluno a JOIN endereco eAluno ON eAluno.id = a.id_endereco LEFT JOIN responsavel r ON r.id = a.id_responsavel LEFT JOIN endereco eRes ON eRes.id = r.id_endereco')
        res.json(allAlunos.rows);
    } catch (err) {
        console.log(err.message);   
    }
})

// GET BY ID
app.get("/curso/:id", async(req, res) => {
    try {
        const {id} = req.params
        const curso = await pool.query('SELECT * FROM curso WHERE curso.id = $1', [id])
        res.json(curso.rows[0])
    } catch (err) {
        console.log(err.message);
    }
})

app.get('/escolas/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const escola = await pool.query("SELECT es.id, es.nome, en.logradouro, en.numero, en.complemento, en.bairro, en.cidade, en.uf, en.cep FROM escola es join endereco en on en.id = es.id_endereco WHERE es.id = $1", [id]);
        res.json(escola.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

app.get('/alunos/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const aluno = await pool.query("SELECT a.nome,	eAluno.logradouro, eAluno.numero, eAluno.complemento, eAluno.bairro, eAluno.cidade, eAluno.uf, eAluno.cep, a.telefone, a.celular, a.data_nascimento, a.rg, a.cpf,r.nome AS nomeR, eRes.logradouro AS logradouroR, eRes.numero AS numeroR, eRes.complemento AS complementoR, eRes.bairro AS bairroR, eRes.cidade AS cidadeR, eRes.uf AS ufR, eRes.cep AS cepR, r.telefone AS telefoneR, r.celular AS celularR, r.data_nascimento AS data_nascimentoR, r.rg AS rgR, r.cpf AS cpfR, r.profissao AS profissao, r.local_trabalho AS local_trabalho FROM aluno a JOIN endereco eAluno ON eAluno.id = a.id_endereco LEFT JOIN responsavel r ON r.id = a.id_responsavel LEFT JOIN endereco eRes ON eRes.id = r.id_endereco WHERE a.id = $1", [id]);
        res.json(aluno.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})


// UPDATE BY ID
app.put("/curso/:id", async(req, res) => {
    try {
        const {id} = req.params
        const { nome, codigo_curso, valor_curso } = req.body
        const updateCurso = await pool.query('UPDATE curso SET nome = $2, codigo_curso = $3, valor_curso = $4 WHERE curso.id = $1', [id, nome, codigo_curso, valor_curso])
        res.json(updateCurso.rows[0])
    } catch (err) {
        console.log(err.message);
    }
})

app.put("/aula/:id", async(req, res) => {
    try {
        const {id} = req.params
        const { id_matricula, data_aula, status } = req.body
        const updatedAula = await pool.query('UPDATE aula SET id_matricula = $2, data_aula = $3, status = $4 WHERE curso.id = $1', [id, id_matricula, data_aula, status])
        res.json(updatedAula.rows[0])
    } catch (err) {
        console.log(err.message);
    }
})

app.put("/avaliacao/:id", async(req, res) => {
    try {
        const {id} = req.params
        const { id_aluno, nota, observacao, data_avaliacao } = req.body
        console.log(req.body)
        const updateAvaliacao = await pool.query('UPDATE avaliacao SET id_aluno = $2, nota = $3, observacao = $4, data_avaliacao = $5 WHERE avaliacao.id = $1', [id, id_aluno, nota, observacao, data_avaliacao])
        res.json(updateAvaliacao.rows[0])
    } catch (err) {
        console.log(err.message);
    }
})

app.put("/boletim/:id", async(req, res) => {
    try {
        const {id} = req.params
        const { id_aluno, nota_final, observacao, data_emissao } = req.body
        console.log(req.body)
        const updateBoletim = await pool.query('UPDATE boletim SET id_aluno = $2, nota_final = $3, observacao = $4, data_emissao = $5 WHERE boletim.id = $1', [id, id_aluno, nota_final, observacao, data_emissao])
        res.json(updateBoletim.rows[0])
    } catch (err) {
        console.log(err.message);
    }
})

app.put("/matricula/:id", async(req, res) => {
    try {
        const {id} = req.params
        const { escola, aluno, professor, curso, duracao_aula, data_vencimento, horario, dia_semana, quantidade_parcela } = req.body
        const updateMatricula = await pool.query(
            'UPDATE matricula SET id_escola = $2, id_aluno = $3, id_professor = $4, id_curso = $5, data_vencimento = $6, horario = $7, dia_semana = $8, quantidade_parcela = $9 WHERE matricula.id = $1', 
            [id, escola, aluno, professor, curso, data_vencimento, horario, dia_semana, quantidade_parcela]
        )
        res.json(updateMatricula.rows[0])
    } catch (err) {
        console.log(err.message);
    }
})

app.put("/pagamento/:id", async(req, res) => {
    try {
        const {id} = req.params
        const { id_matricula, valor_parcela, acrescimo, desconto, numero_parcela, data_pagamento } = req.body
        console.log(id, req.body)
        const updatePgto = await pool.query(
            'UPDATE pagamento SET id_matricula = $2, valor_parcela = $3, acrescimo = $4, desconto = $5, data_pagamento = $6, numero_parcela = $7 WHERE pagamento.id = $1', 
            [id, id_matricula, valor_parcela, acrescimo, desconto, data_pagamento, numero_parcela]
        )
        res.json(updatePgto.rows[0])
    } catch (err) {
        console.log(err.message);
    }
})

app.put('/escolas/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const { nome, logradouro, numero, complemento, bairro, cidade, uf, cep } = req.body;
        const id_endereco = await pool.query("SELECT id_endereco FROM escola WHERE id = $1", [id]);
        const updateEscola = await pool.query("UPDATE escola SET nome = $2 WHERE id = $1", [id, nome]);
        const updateEndereco = await pool.query("UPDATE endereco SET logradouro = $2, numero = $3, complemento = $4, bairro = $5, cidade = $6, uf = $7, cep = $8 WHERE id = $1", [id_endereco.rows[0].id, logradouro, numero, complemento, bairro, cidade, uf, cep]);
        res.json(updateEscola.rows[0]);
        } catch (err) {
        console.error(err.message);
    }
});

app.put('/empregados/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const { nome, rg, cpf, data_nascimento, telefone, celular, logradouro, numero, complemento, bairro, cidade, uf, cep } = req.body;
        const id_endereco = await pool.query("SELECT id_endereco FROM escola WHERE id = $1", [id]);
        const updateEmpregado = await pool.query("UPDATE empregado SET nome = $2, rg = $3, cpf = $4, data_nascimento = $5, telefone = $6, celular = $7 WHERE id = $1", [id, nome, rg, cpf, data_nascimento, telefone, celular]);
        const updateEndereco = await pool.query("UPDATE endereco SET logradouro = $2, numero = $3, complemento = $4, bairro = $5, cidade = $6, uf = $7, cep = $8 WHERE id = $1", [id_endereco.rows[0].id, logradouro, numero, complemento, bairro, cidade, uf, cep]);
        res.json(updateEmpregado.rows[0]);
        } catch (err) {
        console.error(err.message);
    }
});

app.put('/alunos/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const { 
            nome, rg, cpf, data_nascimento, telefone, celular, logradouro, numero, complemento, bairro, cidade, uf, cep 
        } = req.body;
        console.log( id, nome, rg, cpf, data_nascimento, telefone, celular, logradouro, numero, complemento, bairro, cidade, uf, cep);
        console.log(req.body)
        const id_endereco = await pool.query("SELECT id_endereco FROM aluno WHERE id = $1", [id]);
        const updateEndereco = await pool.query("UPDATE endereco SET logradouro = $2, numero = $3, complemento = $4, bairro = $5, cidade = $6, uf = $7, cep = $8 WHERE id = $1", [id_endereco.rows[0].id, logradouro, numero, complemento, bairro, cidade, uf, cep]);
        const updateAluno = await pool.query(
            "UPDATE aluno SET nome = $1, telefone = $2, celular = $3, data_nascimento = $4, rg = $5, cpf = $6 WHERE id = $7", 
            [nome, telefone, celular, data_nascimento, rg, cpf, id]
        )
        res.json(updateAluno.rows[0]);
        } catch (err) {
        console.error(err.message);
    }
});


// DELETE BY ID
app.delete("/curso/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedCurso = await pool.query("DELETE FROM curso WHERE id = $1", [id]);
        res.json("Curso excluído")
    } catch (err) {
      console.log(err.message);
    }
});

app.delete("/aula/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedAula = await pool.query("DELETE FROM aula WHERE id = $1", [id]);
      res.json("Aula excluída")
    } catch (err) {
      console.log(err.message);
    }
});

app.delete("/avaliacao/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedAvaliacao = await pool.query("DELETE FROM avaliacao WHERE id = $1", [id]);
        res.json("Avaliação excluída")
    } catch (err) {
      console.log(err.message);
    }
});

app.delete("/boletim/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedBoletim = await pool.query("DELETE FROM boletim WHERE id = $1", [id]);
        res.json("Boletim excluído")
    } catch (err) {
      console.log(err.message);
    }
});

app.delete("/matricula/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedMatricula = await pool.query("DELETE FROM matricula WHERE id = $1", [id]);
        res.json("Matricula excluída")
    } catch (err) {
      console.log(err.message);
    }
});

app.delete("/pagamento/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedPgto = await pool.query("DELETE FROM pagamento WHERE id = $1", [id]);
        res.json("Pagamento excluída")
    } catch (err) {
      console.log(err.message);
    }
});

app.delete('/enderecos/:id', async(req,res) =>{
    try {
        const {id} = req.params;
        const deleteEndereco = await pool.query("DELETE FROM endereco WHERE id = $1", [id]);
        res.json("Endereco excluído");
    } catch (err) {
        console.error(err.message);
    }
})

app.delete('/escolas/:id', async(req,res) =>{
    try {
        const {id} = req.params;
        const deleteEndereco = await pool.query("DELETE FROM escola WHERE id = $1", [id]);
        res.json("Escola excluída");
    } catch (err) {
        console.error(err.message);
    }
})

app.delete('/aluno/:id', async(req,res) =>{
    try {
        const {id} = req.params;
        const deleteAluno = await pool.query("DELETE FROM aluno WHERE id = $1", [id]);
        res.json("Aluno excluído");
    } catch (err) {
        console.error(err.message);
    }
})

// SQLS -------------------------------------------------

app.get("/stats/cursos-ind", async(req, res) => {
    try {
        const allCursosInds = await pool.query('SELECT id, nome, valor_curso FROM curso WHERE curso.id NOT IN (SELECT c.id FROM curso c JOIN curso_professor cp ON c.id = cp.id_curso)')
        res.json(allCursosInds.rows);
    } catch (err) {
        console.log(err.message);   
    }
})

app.get("/stats/alunos-escola", async(req, res) => {
    try {
        const qtdeAlunosEscola = await pool.query('SELECT e.nome, COUNT(*) AS numero_alunos FROM escola e JOIN matricula m ON m.id_escola=e.id GROUP BY e.nome')
        res.json(qtdeAlunosEscola.rows)
    } catch (err) {
        console.log(err)
    }
})

app.get("/stats/alunos-curso", async(req, res) => {
    try {
        const qtdeAlunosCurso = await pool.query('SELECT c.nome, COUNT(*) AS numero_alunos FROM curso c JOIN matricula m ON m.id_curso = c.id GROUP BY c.nome')
        res.json(qtdeAlunosCurso.rows)
    } catch (err) {
        console.log(err)
    }
})

app.get("/stats/alunos-prof-curso", async(req, res) => {
    try {
        const qtdeAlunosProfCurso = await pool.query('SELECT e.nome as nome_professor, COUNT(*) AS numero_alunos, c.nome FROM curso c JOIN matricula m ON c.id = m.id_curso JOIN empregado e ON e.id = m.id_professor GROUP BY (e.nome, c.nome)')
        res.json(qtdeAlunosProfCurso.rows)
    } catch (err) {
        console.log(err)
    }
})

app.get("/stats/medias-boletim", async(req, res) => {
    try {
        const mediasBoletim = await pool.query('SELECT a.nome, AVG(b.nota_final) FROM aluno a JOIN boletim b ON b.id_aluno = a.id GROUP BY (a.nome)')
        res.json(mediasBoletim.rows)
    } catch (err) {
        console.log(err)
    }
})

app.get("/stats/alunos-menoridade", async(req, res) => {
    try {
        const alunosMenorIdade = await pool.query("SELECT a.nome, r.nome as nome_responsavel, r.telefone, r.celular FROM aluno a JOIN responsavel r ON a.id_responsavel = r.id WHERE (AGE(now(), a.data_nascimento) < '18 years'::interval)")
        res.json(alunosMenorIdade.rows)
    } catch (err) {
        console.log(err)
    }
})

app.get("/stats/alunos-faltantes", async(req, res) => {
    try {
        const alunosFaltantes = await pool.query('SELECT al.nome, COUNT(*) as numero_faltas FROM aula a JOIN matricula m ON m.id = a.id_matricula JOIN aluno al ON m.id_aluno = al.id WHERE a.status = false GROUP BY (al.nome)')
        res.json(alunosFaltantes.rows)
    } catch (err) {
        console.log(err)
    }
})

app.get("/stats/alunos-devedores", async(req, res) => {
    try {
        const alunosDevedores = await pool.query('SELECT a.nome AS devedor FROM aluno a JOIN matricula m ON m.id_aluno = a.id WHERE (SELECT count(*) FROM pagamento p WHERE p.id_matricula = m.id AND p.numero_parcela <= (SELECT EXTRACT (MONTH FROM age(now(), m.data_matricula)))) < (SELECT EXTRACT (MONTH FROM age(now(), m.data_matricula)))')
        res.json(alunosDevedores.rows)
    } catch (err) {
        console.log(err)
    }
})

app.get("/stats/comissao-professor", async(req, res) => {
    try {
        const comissaoProfessor = await pool.query("SELECT e.nome, (count(m)*c.valor_curso)/2 AS salario FROM empregado e JOIN tipo_empregado te ON te.id = e.id_tipo_empregado JOIN curso_professor cp ON cp.id_professor = e.id JOIN curso c ON c.id = cp.id_curso JOIN matricula m ON m.id_professor = e.id AND m.id_curso = c.id JOIN pagamento p ON p.id_matricula = m.id WHERE te.nome LIKE 'Professor' AND p.data_pagamento <= now() GROUP BY e.nome, c.valor_curso")
        res.json(comissaoProfessor.rows)
    } catch (err) {
        console.log(err)
    }
})

app.get("/stats/faturamento", async(req, res) => {
    try {
        const faturamento = await pool.query("SELECT e.nome, sum(p.valor_parcela + p.acrescimo - p.desconto - p.valor_parcela / 2) - sum(emp.salario)/count(emp) AS faturamento FROM escola e JOIN matricula m ON m.id_escola = e.id JOIN pagamento p ON p.id_matricula = m.id JOIN empregado emp ON emp.id_escola = e.id JOIN tipo_empregado te ON te.id = emp.id_tipo_empregado WHERE te.nome NOT LIKE 'Professor' GROUP BY e.nome")
        res.json(faturamento.rows)
    } catch (err) {
        console.log(err)
    }
})

app.listen(5000, () => {
    console.log("Server started on port 5000");
});

