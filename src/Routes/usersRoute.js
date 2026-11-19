// ROUTES definem as rotas.

//importa objeto do controllers
//SERVER -> ROUTES -> CONTROLLERS -> REPOSITORIES -> DATABASE
import usersController from "../Controllers/usersController.js";

//FASTIFY É um framework p/ backend, concorrente do EXPRESS
export default async function userRoutes(fastify){

    // DEFINE A ROTA QUE SERA ACESSADA PELA FUNÇÃO get
    fastify.get("/get", async ()=> {
        // RETORNA O get DO CONTROLLERS QUE IRA VALIDAR INFORMAÇÕES E ACESSOS
        return await usersController.get();
    })

    fastify.post("/post", async (req) =>{
        // envia os dados da requisição para o controller
        return await usersController.post(req)
    })

    fastify.put("/put", async (req) => {
        // envia os dados da requisição para o controller
        return await usersController.put(req)
    })

    fastify.delete("/delete", async (req)=> {
        // RETORNA O delete DO CONTROLLERS QUE IRA VALIDAR AS INFORMAÇÕES E ACESSOS
        return await usersController.delete(req);
    })

}