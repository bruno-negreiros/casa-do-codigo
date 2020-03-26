module.exports = (app) => {
    // Criando as rotas
    app.get('/', function(req, resp) {
        resp.send(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Casa do Código</h1>
            </body>
        </html>
        `);
    });

    app.get('/livros', function(req, resp) {
        resp.send(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Lista de livros:</h1>
                <ul>
                    <li>Java</li>
                    <li>Angular</li>
                    <li>Node</li>
                    <li>React</li>
                    <li>React Native</li>
                </ul>
            </body>
        </html>
        `);
    });
}



