import * as http from 'http';
import { dateFormatPtbr } from "./convertDates/ptbr/dateFormatPtbr";

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); // Altera o tipo de conteúdo para HTML
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Exemplo de página HTML</title>
      </head>
      <body>
        <h1>Data formatada:</h1>
        <p>${dateFormatPtbr("2024-05-13")}</p>
      </body>
    </html>
  `;
  res.end(htmlContent); // Envia o conteúdo HTML
});

server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});