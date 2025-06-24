const db = require('../models/index.js');
class PersonagemDAO{
 create = async(objJSON) => {
 return await db.Personagem.create(objJSON);
 }
 findAll = async() => {
 return await db.Personagem.findAll();
 }
 find = async(id) => {
 return await db.Personagem.findByPk(id);
 }
}
module.exports = PersonagemDAO