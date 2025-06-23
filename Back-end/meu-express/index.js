const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ mensagem: "Alô, mundo Express!" });
  res.end();
});

app.listen(PORT, () => console.log(`Servidor na porta ${PORT}`));
