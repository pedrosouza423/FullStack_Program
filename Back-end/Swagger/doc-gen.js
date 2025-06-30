const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'API de Notas',
    description: 'API para gerenciamento de notas com autenticação'
  },
  host: 'localhost:3000',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./notas-dummy.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
