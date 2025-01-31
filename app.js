const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');
app.use(express.static('public'));
app.use('/public', express.static('public'));

// Rotas
app.get('/', (req, res) => {
    res.render('index', { title: 'Início' });
});

app.get('/servicos', (req, res) => {
    res.render('servicos', { title: 'Serviços' });
});

app.get('/contato', (req, res) => {
    res.render('contato', { title: 'Contato' });
});

app.get('/team', (req, res) => {
    res.render('team', { title: 'Nossa Equipe' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
}); 