const Todo = require('./todo');

// cria os métodos de insert, update e delete
Todo.methods(['get', 'post', 'put', 'delete']);
// força o retorno do update a mostrar os dados atualizados
Todo.updateOptions({new: true, runValidatores: true});

module.exports = Todo;