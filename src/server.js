// ESM

//FASTIFY é um framework p/ backend, usado para construir servidores HTTP e API REST
//Como backends para aplicações web, mobile ou microserviços, de forma rapida e organizada
//Concorrente do EXPRESS, tem alto desempenho usando menos recursos
import Fastify from 'fastify'

//importa objeto do routes
//SERVER -> ROUTES -> CONTROLLERS -> REPOSITORIES -> DATABASE
import usersRoutes from './Routes/usersRoute.js'

const fastify = Fastify({
    // logger: true MOSTRA OS LOGS DO SERVIDOR NO TERMINAL
    logger: true
})

// ADICIONA O PREFIXO '/users' A TODAS AS ROTAS CRIADAS PELO OBJETO fastify
fastify.register(usersRoutes, {
    prefix: "/users"
})


// let users = [
//     {
//         name: "Nambert",
//         idade: 23
//     }
// ]

// fastify.get('/get', async (request, reply) => {
//     return { estatos: 'A nossa requisição get está funcionando' }
// })

// fastify.get("/users", async () => {
//     return users
// })

// fastify.post('/post', async (request, reply) => {
//     const novoUsuario = {
//         name: "Fernanda",
//         idade: 27
//     }
//     users.push(novoUsuario)
//     return {
//         message: "Usuario criado",
//         usuario : novoUsuario
//     }
// })


// INICIANDO O SERVIDOR
/**
 * Run the server!
 */
// async INFORMA QUE A ARROWFUNCTION IRA AGUARDAR ALGUM TIPO DE RESPOSTA
const start = async () => {
    try {
        // O OBJETO fastify TENTA SE CONECTAR A PORTA 3000
        await fastify.listen({ port: 3000 })
    } catch (err) {
        // EM CASO DE ERRO MOSTRA NO TERMINAL E ENCERRA A EXECUÇÃO
        fastify.log.error(err)
        process.exit(1)
    }
}
// INICIAR A FUNÇÃO start CRIADA ACIMA 
start()


// PARA INICIAR O SERVIDOR PELO TERMINAL USAR OS COMANDOS ABAIXO
// CMD
// CD SRC
// NODE --WATCH SERVER.JS

// --WATCH reinicia o servidor automaticamente após atualização no código.

// ALTERAR O ARQUIVO package.json, NA PROPRIEDADE scripts ADICIONAR A LINHA ABAIXO
//     "dev": "node --watch src/server.js",
// APÓS A ALTERAÇÃO, PODE EXECUTAR O COMANDO npm run dev NO TERMINAL PARA RODAR O PROJETO.
