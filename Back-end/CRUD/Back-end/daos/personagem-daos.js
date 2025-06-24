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
 update = async(id, objJSON) => {
    return await db.Personagem.update(objJSON, {
    where: { id: id }
    });
 }
 delete = async(id) => {
    return await db.Personagem.destroy({
    where: { id: id }
    });
 }
}
module.exports = PersonagemDAO