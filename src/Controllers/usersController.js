
// CONTROLLERS coordenam pedidos.

//importa objeto do repositorio
//SERVER -> ROUTES -> CONTROLLERS -> REPOSITORIES -> DATABASE
import usersRepository from "../Repositories/usersRepository.js";

const usersController = {
    async get(){
        // SOLICITA O ACESSO AO OBJETO NO REPOSITORIO
        return await usersRepository.get();
    },

    async post(request){
        // request.body fornece somente as informações contidas dentro do objeto sem suas referências, somente as variaveis.
        // economiza linhas de código, chamada de DESESTRUTURAÇÃO
        // exemplo: {name : request.body.name}
        // exemplo: {email: request.body.email}
        // exemplo: {age: request.body.age}
        // exemplo: {password: request.body.password}
        const {name, email, age, password} = request.body

        //envia os dados do objeto para o repositorio
        return await usersRepository.post(name, email, age, password)
    },

    async put(request){
        //envia os dados do objeto para o repositorio
        const {id, name, email, age, password} = request.body
        return await usersRepository.put(id, name, email, age, password)
    },
    
    async delete(request){
        const {id} = request.body
        // SOLICITA A EXCLUSÃO DO OBJETO NO REPOSITORIO
        return await usersRepository.delete(id)
    }

}

export default usersController;