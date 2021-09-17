--CREATE TABLE Unioeste;

CREATE TABLE endereco(
	id SERIAL,
	logradouro varchar(30) NOT NULL,
	numero integer NOT NULL,
	complemento varchar(30),
	bairro varchar(30) NOT NULL,
	cidade varchar(30) NOT NULL DEFAULT 'Cascavel',
	uf varchar(2) NOT NULL,
	cep varchar(8),
	CONSTRAINT endereco_pkey PRIMARY KEY(id)
);

CREATE TABLE pessoa(
	id SERIAL,
	nome varchar(30) NOT NULL,
	id_endereco integer NOT NULL REFERENCES endereco ON DELETE CASCADE,
	telefone varchar(14),
	celular varchar(15) NOT NULL,
	data_nascimento date NOT NULL,
	rg varchar(8) NOT NULL,
	cpf varchar(11) NOT NULL,
	CONSTRAINT pessoa_pkey PRIMARY KEY(id),
	CONSTRAINT fk_endereco_id_endereco FOREIGN KEY (id_endereco) REFERENCES endereco(id)
);

CREATE TABLE tipo_empregado(
	id SERIAL,
	nome varchar(15),
	codigo integer UNIQUE NOT NULL,
	CONSTRAINT tipo_empregado_pkey PRIMARY KEY (id)
);

CREATE TABLE empregado( 
	id_tipo_empregado integer NOT NULL,
	salario decimal NOT NULL CHECK (salario > 0),
	carga_horaria INTERVAL NOT NULL, 
	CONSTRAINT fk_tipo_empregado_id_tipo_empregado FOREIGN KEY (id_tipo_empregado) REFERENCES tipo_empregado(id)	
) INHERITS (pessoa);

CREATE TABLE curso (
	id SERIAL,
	nome varchar(40) NOT NULL,
	codigo_curso integer UNIQUE NOT NULL,
	valor_curso decimal NOT NULL CHECK (valor_curso > 0),
	CONSTRAINT curso_pkey PRIMARY KEY(id)	
);

CREATE TABLE curso_professor(
	id SERIAL,
	id_professor integer NOT NULL,
	id_curso integer NOT NULL,
	CONSTRAINT curso_professor_pkey PRIMARY KEY (id),
	CONSTRAINT fk_pessoa_id_professor FOREIGN KEY (id_professor) REFERENCES pessoa(id),
	CONSTRAINT fk_curso_id_curso FOREIGN KEY (id_curso) REFERENCES curso(id)
);

CREATE TABLE responsavel(
	profissao varchar(30) NOT NULL,
	local_trabalho varchar(30) NOT NULL
) INHERITS (pessoa);

CREATE TABLE aluno(
	id_responsavel integer
	--CONSTRAINT fk_pessoa_id_responsavel FOREIGN KEY (id_responsavel) REFERENCES pessoa(id)
) INHERITS (pessoa);

CREATE TABLE escola(
	id SERIAL,
	nome varchar(30) NOT NULL,
	id_endereco integer NOT NULL REFERENCES endereco ON DELETE CASCADE,
	CONSTRAINT escola_pkey PRIMARY KEY (id),
	CONSTRAINT fk_endereco_id_endereco FOREIGN KEY (id_endereco) REFERENCES endereco(id)
);

CREATE TABLE matricula(
	id SERIAL,
	id_escola integer NOT NULL,
	id_aluno integer NOT NULL,
	id_professor integer NOT NULL,
	id_curso integer NOT NULL,
	duracao_aula INTERVAL NOT NULL,
	data_vencimento date NOT NULL,
	horario time NOT NULL,
	dia_semana SMALLINT NOT NULL,
	quantidade_parcela SMALLINT NOT NULL CHECK (quantidade_parcela > 0),
	CONSTRAINT matricula_pkey PRIMARY KEY (id),
	CONSTRAINT fk_escola_id_escola FOREIGN KEY (id_escola) REFERENCES escola(id),
	CONSTRAINT fk_pessoa_id_aluno FOREIGN KEY (id_aluno) REFERENCES pessoa(id),
	CONSTRAINT fk_pessoa_id_professor FOREIGN KEY (id_professor) REFERENCES pessoa(id),
	CONSTRAINT fk_curso_id_curso FOREIGN KEY (id_curso) REFERENCES curso(id)
);

CREATE TABLE pagamento(
	id SERIAL,
	id_matricula integer NOT NULL,
	valor_parcela decimal NOT NULL CHECK (valor_parcela > 0),
	desconto decimal NOT NULL DEFAULT 0 CHECK (desconto >= 0),
	acrescimo decimal NOT NULL DEFAULT 0 CHECK (acrescimo >= 0),
	data_pagamento date NOT NULL,
	numero_parcela SMALLINT NOT NULL CHECK (numero_parcela > 0),
	CONSTRAINT pagamento_pkey PRIMARY KEY(id),
	CONSTRAINT fk_matricula_id_matricula FOREIGN KEY (id_matricula) REFERENCES matricula(id)
);

CREATE TABLE avaliacao(
	id SERIAL,
	id_aluno integer NOT NULL,
	nota REAL NOT NULL CHECK (nota >= 0),
	observacao varchar(30),
	data_avaliacao date NOT NULL,
	CONSTRAINT avaliacao_pkey PRIMARY KEY(id),
	CONSTRAINT fk_pessoa_id_aluno FOREIGN KEY (id_aluno) REFERENCES pessoa(id)
);

CREATE TABLE banca(
	id SERIAL,
	id_avaliacao integer NOT NULL,
	id_professor_secundario integer NOT NULL,
	CONSTRAINT banca_pkey PRIMARY KEY(id),
	CONSTRAINT fk_avaliacao_id_avaliacao FOREIGN KEY (id_avaliacao) REFERENCES avaliacao(id),
	CONSTRAINT fk_pessoa_id_professor_secundario FOREIGN KEY (id_professor_secundario) REFERENCES pessoa(id)
);

CREATE TABLE boletim(
	id SERIAL,
	id_aluno integer NOT NULL,
	nota_final REAL NOT NULL,
	observacao varchar(30),
	data_emissao date NOT NULL,
	CONSTRAINT boletim_pkey PRIMARY KEY(id),
	CONSTRAINT fk_pessoa_id_aluno FOREIGN KEY (id_aluno) REFERENCES pessoa(id)
);

CREATE TABLE aula(
	id SERIAL,
	id_matricula integer NOT NULL,
	data_aula date NOT NULL,
	status SMALLINT NOT NULL,
	CONSTRAINT aula_pkey PRIMARY KEY(id),
	CONSTRAINT fk_matricula_id_matricula FOREIGN KEY (id_matricula) REFERENCES matricula(id)
);

