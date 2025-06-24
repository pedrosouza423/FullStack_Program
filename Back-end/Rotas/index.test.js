const request = require("supertest");
const express = require("express");
const app = express();
const db = require("./models/index.js");
const router = require("./rotas.js"); 

app.use(express.json());
app.use("/nota", router); 

beforeAll(async () => {
  await db.sequelize.sync({ force: true }); // zera a base de teste
});

afterAll(async () => {
  await db.sequelize.close();
});

describe("Testes da API /nota", () => {
  let idCriado;

  test("Criar nova nota (POST)", async () => {
    const resposta = await request(app).post("/nota").send({
      titulo: "Nota de Teste",
      descricao: "Descrição da nota de teste"
    });

    expect(resposta.statusCode).toBe(201);
    expect(resposta.body).toHaveProperty("id");
    idCriado = resposta.body.id;
  });

  test("Buscar todas as notas (GET)", async () => {
    const resposta = await request(app).get("/nota");
    expect(resposta.statusCode).toBe(200);
    expect(Array.isArray(resposta.body)).toBe(true);
  });

  test("Buscar nota por ID (GET /:id)", async () => {
    const resposta = await request(app).get(`/nota/${idCriado}`);
    expect(resposta.statusCode).toBe(200);
    expect(resposta.body.titulo).toBe("Nota de Teste");
  });

  test("Atualizar nota (PUT /:id)", async () => {
    const resposta = await request(app).put(`/nota/${idCriado}`).send({
      titulo: "Nota Atualizada",
      descricao: "Descrição atualizada"
    });

    expect(resposta.statusCode).toBe(200);
    expect(resposta.body.titulo).toBe("Nota Atualizada");
  });

  test("Excluir nota (DELETE /:id)", async () => {
    const resposta = await request(app).delete(`/nota/${idCriado}`);
    expect(resposta.statusCode).toBe(204);
  });

  test("Buscar nota inexistente retorna 404", async () => {
    const resposta = await request(app).get(`/nota/9999`);
    expect(resposta.statusCode).toBe(404);
  });
});
