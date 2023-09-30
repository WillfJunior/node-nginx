const express = require('express');
const app = express();

app.get('/greetings', (req, res) => {
    console.log("Request received WEB1");
    //Nesta linha o WEB1 pode ser alterado para WEB2 no diretório web2.
    res.status(200).send("Opa meu nobre, um salve pra tu aqui por meio do NGINX com Node no WEB2.");
});

app.listen(5000, () => {
    console.log('Web application is listening on port 5000');
});