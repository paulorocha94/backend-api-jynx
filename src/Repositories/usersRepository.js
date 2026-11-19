// REPOSITORIES acessa o banco de dados.
//SERVER -> ROUTES -> CONTROLLERS -> REPOSITORIES -> DATABASE


//IMPORT DOTENV acessa as informações de acesso ao banco que estão salva no arquivo da raiz do projeto
//npm install dotenv
import "dotenv/config"

//IMPORT NEON acessa a conexão com banco de dados
//npm install @neondatabase/serverless
import {neon} from "@neondatabase/serverless"

//Armazena o link do database que esta no .env
const dataBaseUrl = process.env.DATABASE_URL;

//Confere se existe algum valor no link recebido
if (!dataBaseUrl){
    throw new Error("DATABASE_URL não foi encontrado no .env")
}

//Acessa a biblioteca do NEON informando o link do banco de dados
const db = neon(dataBaseUrl);

const usersRepository = {
    // get ACESSA O BANCO DE DADOS E RETORNA A RESPOSTA DO COMANDO SQL
    async get(){
        return await db `SELECT * FROM users`
    }, 

    // post CRIA UM NOVO USUARIO
    async post(name, email, age, password){
        return await db `
        INSERT INTO users (name, email, age, password)
        VALUES (${name}, ${email}, ${age}, ${password})
        RETURNING *
        `
        //RETURNING * após a execução do comando ele mostra os dados da tabela
    }, 

    // put ALTERA DADOS DO USUARIO
    async put(id, name, email, age, password){
        return await db `
            UPDATE users
            SET 
                name = ${name},
                email = ${email},
                age = ${age},
                password = ${password}
            WHERE id = ${id}
            RETURNING *
        `
    },

    async delete(id){
        return await db`
            DELETE FROM users
            WHERE id = ${id}
            RETURNING *
        `
    }

}

export default usersRepository;