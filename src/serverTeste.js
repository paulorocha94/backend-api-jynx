// SERVER.js inicia a aplicação


// Require the framework and instantiate it

// ESM
import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})

// CommonJs - APAGAR ESSA LINHA DE COMANDO
// NÃO RECONHECE O IMPORT/EXPORT DOS OBJETOS
// const fastify = require('fastify')({
//   logger: true
// })

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send("Servidor funcionando...")
})

fastify.get('/users', function(request, reply){
  reply.send({ Usuario: 'Paulo'})
})

fastify.get('/itens', function(request, reply){
    reply.send({ Tipo: 'Eletronicos' })
})

fastify.post('/user', function(request, reply){
    reply.send("Cadastrando algo..")
})

fastify.put('/user2', function(request, reply){
    reply.send( "Atualizado com sucesso")
})

fastify.delete ('/iten', function (request, reply){
    reply.send( "Item excluido com sucesso")
})

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})