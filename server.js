const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database(':memory:'); 
db.serialize(() => {
    db.run("CREATE TABLE usuarios (id INTEGER PRIMARY KEY, email TEXT, senha TEXT)");
    db.run("INSERT INTO usuarios (email, senha) VALUES ('admin@teste.com', '123456')");
    // CRUD: Tabela com status para permitir Update
    db.run("CREATE TABLE tarefas (id INTEGER PRIMARY KEY, titulo TEXT, status TEXT DEFAULT 'Pendente')");
});

app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    db.get("SELECT * FROM usuarios WHERE email = ? AND senha = ?", [email, senha], (err, row) => {
        if (row) res.send({ login: true });
        else res.status(401).send({ login: false });
    });
});

// CRUD: Consulta (Read)
app.get('/tarefas', (req, res) => {
    db.all("SELECT * FROM tarefas", [], (err, rows) => res.json(rows));
});

// CRUD: Registro (Create)
app.post('/tarefas', (req, res) => {
    db.run("INSERT INTO tarefas (titulo) VALUES (?)", [req.body.titulo], function(err) {
        res.status(201).json({ id: this.lastID });
    });
});

// CRUD: Update (Marcar como Concluída)
app.put('/tarefas/:id', (req, res) => {
    db.run("UPDATE tarefas SET status = 'Concluída' WHERE id = ?", [req.params.id], () => res.send({ ok: true }));
});

// CRUD: Deleção (Delete)
app.delete('/tarefas/:id', (req, res) => {
    db.run("DELETE FROM tarefas WHERE id = ?", [req.params.id], () => res.send({ ok: true }));
});

app.listen(3000, () => console.log("Servidor ON na porta 3000"));